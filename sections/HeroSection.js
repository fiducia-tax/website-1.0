import LastestNewsCTA from "@/components/LastestNewsCTA"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const HeroSection = () => {
    return (
        <section className="mx-6 my-24 text-center">
            <div className="my-6">
                <LastestNewsCTA />
            </div>
            <div className="pb-3">
                <h1 className="">
                    <span className="text-2xl lg:text-4xl font-bold text-text">Simplify your finances with</span>
                    <br />
                    <span className="text-primary lg:text-[6rem] text-4xl font-extrabold">Fiducia Tax</span>
                </h1>
            </div>
            <div className="pb-9 flex justify-center">
                <p className="text-xl max-w-xl italic text-pretty text-text">
                    Expert tax services, seamless payroll processing, and customized financial solutions—tailored to fit your unique needs.
                </p>
            </div>
            <div className="flex justify-center">
                <Link href={"https://calendly.com/fiduciatax"} target="_blank">
                    <button className="flex justify-center items-center rounded-full py-2 px-6 gap-4 bg-accent text-secondary hover:shadow-xl">
                        Get Started Today!
                        <ArrowLongRightIcon className="size-6" />
                    </button>
                </Link>
            </div>
        </section >
    )
}

export default HeroSection
