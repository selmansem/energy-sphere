"use client";
import EnergySphere from "energy-sphere";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-dvh p-8">
            <h1 className="text-3xl font-bold mb-8">Energy Sphere Component</h1>

            <div className="flex-1 flex items-stretch size-full bg-transparent">
                <EnergySphere />
            </div>

            <Footer />
        </main>
    );
}
