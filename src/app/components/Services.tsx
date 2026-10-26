"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Strategic Planning",
    description:
      "Navigating ambiguity to define clear, actionable roadmaps that align organizational resources with ambitious market objectives.",
    icon: "/assets/icons/strategy.svg",
  },
  {
    title: "Leadership Development",
    description:
      "Cultivating the next generation of executive talent through rigorous assessment, targeted coaching, and experiential learning.",
    icon: "/assets/icons/team.svg",
  },
  {
    title: "Operational Excellence",
    description:
      "Streamlining processes, optimizing supply chains, and integrating technology to drive efficiency and sustainable growth.",
    icon: "/assets/icons/operation.svg",
  },
];

export default function Services() {
    return (
        <section className="w-full px-6 py-16 md:px-10 lg:px-16">
            {/* Header */}
            <div className="mb-8 flex items-end justify-between">
                <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-600">
                        Core Competencies
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                        Architecting Advantage
                    </h2>
                </div>

                < Link
                    href="#"
                    className="hidden items-center gap-2 text-lg font-medium text-gray-700 transition hover:text-blue-600 sm:flex"
                >
                    View All Services
                    <span>→</span>
                </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mx-auto max-w-creen-2xl">
                {services.map((service) => {
                    return (
                        <div
                            key={service.title}
                            className="relative min-h-41.25 overflow-hidden bg-gray-50 p-6 group"
                        >
                            {/* Yellow top accent */}
                            <div className="absolute left-0 top-0 h-0.75 w-5 bg-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Icon */}
                            <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-md bg-indigo-100">
                                <Image src={service.icon} width={40} height={40} alt={service.title} className="h-4 w-4 text-gray-800" />
                            </div>

                            {/* Content */}
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                {service.title}
                            </h3>

                            <p className="max-w-sm text-base leading-[1.6] text-gray-500">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}