'use client';
import React, { useEffect, useRef } from 'react';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    glowIntensity: number;
    glowDirection: number;
}

interface Particle {
    x: number;
    y: number;
    progress: number;
    fromNode: number;
    toNode: number;
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
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            ctx.scale(dpr, dpr);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize nodes
        const nodeCount = window.innerWidth < 768 ? 12 : 18;
        nodesRef.current = Array.from({ length: nodeCount }, () => ({
            x: Math.random() * canvas.offsetWidth,
            y: Math.random() * canvas.offsetHeight,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() > 0.7 ? 6 : 3, // Some larger nodes
            glowIntensity: Math.random(),
            glowDirection: Math.random() > 0.5 ? 1 : -1,
        }));

        // Initialize particles
        particlesRef.current = [];

        // Animation loop
        const animate = () => {
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;

            // Clear canvas
            ctx.clearRect(0, 0, width, height);

            // Update nodes
            nodesRef.current.forEach((node) => {
                // Move nodes
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                // Keep in bounds
                node.x = Math.max(0, Math.min(width, node.x));
                node.y = Math.max(0, Math.min(height, node.y));

                // Update glow
                node.glowIntensity += node.glowDirection * 0.01;
                if (node.glowIntensity > 1 || node.glowIntensity < 0.3) {
                    node.glowDirection *= -1;
                }
            });

            // Draw connections
            nodesRef.current.forEach((node, i) => {
                nodesRef.current.slice(i + 1).forEach((otherNode, j) => {
                    const dx = node.x - otherNode.x;
                    const dy = node.y - otherNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Only connect close nodes
                    if (distance < 200) {
                        const opacity = (1 - distance / 200) * 0.3;

                        // Gradient line
                        const gradient = ctx.createLinearGradient(
                            node.x,
                            node.y,
                            otherNode.x,
                            otherNode.y
                        );
                        gradient.addColorStop(0, `rgba(6, 182, 212, ${opacity})`);
                        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.5})`);
                        gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`);

                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.stroke();

                        // Occasionally spawn particles
                        if (Math.random() > 0.995 && particlesRef.current.length < 30) {
                            particlesRef.current.push({
                                x: node.x,
                                y: node.y,
                                progress: 0,
                                fromNode: i,
                                toNode: i + j + 1,
                            });
                        }
                    }
                });
            });

            // Update and draw particles
            particlesRef.current = particlesRef.current.filter((particle) => {
                const fromNode = nodesRef.current[particle.fromNode];
                const toNode = nodesRef.current[particle.toNode];

                if (!fromNode || !toNode) return false;

                particle.progress += 0.02;

                if (particle.progress >= 1) return false;

                particle.x = fromNode.x + (toNode.x - fromNode.x) * particle.progress;
                particle.y = fromNode.y + (toNode.y - fromNode.y) * particle.progress;

                // Draw particle
                const gradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    4
                );
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
                gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 4, 0, Math.PI * 2);
                ctx.fill();

                return true;
            });

            // Draw nodes
            nodesRef.current.forEach((node) => {
                let glowIntensity = node.glowIntensity;

                // Interactive mode - react to mouse
                if (interactive && mousePosition) {
                    const dx = node.x - mousePosition.x;
                    const dy = node.y - mousePosition.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        glowIntensity = Math.min(1, glowIntensity + (1 - distance / 150) * 0.5);
                    }
                }

                // Outer glow
                const gradient = ctx.createRadialGradient(
                    node.x,
                    node.y,
                    0,
                    node.x,
                    node.y,
                    node.radius * 4
                );
                gradient.addColorStop(0, `rgba(6, 182, 212, ${glowIntensity * 0.6})`);
                gradient.addColorStop(0.5, `rgba(59, 130, 246, ${glowIntensity * 0.3})`);
                gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
                ctx.fill();

                // Core node
                const coreGradient = ctx.createRadialGradient(
                    node.x,
                    node.y,
                    0,
                    node.x,
                    node.y,
                    node.radius
                );
                coreGradient.addColorStop(0, `rgba(255, 255, 255, ${glowIntensity})`);
                coreGradient.addColorStop(0.5, `rgba(6, 182, 212, ${glowIntensity * 0.8})`);
                coreGradient.addColorStop(1, `rgba(59, 130, 246, ${glowIntensity * 0.6})`);

                ctx.fillStyle = coreGradient;
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
