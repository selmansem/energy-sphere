"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, BufferGeometry, AdditiveBlending } from "three";

const particleCount = 10000;
const particleSize = 0.01;

export default function EnergyParticles() {
    const points = useRef<Points>(null);
    const particlesGeometry = useRef<BufferGeometry>(null);

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = Math.random() * 0.5 + 0.5;

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);

            colors[i * 3] = 0.6 + Math.random() * 0.1; // Red: entre 0.9 y 1
            colors[i * 3 + 1] = 0.1 + Math.random() * 0.1; // Green: entre 0 y 0.1
            colors[i * 3 + 2] = 0.9 + Math.random() * 0.1; // Blue: entre 0 y 0.1
        }

        return { positions, colors };
    }, []);

    useFrame((state) => {
        if (points.current && particlesGeometry.current) {
            const time = state.clock.getElapsedTime();
            const positions = particlesGeometry.current.attributes.position
                .array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                const x = positions[i3];
                const y = positions[i3 + 1];
                const z = positions[i3 + 2];

                const distance = Math.sqrt(x * x + y * y + z * z);

                positions[i3] += Math.sin(time * 2 + distance * 5) * 0.0035;
                positions[i3 + 1] += Math.cos(time * 2 + distance * 5) * 0.0035;
                positions[i3 + 2] += Math.sin(time * 3 + distance * 5) * 0.0035;

                const newDistance = Math.sqrt(
                    positions[i3] * positions[i3] +
                        positions[i3 + 1] * positions[i3 + 1] +
                        positions[i3 + 2] * positions[i3 + 2]
                );
                positions[i3] *= distance / newDistance;
                positions[i3 + 1] *= distance / newDistance;
                positions[i3 + 2] *= distance / newDistance;
            }

            particlesGeometry.current.attributes.position.needsUpdate = true;
            points.current.rotation.y += 0.005;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry ref={particlesGeometry}>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particleCount}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={particleSize}
                vertexColors
                blending={AdditiveBlending}
                transparent
                depthWrite={false}
            />
        </points>
    );
}
