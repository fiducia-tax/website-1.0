import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const CTASection = () => {
    return (
        <section className="mx-6 my-16 lg:mx-36">
            <div className="lg:flex lg:justify-between lg:items-center gap-9">
                <div className="lg:w-2/3">
                    <span className="lg:text-4xl text-3xl font-semibold underline decoration-primary decoration-4 underline-offset-8 text-pretty italic">
                        Take control of your finances today—partner with Fiducia Tax for expert guidance and personalized solutions.
                    </span>
                </div>
                <div className="py-12">
                    <Link href={"https://calendly.com/fiduciatax"} target="_blank">
                        <button className="bg-primary text-secondary py-4 px-6 rounded-full font-semibold text-xl flex justify-center items-center gap-4 hover:shadow-xl">
                            Book Appointment
                            <ArrowUpRightIcon className="size-8" />
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default CTASection