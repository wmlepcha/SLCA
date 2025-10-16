"use client";

import { useState, useEffect, useRef } from "react";
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

export default function WavyMobileNav() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);
  const navRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveTab(pathname);
    const index = navItems.findIndex(item => item.href === pathname);
    setActiveIndex(index >= 0 ? index : 0);
  }, [pathname]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center md:hidden block">
      <nav className="wavy-nav-container" ref={navRef} aria-label="Main Navigation">
        <div className="wavy-nav-background">
        </div>
        
        <div className="wavy-nav-items">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`wavy-nav-item ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="wavy-nav-icon-wrapper">
                  <div className="wavy-nav-icon-container">
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className="wavy-nav-icon" 
                    />
                  </div>
                </div>
                <span className="wavy-nav-label">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
