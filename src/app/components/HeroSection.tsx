import Image from "next/image";
import HeroBg from '@/public/assets/hero-bg.jpg';
import { Button } from "./Button";

export default function HeroSection() {
    return (
        <section>
            <div className="relative w-full min-h-screen">
                <Image
                src={HeroBg}
                alt="Hero Background"
                priority
                fill
                    className="object-cover object-center" />
                <div className="absolute inset-0 z-10 flex items-center justify-start px-12 bg-black/80">
                    <div className="max-w-xl rounded-2xl p-10  text-white flex flex-col justify-center gap-5">
                        <span className="font-bold tracking-widest text-sm text-blue-400">STRATEGIC ADVISORY</span>
                        <h1 className="text-5xl font-bold tracking-tight text-slate-300 leading-tight max-w-xl my-3">Elevating Executive Performance</h1>
                        <p className="text-xl text-slate-200">We partner with visionary leaders to decode complexity, architect resilient strategies and build operational excellence that endures market volatility</p>
                        <div className="flex items-center gap-4">
                            <Button label="Book a Consultation" />
                            <Button label="Explore Case Studies" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}