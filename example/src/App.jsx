import EnergySphere from "energy-sphere";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

function App() {
    return (
        <main className="flex flex-col items-center justify-between min-h-dvh p-8">
            <h1 className="text-3xl font-bold mb-8">Energy Sphere Component</h1>

            <div className="flex-1 flex items-stretch size-full bg-transparent">
                <EnergySphere />
            </div>

            <footer className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-8 px-4 w-full border-t border-stone-300/30">
                <p className="text-xs text-stone-400">
                    Made with ❤️ by Souhaib EM
                </p>
                <div className="flex gap-3 items-center">
                    <a href="https://github.com/selmansem" target="_blank">
                        <SiGithub size={16} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/selmansem"
                        target="_blank"
                    >
                        <SiLinkedin size={16} />
                    </a>
                    <a href="https://x.com/souhaib_em" target="_blank">
                        <SiX size={16} />
                    </a>
                </div>
            </footer>
        </main>
    );
}

export default App;
