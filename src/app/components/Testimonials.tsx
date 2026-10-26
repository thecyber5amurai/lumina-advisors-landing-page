import Image from "next/image";
import QuoteIcon from "@/public/assets/icons/quote-26-double-close.svg"

const testimonials = [
    {
        quote:
            "Lumina's diagnostic phase uncovered $40M in latent operational efficiencies we had overlooked for years.",
        name: "Marcus Jensen",
        role: "COO, Aeris Global",
        initials: "MJ",
    },
    {
        quote:
            "The strategic architecture provided a roadmap that was both ambitious and remarkably executable.",
        name: "Sarah Liao",
        role: "VP Strategy, FinTech One",
        initials: "SL",
    },
    {
        quote:
            "Their leadership development program transformed our executive bench into a cohesive, high-performance unit.",
        name: "David Vance",
        role: "CEO, Nexus Logistics",
        initials: "DV",
    },
];

export default function Testimonial() {
    return (
        <section className="bg-[#111827] py-8">
            <div className="flex flex-col items-center justify-center gap-8">
                <Image src={QuoteIcon} alt="Testimonial quote icon" width={50} />
                <h2 className="text-white text-2xl font-semibold">Client Perspectives</h2>
                <div className="mx-auto grid max-w-screen-2xl gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="rounded-md border border-white/10 bg-[#1d2638] p-5"
                        >
                            <p className="text-base italic leading-6 text-gray-300">
                                &quot;{testimonial.quote}&quot;
                            </p>

                            <div className="mt-6 flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 text-xs font-medium text-gray-700">
                                    {testimonial.initials}
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-white">
                                        {testimonial.name}
                                    </p>

                                    <p className="text-xs text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}