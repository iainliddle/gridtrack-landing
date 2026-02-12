'use client';
import React, { useEffect, useRef } from 'react';

interface Pylon {
    x: number;
    y: number;
    scale: number;
    opacity: number;
}

interface Wire {
    pylonA: number;
    pylonB: number;
    armIndex: number; // Which arm of the pylon the wire attaches to
}

interface Pulse {
    wireIndex: number;
    progress: number;
    speed: number;
}

interface Spark {
    x: number;
    y: number;
    life: number;
    vx: number;
    vy: number;
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
    const pylonsRef = useRef<Pylon[]>([]);
    const wiresRef = useRef<Wire[]>([]);
    const pulsesRef = useRef<Pulse[]>([]);
    const sparksRef = useRef<Spark[]>([]);
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
            initializeInfrastructure();
        };

        const initializeInfrastructure = () => {
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;

            const newPylons: Pylon[] = [];
            const newWires: Wire[] = [];

            // We'll create a few rows of pylons to create depth
            const rows = 3;
            const pylonsPerRow = 5;

            for (let r = 0; r < rows; r++) {
                const z = 1 - (r / rows); // Depth factor
                const scale = 0.4 + z * 0.6;
                const opacity = 0.2 + z * 0.5;
                const yPos = height * 0.4 + (r * height * 0.15);

                const rowPylons: number[] = [];
                for (let i = 0; i < pylonsPerRow; i++) {
                    const xPos = (width / (pylonsPerRow - 1)) * i;
                    // Add slight random offset to make it look less robotic
                    const x = xPos + (Math.random() - 0.5) * 50 * z;

                    rowPylons.push(newPylons.length);
                    newPylons.push({
                        x,
                        y: yPos,
                        scale,
                        opacity
                    });
                }

                // Connect pylons in this row
                for (let i = 0; i < rowPylons.length - 1; i++) {
                    // Each pylon has 3 arms (left, right, top - or just 3 levels)
                    for (let arm = 0; arm < 3; arm++) {
                        newWires.push({
                            pylonA: rowPylons[i],
                            pylonB: rowPylons[i + 1],
                            armIndex: arm
                        });
                    }
                }
            }

            pylonsRef.current = newPylons;
            wiresRef.current = newWires;
            pulsesRef.current = [];
            sparksRef.current = [];
        };

        const getPylonConnectionPoint = (pylon: Pylon, armIndex: number) => {
            const h = 120 * pylon.scale;
            const w = 40 * pylon.scale;
            // Arm offsets
            const armY = [h * 0.3, h * 0.55, h * 0.8];
            const armW = [w * 1.2, w * 1.5, w * 1.8];

            // X is slightly left or right depending on row? Let's just alternate or use armIndex
            const side = armIndex % 2 === 0 ? 1 : -1;
            return {
                x: pylon.x + (armW[armIndex] * 0.5 * side),
                y: pylon.y - h + armY[armIndex]
            };
        };

        const drawPylon = (ctx: CanvasRenderingContext2D, pylon: Pylon) => {
            const h = 120 * pylon.scale;
            const w = 40 * pylon.scale;

            ctx.strokeStyle = `rgba(100, 116, 139, ${pylon.opacity * 0.5})`;
            ctx.lineWidth = 1.5 * pylon.scale;

            ctx.beginPath();
            // Main vertical legs
            ctx.moveTo(pylon.x - w / 2, pylon.y);
            ctx.lineTo(pylon.x - w / 6, pylon.y - h);
            ctx.lineTo(pylon.x + w / 6, pylon.y - h);
            ctx.lineTo(pylon.x + w / 2, pylon.y);

            // Cross bars
            const armY = [h * 0.3, h * 0.55, h * 0.8];
            const armW = [w * 1.2, w * 1.5, w * 1.8];

            armY.forEach((yOff, i) => {
                const y = pylon.y - h + yOff;
                const aw = armW[i];
                ctx.moveTo(pylon.x - aw / 2, y);
                ctx.lineTo(pylon.x + aw / 2, y);
            });

            // Lattice work
            ctx.moveTo(pylon.x - w / 2, pylon.y - h * 0.2);
            ctx.lineTo(pylon.x + w / 2, pylon.y - h * 0.4);
            ctx.moveTo(pylon.x + w / 2, pylon.y - h * 0.2);
            ctx.lineTo(pylon.x - w / 2, pylon.y - h * 0.4);

            ctx.stroke();
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const animate = () => {
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;

            ctx.clearRect(0, 0, width, height);

            // 1. Draw Pylons
            pylonsRef.current.forEach(pylon => drawPylon(ctx, pylon));

            // 2. Draw Wires (Transmission Lines)
            ctx.lineWidth = 0.5;
            wiresRef.current.forEach(wire => {
                const pA = pylonsRef.current[wire.pylonA];
                const pB = pylonsRef.current[wire.pylonB];
                const ptA = getPylonConnectionPoint(pA, wire.armIndex);
                const ptB = getPylonConnectionPoint(pB, wire.armIndex);

                ctx.strokeStyle = `rgba(59, 130, 246, ${Math.min(pA.opacity, pB.opacity) * 0.3})`;
                ctx.beginPath();
                ctx.moveTo(ptA.x, ptA.y);
                // Subtle sag? (catenary curve approximation)
                const midX = (ptA.x + ptB.x) / 2;
                const midY = (ptA.y + ptB.y) / 2 + 10 * pA.scale;
                ctx.quadraticCurveTo(midX, midY, ptB.x, ptB.y);
                ctx.stroke();
            });

            // 3. Spawn and Update Pulses
            if (Math.random() > 0.95 && pulsesRef.current.length < 20) {
                pulsesRef.current.push({
                    wireIndex: Math.floor(Math.random() * wiresRef.current.length),
                    progress: 0,
                    speed: 0.005 + Math.random() * 0.01
                });
            }

            pulsesRef.current = pulsesRef.current.filter(pulse => {
                pulse.progress += pulse.speed;
                if (pulse.progress >= 1) {
                    // Trigger spark at destination
                    const wire = wiresRef.current[pulse.wireIndex];
                    const pB = pylonsRef.current[wire.pylonB];
                    const ptB = getPylonConnectionPoint(pB, wire.armIndex);

                    for (let i = 0; i < 5; i++) {
                        sparksRef.current.push({
                            x: ptB.x,
                            y: ptB.y,
                            life: 1,
                            vx: (Math.random() - 0.5) * 4,
                            vy: (Math.random() - 0.5) * 4
                        });
                    }
                    return false;
                }

                const wire = wiresRef.current[pulse.wireIndex];
                const pA = pylonsRef.current[wire.pylonA];
                const pB = pylonsRef.current[wire.pylonB];
                const ptA = getPylonConnectionPoint(pA, wire.armIndex);
                const ptB = getPylonConnectionPoint(pB, wire.armIndex);

                const midX = (ptA.x + ptB.x) / 2;
                const midY = (ptA.y + ptB.y) / 2 + 10 * pA.scale;

                // Position along quadratic curve
                const t = pulse.progress;
                const px = (1 - t) * (1 - t) * ptA.x + 2 * (1 - t) * t * midX + t * t * ptB.x;
                const py = (1 - t) * (1 - t) * ptA.y + 2 * (1 - t) * t * midY + t * t * ptB.y;

                // Draw pulse glow
                const rad = 6 * pA.scale;
                const glow = ctx.createRadialGradient(px, py, 0, px, py, rad * 3);
                glow.addColorStop(0, 'rgba(255, 255, 255, 1)');
                glow.addColorStop(0.2, 'rgba(6, 182, 212, 0.8)');
                glow.addColorStop(1, 'rgba(6, 182, 212, 0)');

                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(px, py, rad * 3, 0, Math.PI * 2);
                ctx.fill();

                return true;
            });

            // 4. Update and Draw Sparks
            sparksRef.current = sparksRef.current.filter(spark => {
                spark.x += spark.vx;
                spark.y += spark.vy;
                spark.life -= 0.05;
                if (spark.life <= 0) return false;

                ctx.strokeStyle = `rgba(255, 255, 255, ${spark.life})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(spark.x, spark.y);
                ctx.lineTo(spark.x - spark.vx * 2, spark.y - spark.vy * 2);
                ctx.stroke();

                return true;
            });

            // 5. Interaction
            if (interactive && mousePosition) {
                pylonsRef.current.forEach(pylon => {
                    const dx = pylon.x - mousePosition.x;
                    const dy = (pylon.y - 60 * pylon.scale) - mousePosition.y; // Centered on pylon
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        const intensity = (1 - dist / 150) * 0.5;
                        ctx.strokeStyle = `rgba(34, 211, 238, ${intensity})`;
                        ctx.lineWidth = 2 * pylon.scale;
                        drawPylon(ctx, pylon);

                        // Local crackles for interaction
                        if (Math.random() > 0.8) {
                            const armIdx = Math.floor(Math.random() * 3);
                            const pt = getPylonConnectionPoint(pylon, armIdx);
                            sparksRef.current.push({
                                x: pt.x,
                                y: pt.y,
                                life: 0.5,
                                vx: (Math.random() - 0.5) * 6,
                                vy: (Math.random() - 0.5) * 6
                            });
                        }
                    }
                });
            }

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
