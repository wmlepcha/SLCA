"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/objectives", label: "Objectives" },
  { href: "/documents", label: "Documents" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--dark-green)] text-[var(--butter-yellow)] transition-transform duration-300">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight flex items-center gap-2">
          <Image src="/images/logo.png" alt="SLCA logo" width={64} height={64} className="mr-1" />
          <div className="pr-2 flex flex-col bebas-neue-regular hidden md:flex">
            <span className="text-[30px] mb-[-15px]">SIKKIMESE LEPCHA</span>
            <span className="text-[20px]">CULTURAL ASSOCIATION</span>
          </div>
          <div className="pr-2 flex flex-col bebas-neue-regular md:hidden">
            <span className="text-[20px] mb-[-10px]">SIKKIMESE</span>
            <span className="text-[14px]">LEPCHA CULTURAL ASSOC.</span>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative hover:opacity-90 transition-all ${isActive ? 'font-semibold opacity-100' : 'opacity-70'}`}
              >
                <span>{item.label}</span>
                <span className={`absolute -bottom-1 left-0 right-0 h-[2px] transition-transform origin-left ${isActive ? 'bg-[var(--butter-yellow)] scale-x-100 opacity-100' : 'bg-[var(--butter-yellow)] opacity-70 scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            );
          })}
        </nav>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="lepcha-border" />
    </header>
  );
}
