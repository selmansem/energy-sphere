"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EnergyParticles from "./EnergyParticles";

const EnergySphere = React.forwardRef<any, any>(
    (
        {
            zoom = false,
            rotate = false,
        }: {
            zoom?: boolean;
            rotate?: boolean;
        },
        ref: React.Ref<any>
    ) => {
        return (
            <Canvas
                ref={ref}
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
);

export default EnergySphere;
