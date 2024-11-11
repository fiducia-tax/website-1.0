import { ClipboardDocumentListIcon, EnvelopeIcon, HomeIcon, PhoneIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const MobileNav = () => {
    return (
        <nav className="lg:hidden">
            <div className="fixed bottom-0 w-full bg-accent flex justify-center items-center p-4 z-50">
                <div className="flex gap-8">
                    <Link href="/" className="active:border-b-secondary active:border-b-2 text-secondary">
                        <HomeIcon className="size-8 m-1" />
                    </Link>
                    <Link href="/#services" className="active:border-b-secondary active:border-b-2  text-secondary">
                        <ClipboardDocumentListIcon className="size-8 m-1" />
                    </Link>
                    <Link href="/articles" className="active:border-b-secondary active:border-b-2  text-secondary">
                        <RectangleStackIcon className="size-8 m-1" />
                    </Link>
                    <Link href="/contact" className="active:border-b-secondary active:border-b-2 text-secondary">
                        <EnvelopeIcon className="size-8 m-1" />
                    </Link>
                    <Link href="https://calendly.com/fiduciatax" target="_blank" className="active:border-b-secondary active:border-b-2 text-secondary">
                        <PhoneIcon className="size-8 m-1" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;




