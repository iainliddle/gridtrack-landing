'use client';
import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { QuadraticBezierLine, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// --- Types ---

interface NetworkVisualizationProps {
    interactive?: boolean;
    mousePosition?: { x: number; y: number } | null;
}

// --- Components ---

const Pylon = ({ position, scale = 1, opacity = 0.5 }: { position: [number, number, number], scale?: number, opacity?: number }) => {
    const material = useMemo(() => new THREE.MeshPhongMaterial({
        color: 0x1e293b,
        transparent: true,
        opacity: opacity,
        shininess: 30
    }), [opacity]);

    const h = 250 * scale;
    const w = 80 * scale;

    return (
        <group position={position}>
            {/* Legs */}
            <mesh position={[-w * 0.15, h / 2, -w * 0.15]} rotation={[0.1, 0, 0.1]}>
                <cylinderGeometry args={[1, 3, h, 4]} />
                <primitive object={material} attach="material" />
            </mesh>
            <mesh position={[w * 0.15, h / 2, -w * 0.15]} rotation={[0.1, 0, -0.1]}>
                <cylinderGeometry args={[1, 3, h, 4]} />
                <primitive object={material} attach="material" />
            </mesh>
            <mesh position={[w * 0.15, h / 2, w * 0.15]} rotation={[-0.1, 0, -0.1]}>
                <cylinderGeometry args={[1, 3, h, 4]} />
                <primitive object={material} attach="material" />
            </mesh>
            <mesh position={[-w * 0.15, h / 2, w * 0.15]} rotation={[-0.1, 0, 0.1]}>
                <cylinderGeometry args={[1, 3, h, 4]} />
                <primitive object={material} attach="material" />
            </mesh>

            {/* Arms & Insulators */}
            {[0.65, 0.8, 0.95].map((yStep, i) => {
                const y = h * yStep;
                const armW = w * (1.8 - i * 0.2);
                return (
                    <group key={i} position={[0, y, 0]}>
                        <mesh>
                            <boxGeometry args={[armW, 4, 4]} />
                            <primitive object={material} attach="material" />
                        </mesh>
                        {/* Insulators */}
                        {[-1, 1].map(side => (
                            <mesh key={side} position={[(armW / 2) * side, -6, 0]}>
                                <cylinderGeometry args={[2, 2, 12, 8]} />
                                <meshPhongMaterial color="#475569" />
                            </mesh>
                        ))}
                    </group>
                );
            })}
        </group>
    );
};

const TransmissionLine = ({ start, end }: { start: THREE.Vector3, end: THREE.Vector3 }) => {
    const mid = useMemo(() => {
        const m = new THREE.Vector3().lerpVectors(start, end, 0.5);
        m.y -= 40; // Sag
        return m;
    }, [start, end]);

    return (
        <QuadraticBezierLine
            start={start}
            end={end}
            mid={mid}
            color="#3b82f6"
            lineWidth={0.5}
            transparent
            opacity={0.3}
        />
    );
};

const Pulse = ({ curve, speed, onComplete }: { curve: THREE.QuadraticBezierCurve3, speed: number, onComplete: () => void }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const progress = useRef(0);

    useFrame(() => {
        progress.current += speed;
        if (progress.current >= 1) {
            onComplete();
        } else {
            if (meshRef.current) {
                const pos = curve.getPoint(progress.current);
                meshRef.current.position.copy(pos);
            }
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[4, 8, 8]} />
            <meshStandardMaterial
                color="#06b6d4"
                emissive="#06b6d4"
                emissiveIntensity={4 + Math.random() * 2}
            />
        </mesh>
    );
};

const InfrastructureScene = ({ mousePosition, interactive }: { mousePosition?: { x: number, y: number } | null, interactive: boolean }) => {
    const [pulses, setPulses] = useState<{ id: number, curve: THREE.QuadraticBezierCurve3, speed: number }[]>([]);
    const nextId = useRef(0);
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    // Setup Grid
    const { pylonData, lineData } = useMemo(() => {
        const rows = 3;
        const cols = 5;
        const spacingX = 500;
        const spacingZ = 800;
        const pylons: any[] = [];
        const lines: any[] = [];

        for (let r = 0; r < rows; r++) {
            const z = -r * spacingZ;
            const opacity = 0.2 + (1 - r / rows) * 0.5;
            for (let c = 0; c < cols; c++) {
                const x = (c - (cols - 1) / 2) * spacingX + (Math.random() - 0.5) * 150;
                pylons.push({ id: r * cols + c, position: [x, 0, z], scale: 0.8 + (1 - r / rows) * 0.4, opacity });
            }
        }

        // Connect lines
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols - 1; c++) {
                const pA = pylons[r * cols + c];
                const pB = pylons[r * cols + (c + 1)];

                [0.65, 0.8, 0.95].map((yStep, i) => {
                    const hA = 250 * pA.scale;
                    const hB = 250 * pB.scale;
                    const yA = hA * yStep - 10;
                    const yB = hB * yStep - 10;
                    const wA = 80 * pA.scale * (1.8 - i * 0.2);
                    const wB = 80 * pB.scale * (1.8 - i * 0.2);

                    [-1, 1].forEach(side => {
                        const start = new THREE.Vector3(pA.position[0] + (wA / 2) * side, yA, pA.position[2]);
                        const end = new THREE.Vector3(pB.position[0] + (wB / 2) * side, yB, pB.position[2]);
                        const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);
                        mid.y -= 40;
                        lines.push({
                            start,
                            end,
                            curve: new THREE.QuadraticBezierCurve3(start, mid, end)
                        });
                    });
                });
            }
        }

        return { pylonData: pylons, lineData: lines };
    }, []);

    useFrame(() => {
        // Spawn Pulses
        if (Math.random() > 0.96 && pulses.length < 20) {
            const line = lineData[Math.floor(Math.random() * lineData.length)];
            setPulses(prev => [...prev, { id: nextId.current++, curve: line.curve, speed: 0.005 + Math.random() * 0.01 }]);
        }

        // Camera Parallax
        if (cameraRef.current && mousePosition && interactive) {
            const targetX = (mousePosition.x / window.innerWidth - 0.5) * 300;
            const targetY = 400 - (mousePosition.y / window.innerHeight - 0.5) * 150;
            cameraRef.current.position.x += (targetX - cameraRef.current.position.x) * 0.05;
            cameraRef.current.position.y += (targetY - cameraRef.current.position.y) * 0.05;
            cameraRef.current.lookAt(0, 150, -600);
        }
    });

    return (
        <>
            <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 300, 800]} fov={60} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[200, 500, 200]} intensity={2.5} color="#3b82f6" />
            <fog attach="fog" args={['#0a0f1c', 100, 3000]} />

            {/* Pylons */}
            {pylonData.map(p => (
                <Pylon key={p.id} position={p.position} scale={p.scale} opacity={p.opacity} />
            ))}

            {/* Lines */}
            {lineData.map((l, i) => (
                <TransmissionLine key={i} start={l.start} end={l.end} />
            ))}

            {/* Active Pulses */}
            {pulses.map(p => (
                <Pulse key={p.id} curve={p.curve} speed={p.speed} onComplete={() => setPulses(current => current.filter(item => item.id !== p.id))} />
            ))}
        </>
    );
};

export const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({
    interactive = false,
    mousePosition = null
}) => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ background: '#0a0f1c' }}>
            <Canvas
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
                camera={{ fov: 60 }}
            >
                <InfrastructureScene mousePosition={interactive ? mousePosition : null} interactive={interactive} />
            </Canvas>
        </div>
    );
};
