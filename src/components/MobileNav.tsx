"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faBullseye, faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { href: "/", label: "Home", icon: faHome },
  { href: "/about", label: "About", icon: faInfoCircle },
  { href: "/objectives", label: "Objectives", icon: faBullseye },
  { href: "/documents", label: "Documents", icon: faFileAlt },
  { href: "/contact", label: "Contact", icon: faEnvelope },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#222] text-white">
      <div className="lepcha-border-mini" />
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = activeTab === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center justify-center py-3 px-2 transition-all duration-300 ${isActive ? 'text-[var(--brand-green)]' : 'text-gray-400'}`}
            >
              <div className={`relative ${isActive ? 'nav-item-active' : ''}`}>
                <div className="icon-container">
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className={`h-5 w-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} 
                  />
                </div>
                {!isActive && (
                  <span className="text-xs mt-1">{item.label}</span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
