import WhatsAppIcon from "@/icons/WhatsAppIcon"
import { CheckBadgeIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const FeaturesSection = () => {
    return (
        <section className="mx-6 lg:mx-36 my-36 flex justify-center lg:text-secondary" id="services">
            <div className="lg:bg-accent lg:shadow-xl lg:py-16 rounded-xl lg:flex lg:justify-center lg:gap-x-36 text-pretty">
                <div className="pb-6 lg:w-2/6">
                    <h2 className="text-3xl font-bold pb-6 ">
                        Fiducia Tax offers a comprehensive range of financial services designed to meet all your tax and payroll needs.
                    </h2>
                    <Link href={"https://wa.me/13072071072"} target="blank">
                        <button className="text-[#25D366] flex justify-start items-center gap-3 text-xl mb-6">
                            <WhatsAppIcon />
                            <span className="hover:underline hover:underline-offset-4">
                                Chat with our advisors now
                            </span>
                            <ChevronRightIcon className="size-6" />
                        </button>
                    </Link>
                </div>

                <div className="lg:w-2/6">
                    <div className="pb-4">
                        <div className="flex mx-3 gap-4">
                            <div>
                                <CheckBadgeIcon className="size-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold pb-2 text-xl">Comprehensive Tax Services</h3>
                                <p className="">From filing and preparation to refunds and IRS compliance, we cover all your tax needs with precision and expertise.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="flex mx-3 gap-4">
                            <div>
                                <CheckBadgeIcon className="size-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold pb-2 text-xl">Hassle-Free Payroll Processing</h3>
                                <p className="">Our seamless payroll solutions ensure your employees are paid accurately and on time, with full compliance to employment tax regulations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="flex mx-3 gap-4">
                            <div>
                                <CheckBadgeIcon className="size-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold pb-2 text-xl">SSN/ITIN & EIN Filing Support</h3>
                                <p className="">We guide you through the process of obtaining necessary identification numbers, simplifying your business or personal tax obligations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="flex mx-3 gap-4">
                            <div>
                                <CheckBadgeIcon className="size-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold pb-2 text-xl">Tailored Financial Solutions</h3>
                                <p className="">We offer customized financial strategies designed to meet your specific goals, whether you’re an individual or a business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="flex mx-3 gap-4">
                            <div>
                                <CheckBadgeIcon className="size-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold pb-2 text-xl">Reliable IRS Filing Assistance</h3>
                                <p className="">Stay compliant and stress-free with our comprehensive IRS filing services, ensuring you meet all your federal tax obligations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="flex mx-3 gap-4">
                            <div>
                                <CheckBadgeIcon className="size-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold pb-2 text-xl">Personalized Client Support</h3>
                                <p className="">We prioritize your unique needs, providing dedicated support and expert advice every step of the way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection