import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Buffer } from "buffer";
import process from "process";
import dotenv from "dotenv";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: "og-middleware",
            configureServer(server) {
                server.middlewares.use(async (req, res, next) => {
                    if (req.url?.startsWith("/api/og")) {
                        try {
                            const { generateOgImage } = await import(
                                "./src/og"
                            );
                            const url = new URL(
                                '/energySphere.png',
                                process.env.VITE_APP_URL
                            );
                            const title = "Energy Sphere Component";
                            const subtitle =
                                "A React component for displaying energy spheres.";
                            const imageResponse = await generateOgImage(
                                url.href,
                                title,
                                subtitle
                            );

                            const buffer = Buffer.from(
                                await imageResponse.arrayBuffer()
                            );
                            res.statusCode = 200;
                            res.setHeader("Content-Type", "image/png");
                            res.end(buffer);
                        } catch (e) {
                            console.error(e);
                            res.statusCode = 500;
                            res.setHeader("Content-Type", "text/plain");
                            res.end("Error generating image");
                        }
                    } else {
                        next();
                    }
                });
            },
        },
    ],
    esbuild: {
        loader: "jsx",
        include: /src\/.*\.jsx?$/,
        exclude: [],
    },
});
