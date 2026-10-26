"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/services", label: "Services" },
    { href: "/case_studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
];

export default function Footer() {
    const pathname = usePathname();

    function renderLinks() {
        return links.map((link) => {
            const isActive = pathname === link.href;
            return (
                <Link key={link.href}
                    href={link.href}
                    className={`text-gray-600 font-medium text-base rounded-lg transition-all duration-300  hover:text-blue-600 ${isActive ? 'text-blue-600 font-medium transition-all duration-200 hover:text-blue-500' : ''}`}>
                    {link.label}
                </Link>
            );
        });
    }

    return (
        <footer>
            <div className="flex items-center justify-evenly max-w-screen-2xl mx-auto">
                <div>
                    <p className="font-bold text-2xl">Lumina Advisors</p>
                    <p className="mb-4 max-w-sm text-base leading-6 text-gray-600">Empowering visionary leaders with strategic clarity and operational excellence to navigate complex global markets </p>
                    <div className="flex items-center gap-5">
                        <Image src={"/assets/icons/instagram.png"} alt="instagram handle" width={50} height={50} />
                        <Image src={"/assets/icons/linkedin.png"} alt="LinkedIn handle" width={50} height={50} />
                        <Image src={"/assets/icons/youtube.png"} alt="Youtube handle" width={50} height={50} />
                    </div>
                </div>
                <div className=" flex flex-col gap-4">
                    <p className="text-base font-bold tracking-wider uppercase">Quick Links</p>
                    {renderLinks()}
                </div>
                <div>
                    <p className="text-base font-bold tracking-wider uppercase m-4">Contact</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <Image src={"/assets/icons/placeholder.png"} alt="Location icon" width={50} height={50} />
                            <p className="text-base leading-6 text-gray-600" >1200 Avenue of the Americas New York, NY 10036</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src={"/assets/icons/telephone.png"} alt="phone icon" width={50} height={50} />
                            <p className="text-base leading-6 text-gray-600">+1 (555) 012-3456</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src={"/assets/icons/email.png"} alt="email icon" width={50} height={50} />
                            <p className="text-base leading-6 text-gray-600">info@luminaadvisors.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mx-auto max-w-screen-2xl">
                <div className="text-base leading-6 text-gray-600 mx-62.5">@ 2026 Lumina Advisory Group. All rights reserved</div>
                <div className="text-base leading-6 text-gray-600 flex gap-4 mx-20">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}