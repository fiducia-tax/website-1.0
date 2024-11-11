import { FAQs } from "@/constants/FAQs"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const FAQSection = () => {
    return (
        <section className="mx-6 my-24 lg:my-48 lg:mx-36">
            <div className="lg:flex lg:justify-between lg:items-start gap-16">
                <div className="text-center lg:text-left lg:w-2/4 lg:sticky lg:top-12">
                    <h3 className="lg:text-4xl text-3xl font-bold pb-3 text-primary">
                        Frequently Asked Questions
                    </h3>
                    <span className="text-xl text-pretty text-text">Got Questions? We’ve Got Answers. Find quick answers to some of the most common questions about our tax and financial services, from filing to refunds and everything in between.</span>
                </div>
                <div className="grid justify-center py-6 lg:py-0 lg:w-2/4 text-text" >
                    <div className="max-w-xl">
                        {FAQs.map((faq) => (
                            <Disclosure key={faq.question} as="div" className="grid py-3">
                                <DisclosureButton className="text-left font-semibold group flex justify-between items-start gap-9 py-3">
                                    <span className="w-4/5 text-xl text-pretty">
                                        {faq.question}
                                    </span>
                                    <ChevronDownIcon className="size-6 group-data-[open]:rotate-180 bg-secondary text-accent p-1 rounded-full" />
                                </DisclosureButton>
                                <DisclosurePanel className="text-left w-4/5 text-pretty">
                                    {faq.answer}
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection


