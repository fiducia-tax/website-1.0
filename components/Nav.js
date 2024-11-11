"use client"

import Logo from "@/constants/Logo"
import { NavLinks } from "@/constants/NavLinks"
import Link from "next/link"

const Nav = () => {
    return (
        <nav className="max-lg:hidden mx-36 my-6 font-semibold">
            <div className="flex justify-between items-center gap-16">
                <div className="">
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                </div>
                <div className="flex items-center gap-9">
                    <div className="flex gap-6">
                        {NavLinks.map((links) => (
                            <Link key={links.label} href={links.link} className="">
                                {links.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <button className="py-3 px-6 border rounded-full">
                                <Link href={"https://calendly.com/fiduciatax"} target="_blank">
                                    Schedule a Call
                                </Link>
                            </button>
                        </div>
                        <div>
                            <button className="bg-primary text-background py-3 px-6 rounded-full">
                                <Link href={"/signin"}>
                                    Sign In
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav