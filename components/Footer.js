import { FooterLinks } from "@/constants/FooterLinks";
import Logo from "@/constants/Logo";
import { SocialLinks } from "@/constants/SocialLinks";
import Link from "next/link";
import Copyright from "./Copyright";
import { PoliciesLinks } from "@/constants/PoliciesLinks";

const Footer = () => {
    return (
        <footer className="max-lg:hidden bg-accent text-secondary mt-36">
            <nav className="px-36 py-12">
                <div className="grid grid-cols-4 gap-9">
                    <div className="">
                        <Logo />
                        <p className="py-6 text-pretty text-md">
                            Your financial well-being is our priority. Fiducia Tax provides expert tax services and personalized financial solutions to help you thrive with peace of mind.
                        </p>
                    </div>
                    <div className="justify-self-end">
                        <h2 className="font-bold text-xl">EXPLORE</h2>
                        <div className="py-1 text-md">
                            {FooterLinks.map((link) => (
                                <Link key={link.label} href={link.link} target={link.target} className="block py-1 opacity-70 hover:opacity-100" aria-label={link.label}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="justify-self-center">
                        <h2 className="font-bold text-xl">LET&#39;S CONNECT</h2>
                        <div className="py-1 text-md">
                            {SocialLinks.map((link) => (
                                <Link key={link.label} href={link.link} target={link.target} className="block py-1 opacity-70 hover:opacity-100" aria-label={link.label}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="justify-self-start">
                        <h2 className="font-bold text-xl">IMPORTANT</h2>
                        <div className="py-1 text-md">
                            {PoliciesLinks.map((link) => (
                                <Link key={link.label} href={link.link} target={link.target} className="block py-1 opacity-70 hover:opacity-100" aria-label={link.label}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="pt-12 text-sm">
                    <Copyright />
                </div>
            </nav>
        </footer>
    )
}

export default Footer;
