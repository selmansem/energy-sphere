import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
    title: "Energy Sphere Component",
    description: "A React component for displaying energy spheres.",
    icons: {
        icon: "/logo.svg",
    },
    openGraph: {
        title: "Energy Sphere Component",
        description: "A React component for displaying energy spheres.",
        url: process.env.NEXT_PUBLIC_URL,
        siteName: "Energy Sphere Component",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_URL}/api/og`,
                width: 1200,
                height: 630,
                alt: "Energy Sphere Component",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${GeistSans.className} ${GeistMono.className} antialiased`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
