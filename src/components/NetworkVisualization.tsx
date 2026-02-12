'use client';
import React, { useEffect, useRef } from 'react';

interface Node {
    x: number;
    y: number;
    radius: number;
    baseGlow: number;
    pulseGlow: number;
    connections: number[];
}

interface Pulse {
    fromIndex: number;
    toIndex: number;
    progress: number;
    speed: number;
}

interface NetworkVisualizationProps {
    interactive?: boolean;
    mousePosition?: { x: number; y: number } | null;
}

export const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({
    interactive = false,
    mousePosition = null
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nodesRef = useRef<Node[]>([]);
    const pulsesRef = useRef<Pulse[]>([]);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            ctx.scale(dpr, dpr);
            initializeGrid();
        };

        const initializeGrid = () => {
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;

            // Define grid dimensions based on screen size
            const cols = window.innerWidth < 768 ? 5 : 8;
            const rows = window.innerWidth < 768 ? 4 : 6;

            const cellWidth = width / (cols + 1);
            const cellHeight = height / (rows + 1);

            const newNodes: Node[] = [];

            // Initialize nodes in a structured grid with slight random offset
            for (let r = 1; r <= rows; r++) {
                for (let c = 1; c <= cols; c++) {
                    newNodes.push({
                        x: c * cellWidth + (Math.random() - 0.5) * cellWidth * 0.3,
                        y: r * cellHeight + (Math.random() - 0.5) * cellHeight * 0.3,
                        radius: Math.random() > 0.8 ? 5 : 3,
                        baseGlow: 0.2 + Math.random() * 0.2,
                        pulseGlow: 0,
                        connections: []
                    });
                }
            }

            // Create connections between neighbors
            newNodes.forEach((node, i) => {
                newNodes.forEach((otherNode, j) => {
                    if (i === j) return;

                    const dx = node.x - otherNode.x;
                    const dy = node.y - otherNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Connect nodes within a certain distance (grid neighbors)
                    if (distance < cellWidth * 1.5) {
                        if (!node.connections.includes(j)) {
                            node.connections.push(j);
                        }
                    }
                });
            });

            nodesRef.current = newNodes;
            pulsesRef.current = [];
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const animate = () => {
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;

            ctx.clearRect(0, 0, width, height);

            // 1. Draw Static Connections (Cables)
            ctx.lineWidth = 1;
            nodesRef.current.forEach((node, i) => {
                node.connections.forEach(targetIndex => {
                    // Only draw each connection once
                    if (targetIndex > i) {
                        const target = nodesRef.current[targetIndex];
                        const dx = node.x - target.x;
                        const dy = node.y - target.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        // Subtle cable look
                        ctx.strokeStyle = `rgba(59, 130, 246, 0.15)`;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(target.x, target.y);
                        ctx.stroke();
                    }
                });
            });

            // 2. Spawn and Update Pulses
            if (Math.random() > 0.97 && pulsesRef.current.length < 25) {
                const startIndex = Math.floor(Math.random() * nodesRef.current.length);
                const node = nodesRef.current[startIndex];
                if (node.connections.length > 0) {
                    const targetIndex = node.connections[Math.floor(Math.random() * node.connections.length)];
                    pulsesRef.current.push({
                        fromIndex: startIndex,
                        toIndex: targetIndex,
                        progress: 0,
                        speed: 0.005 + Math.random() * 0.015
                    });
                }
            }

            pulsesRef.current = pulsesRef.current.filter(pulse => {
                pulse.progress += pulse.speed;

                if (pulse.progress >= 1) {
                    // Trigger surge on target node
                    const targetNode = nodesRef.current[pulse.toIndex];
                    if (targetNode) {
                        targetNode.pulseGlow = 1;
                    }
                    return false;
                }

                const from = nodesRef.current[pulse.fromIndex];
                const to = nodesRef.current[pulse.toIndex];

                const px = from.x + (to.x - from.x) * pulse.progress;
                const py = from.y + (to.y - from.y) * pulse.progress;

                // Draw pulse
                const pulseGradient = ctx.createRadialGradient(px, py, 0, px, py, 6);
                pulseGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
                pulseGradient.addColorStop(0.4, 'rgba(6, 182, 212, 0.8)');
                pulseGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

                ctx.fillStyle = pulseGradient;
                ctx.beginPath();
                ctx.arc(px, py, 6, 0, Math.PI * 2);
                ctx.fill();

                return true;
            });

            // 3. Update and Draw Nodes
            nodesRef.current.forEach(node => {
                // Decay pulse glow
                node.pulseGlow *= 0.95;
                if (node.pulseGlow < 0.01) node.pulseGlow = 0;

                let drawGlow = node.baseGlow + node.pulseGlow * 0.8;

                // Interactive mode - react to mouse
                if (interactive && mousePosition) {
                    const dx = node.x - mousePosition.x;
                    const dy = node.y - mousePosition.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) {
                        drawGlow = Math.min(1, drawGlow + (1 - distance / 200) * 0.5);

                        // Energize connections near mouse
                        node.connections.forEach(targetIdx => {
                            const target = nodesRef.current[targetIdx];
                            const tdx = target.x - mousePosition.x;
                            const tdy = target.y - mousePosition.y;
                            const tDist = Math.sqrt(tdx * tdx + tdy * tdy);

                            if (tDist < 200) {
                                ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - (distance + tDist) / 400) * 0.4})`;
                                ctx.beginPath();
                                ctx.moveTo(node.x, node.y);
                                ctx.lineTo(target.x, target.y);
                                ctx.stroke();
                            }
                        });
                    }
                }

                // Draw node glow
                const nodeGlow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
                nodeGlow.addColorStop(0, `rgba(6, 182, 212, ${drawGlow})`);
                nodeGlow.addColorStop(1, 'rgba(6, 182, 212, 0)');

                ctx.fillStyle = nodeGlow;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
                ctx.fill();

                // Draw node core
                ctx.fillStyle = `rgba(255, 255, 255, ${0.7 + drawGlow * 0.3})`;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [interactive, mousePosition]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ width: '100%', height: '100%' }}
        />
    );
};
