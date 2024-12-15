"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EnergyParticles from "./EnergyParticles";

export default function EnergySphere({
    zoom = false,
    rotate = false,
}: {
    zoom?: boolean;
    rotate?: boolean;
}) {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            style={{ height: "auto" }}
        >
            <Suspense fallback={null}>
                <EnergyParticles />
                <OrbitControls enableZoom={zoom} enableRotate={rotate} />
            </Suspense>
        </Canvas>
    );
}
