'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NetworkVisualizationProps {
    interactive?: boolean;
    mousePosition?: { x: number; y: number } | null;
}

export const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({
    interactive = false,
    mousePosition = null
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        pylons: THREE.Group[];
        wires: THREE.Line[];
        pulses: { mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; progress: number; speed: number }[];
    } | null>(null);
    const animationFrameRef = useRef<number>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- 1. SETUP SCENE ---
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0f1c);
        scene.fog = new THREE.FogExp2(0x0a0f1c, 0.001);

        const camera = new THREE.PerspectiveCamera(
            60,
            containerRef.current.offsetWidth / containerRef.current.offsetHeight,
            0.1,
            5000
        );
        camera.position.set(0, 400, 1000);
        camera.lookAt(0, 100, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        // --- 2. LIGHTING ---
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x3b82f6, 3);
        directionalLight.position.set(200, 800, 200);
        scene.add(directionalLight);

        // --- 3. PYLON MODEL HELPER ---
        const createPylon = () => {
            const group = new THREE.Group();
            const material = new THREE.MeshPhongMaterial({ color: 0x1e293b, shininess: 30 });

            const h = 250;
            const w = 80;

            // Legs
            const legGeom = new THREE.CylinderGeometry(1, 6, h, 4);
            const legs = [
                { x: -w / 2, z: -w / 2 },
                { x: w / 2, z: -w / 2 },
                { x: w / 2, z: w / 2 },
                { x: -w / 2, z: w / 2 }
            ];

            legs.forEach(pos => {
                const leg = new THREE.Mesh(legGeom, material);
                leg.position.set(pos.x * 0.4, h / 2, pos.z * 0.4);
                leg.rotation.z = pos.x > 0 ? 0.12 : -0.12;
                leg.rotation.x = pos.z > 0 ? -0.12 : 0.12;
                group.add(leg);
            });

            // Arms
            const armY = [h * 0.65, h * 0.8, h * 0.95];
            const armW = [w * 1.8, w * 1.6, w * 1.4];

            armY.forEach((y, i) => {
                const currentArmW = armW[i];
                const arm = new THREE.Mesh(new THREE.BoxGeometry(currentArmW, 4, 4), material);
                arm.position.y = y;
                group.add(arm);

                // Insulators
                const insGeom = new THREE.CylinderGeometry(2, 2, 12, 8);
                const insMat = new THREE.MeshPhongMaterial({ color: 0x475569 });

                [-1, 1].forEach(side => {
                    const ins = new THREE.Mesh(insGeom, insMat);
                    ins.position.set((currentArmW / 2) * side, y - 6, 0);
                    group.add(ins);
                });
            });

            return group;
        };

        // --- 4. POPULATE GRID ---
        const pylons: THREE.Group[] = [];
        const wires: THREE.Line[] = [];
        const pulses: { mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; progress: number; speed: number }[];

        const rows = 4;
        const cols = 5;
        const spacingX = 500;
        const spacingZ = 800;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const pylon = createPylon();
                const x = (c - (cols - 1) / 2) * spacingX + (Math.random() - 0.5) * 150;
                const z = -r * spacingZ + (Math.random() - 0.5) * 150;
                pylon.position.set(x, 0, z);
                scene.add(pylon);
                pylons.push(pylon);
            }
        }

        // --- 5. CREATE WIRES ---
        const wireMaterial = new THREE.LineBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.2 });
        const actualPulses: { mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; progress: number; speed: number }[] = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols - 1; c++) {
                const pA = pylons[r * cols + c];
                const pB = pylons[r * cols + (c + 1)];

                for (let arm = 0; arm < 3; arm++) {
                    const armYs = [162, 200, 237]; // Calculated from h=250 and armY ratios
                    const armWs = [144, 128, 112]; // Calculated from w=80 and armW ratios
                    const y = armYs[arm];
                    const xOff = (armWs[arm] / 2);

                    [-1, 1].forEach(side => {
                        const start = new THREE.Vector3(pA.position.x + xOff * side, y - 10, pA.position.z);
                        const end = new THREE.Vector3(pB.position.x + xOff * side, y - 10, pB.position.z);
                        const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);
                        mid.y -= 40;

                        const curve = new THREE.CatmullRomCurve3([start, mid, end]);
                        const points = curve.getPoints(25);
                        const geometry = new THREE.BufferGeometry().setFromPoints(points);
                        const line = new THREE.Line(geometry, wireMaterial);
                        scene.add(line);
                        wires.push(line);
                    });
                }
            }
        }

        sceneRef.current = { scene, camera, renderer, pylons, wires, pulses: actualPulses };

        const handleResize = () => {
            if (!containerRef.current || !sceneRef.current) return;
            const width = containerRef.current.offsetWidth;
            const height = containerRef.current.offsetHeight;
            sceneRef.current.camera.aspect = width / height;
            sceneRef.current.camera.updateProjectionMatrix();
            sceneRef.current.renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // --- 6. ANIMATION LOOP ---
        const pulseGeometry = new THREE.SphereGeometry(4, 8, 8);
        const pulseMaterial = new THREE.MeshStandardMaterial({
            color: 0x06b6d4,
            emissive: 0x06b6d4,
            emissiveIntensity: 5
        });

        const animate = () => {
            if (!sceneRef.current) return;
            const { scene, camera, renderer, pulses, wires } = sceneRef.current;

            // Spawn random pulses
            if (Math.random() > 0.94 && pulses.length < 25) {
                const randomWireIdx = Math.floor(Math.random() * wires.length);
                const line = wires[randomWireIdx];
                const points = (line.geometry as THREE.BufferGeometry).attributes.position.array;

                const pA = new THREE.Vector3(points[0], points[1], points[2]);
                const pB = new THREE.Vector3(points[points.length - 3], points[points.length - 2], points[points.length - 1]);
                const mid = new THREE.Vector3().lerpVectors(pA, pB, 0.5);
                mid.y -= 40;

                const curve = new THREE.CatmullRomCurve3([pA, mid, pB]);
                const mesh = new THREE.Mesh(pulseGeometry, pulseMaterial.clone());
                scene.add(mesh);

                pulses.push({
                    mesh,
                    curve,
                    progress: 0,
                    speed: 0.004 + Math.random() * 0.008
                });
            }

            // Update pulses
            for (let i = pulses.length - 1; i >= 0; i--) {
                const pulse = pulses[i];
                pulse.progress += pulse.speed;

                if (pulse.progress >= 1) {
                    scene.remove(pulse.mesh);
                    pulses.splice(i, 1);
                } else {
                    const pos = pulse.curve.getPoint(pulse.progress);
                    pulse.mesh.position.copy(pos);
                    (pulse.mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 3 + Math.random() * 5;
                }
            }

            // Camera Parallax
            if (mousePosition) {
                const targetX = (mousePosition.x / window.innerWidth - 0.5) * 300;
                const targetY = 400 - (mousePosition.y / window.innerHeight - 0.5) * 150;
                camera.position.x += (targetX - camera.position.x) * 0.03;
                camera.position.y += (targetY - camera.position.y) * 0.03;
                camera.lookAt(0, 150, -600);
            }

            // Unused interactive variable check to satisfy lint (if needed)
            if (interactive) {
                // Future interactive logic here
            }

            renderer.render(scene, camera);
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            if (sceneRef.current) {
                const { renderer, scene } = sceneRef.current;
                renderer.dispose();
                scene.clear();
                if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, [mousePosition, interactive]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ zIndex: 0 }}
        />
    );
};
