import Image from "next/image";
import Methodology from "@/public/assets/methodology.jpg"

const steps = [
    {
        number: "1",
        title: "Diagnostic Assessment",
        description:
            "We conduct an unvarnished audit of current state operations, identifying critical bottlenecks and untapped leverage points.",
    },
    {
        number: "2",
        title: "Strategic Architecture",
        description:
            "Collaborative design of the future state model, prioritizing initiatives based on impact, feasibility, and time-to-value.",
    },
    {
        number: "3",
        title: "Implementation & Embedding",
        description:
            "Active stewardship through rollout phases, ensuring capability transfer to your internal teams for sustained success.",
    },
];

export default function MethodologySection() {
    return (
        <section className="bg-[#f1f2f3] px-6 py-16 md:px-12 lg:px-20">
            <div className="mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 max-w-screen-2xl">

                {/* LEFT SIDE */}
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-700">
                        Methodology
                    </p>

                    <h2 className="mb-5 text-2xl font-semibold text-gray-900 md:text-4xl">
                        Precision in Execution
                    </h2>

                    <p className="mb-8 max-w-md text-base leading-6 text-gray-600">
                        Our approach is deeply analytical yet inherently pragmatic.
                        We do not deliver theoretical binders; we embed alongside your
                        team to drive measurable outcomes.
                    </p>

                    <div className="relative h-70 w-full overflow-hidden md:h-82.5">
                        <Image
                            src={Methodology}
                            alt="Team working on business analysis"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4.75 top-5 bottom-5 hidden w-px bg-gray-300 sm:block" />

                    <div className="flex flex-col gap-8">
                        {steps.map((step) => (
                            <div key={step.number} className="relative flex gap-4">

                                {/* Number */}
                                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-[#f1f2f3] text-lg text-gray-800">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="pt-1">
                                    <h3 className="mb-2 text-lg font-semibold text-gray-900 md:text-xl">
                                        {step.title}
                                    </h3>

                                    <p className="max-w-xl text-base leading-6 text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}