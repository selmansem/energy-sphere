/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export async function GET() {
    const border_b_colors = [
        "#2C003E",
        "#4B0082",
        "#7B1FA2",
        "#BA68C8",
        "#E1BEE7",
    ];

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    backgroundImage:
                        "linear-gradient(135deg, #2C003E 0%, #2C003E 10%, #000000 78%)",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flex: "1 1 0%",
                        gap: "10px",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                            padding: "30px 50px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <h1 style={{ color: "#fff", fontSize: "2rem" }}>
                                Energy Sphere Component
                            </h1>
                            <p style={{ color: "#fff", fontSize: "1rem" }}>
                                A React component for displaying energy spheres.
                            </p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                color: "#fff",
                                fontSize: "1rem",
                            }}
                        >
                            Made with ❤️ by Souhaib EM
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            height: "100%",
                            color: "#fff",
                            flex: "1 1 0%",
                        }}
                    >
                        <img
                            src={`${process.env.NEXT_PUBLIC_URL}/energySphere.png`}
                            style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                //maskImage: "radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 56%)",
                            }}
                            alt="Energy Sphere Component"
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                    }}
                >
                    {border_b_colors.map((color, index) => (
                        <span
                            key={`bc-${index}`}
                            style={{
                                flex: "1 1 0%",
                                width: "100%",
                                height: "6px",
                                backgroundColor: `${color}`,
                            }}
                        ></span>
                    ))}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
