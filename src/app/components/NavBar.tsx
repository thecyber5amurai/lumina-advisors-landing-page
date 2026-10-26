'use client'
import Image from "next/image";
import logo from "@/public/assets/logos/consultancy_logo.png"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./Button";


const links = [
    {href: "/services", label: "Services"},
    {href: "/case_studies", label: "Case Studies"},
    {href: "/about", label: "About"},
    {href: "/contact", label: "Contact"}
];

export default function NavBar() {
    const pathname = usePathname();

    function renderLinks() {
        return links.map((link) => {
            const isActive = pathname === link.href;
            return (
                <Link key={link.href}
                href={link.href}
                className={`px-4 py-2 text-gray-700 font-medium text-lg rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${isActive ? 'px-4 py-2 text-blue-600 font-medium border border-transparent rounded-full transition-all duration-200 hover:bg-blue-600 hover:text-white' : ''}`}>
                {link.label}
                </Link>
            );
        });
    }
    return (
        <header className=" flex items-center p-8 justify-between">
            <div className="flex gap-2 items-center">
                <Image src={logo} alt = 'Company-logo' width={40} height={40} priority />
                <p className="font-bold text-2xl">Lumina Advisors</p>
            </div>
            <nav>
                {renderLinks()}
            </nav>
            <div className="flex items-center gap-10 text-lg">
            <Button label="Login" variants="secondary"/>
            <Button label="Sign Up" variants="primary" />
            </div>
        </header>
    );
}