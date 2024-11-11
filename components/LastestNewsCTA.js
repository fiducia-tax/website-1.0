import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const LastestNewsCTA = () => {
    return (
        <div className="flex justify-center">
            <Link href={"/"}>
                <div className="flex items-center gap-4 border border-accent rounded-full py-1 px-2 text-sm w-fit">
                    <div>
                        <span className="bg-primary rounded-full px-2 py-1 text-secondary font-semibold">Attention</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <div>
                            <span className="text-text">Federal BOI Filings</span>
                        </div>
                        <div>
                            <ArrowLongRightIcon className="size-6 text-text" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default LastestNewsCTA


