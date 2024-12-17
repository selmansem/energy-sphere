import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

export default function Footer() {
    return (
        <footer className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-8 px-4 w-full border-t border-stone-300/30">
            <p className="text-xs text-stone-400">Made with ❤️ by Souhaib EM</p>
            <div className="flex gap-3 items-center">
                <a href="https://github.com/selmansem" target="_blank">
                    <SiGithub size={16} />
                </a>
                <a href="https://www.linkedin.com/in/selmansem" target="_blank">
                    <SiLinkedin size={16} />
                </a>
                <a href="https://x.com/souhaib_em" target="_blank">
                    <SiX size={16} />
                </a>
            </div>
        </footer>
    );
}
