import React, { useRef, useMemo, Suspense } from "react";

import { useFrame, Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

import { AdditiveBlending } from "three";

const particleCount = 1e4;

const particleSize = .01;

function EnergyParticles() {
    const points = useRef(null);
    const particlesGeometry = useRef(null);
    const {positions, colors} = useMemo((() => {
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = Math.random() * .5 + .5;
            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
            colors[i * 3] = .6 + Math.random() * .1;
            colors[i * 3 + 1] = .1 + Math.random() * .1;
            colors[i * 3 + 2] = .9 + Math.random() * .1;
        }
        return {
            positions,
            colors
        };
    }), []);
    useFrame((state => {
        if (points.current && particlesGeometry.current) {
            const time = state.clock.getElapsedTime();
            const positions = particlesGeometry.current.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                const x = positions[i3];
                const y = positions[i3 + 1];
                const z = positions[i3 + 2];
                const distance = Math.sqrt(x * x + y * y + z * z);
                positions[i3] += Math.sin(time * 2 + distance * 5) * .0035;
                positions[i3 + 1] += Math.cos(time * 2 + distance * 5) * .0035;
                positions[i3 + 2] += Math.sin(time * 3 + distance * 5) * .0035;
                const newDistance = Math.sqrt(positions[i3] * positions[i3] + positions[i3 + 1] * positions[i3 + 1] + positions[i3 + 2] * positions[i3 + 2]);
                positions[i3] *= distance / newDistance;
                positions[i3 + 1] *= distance / newDistance;
                positions[i3 + 2] *= distance / newDistance;
            }
            particlesGeometry.current.attributes.position.needsUpdate = true;
            points.current.rotation.y += .005;
        }
    }));
    return React.createElement("points", {
        ref: points
    }, React.createElement("bufferGeometry", {
        ref: particlesGeometry
    }, React.createElement("bufferAttribute", {
        attach: "attributes-position",
        count: particleCount,
        array: positions,
        itemSize: 3
    }), React.createElement("bufferAttribute", {
        attach: "attributes-color",
        count: particleCount,
        array: colors,
        itemSize: 3
    })), React.createElement("pointsMaterial", {
        size: particleSize,
        vertexColors: true,
        blending: AdditiveBlending,
        transparent: true,
        depthWrite: false
    }));
}

function EnergySphere({zoom = false, rotate = false}) {
    return React.createElement(Canvas, {
        camera: {
            position: [ 0, 0, 5 ],
            fov: 60
        },
        style: {
            height: "auto"
        }
    }, React.createElement(Suspense, {
        fallback: null
    }, React.createElement(EnergyParticles, null), React.createElement(OrbitControls, {
        enableZoom: zoom,
        enableRotate: rotate
    })));
}

export { EnergySphere as default };
