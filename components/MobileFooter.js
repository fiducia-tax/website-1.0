import { FooterLinks } from "@/constants/FooterLinks";
import Logo from "@/constants/Logo";
import { SocialLinks } from "@/constants/SocialLinks";
import Link from "next/link";
import Copyright from "./Copyright";
import { PoliciesLinks } from "@/constants/PoliciesLinks";

const MobileFooter = () => {
  return (
    <footer className="lg:hidden bg-accent text-secondary mt-36 max-sm:mb-20">
      <nav className="m-6">
        <div className="p-8 rounded-xl shadow-lg">
          <div>
            <Logo />
            <p className="py-6">
              Your financial well-being is our priority. Fiducia Tax provides expert tax services and personalized financial solutions to help you thrive with peace of mind.
            </p>
          </div>
          <div className="py-6">
            <h2 className="font-bold">EXPLORE</h2>
            <div className="my-1">
              {FooterLinks.map((link) => (
                <Link key={link.label} href={link.link} className="block py-1 text-md opacity-70 hover:opacity-100" aria-label={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="py-6">
            <h2 className="font-bold">LET&#39;S CONNECT</h2>
            <div className="my-1">
              {SocialLinks.map((link) => (
                <Link key={link.label} href={link.link} className="block py-1 text-md opacity-70 hover:opacity-100" aria-label={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="py-6">
            <h2 className="font-bold">IMPORTANT</h2>
            <div className="my-1">
              {PoliciesLinks.map((link) => (
                <Link key={link.label} href={link.link} className="block py-1 text-md opacity-70 hover:opacity-100" aria-label={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div  className="text-sm">
            <Copyright />
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default MobileFooter;

