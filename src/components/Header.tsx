"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHomePage = pathname === "/";

  const workshopTextColor = isHomePage ? "text-black" : "text-white";
  const navTextColor = "text-white";

  return (
    <header
      className={`
    top-0 flex items-center z-50 h-20 transition-colors duration-300
    ${
      isHomePage
        ? "bg-transparent md:[background:linear-gradient(to_right,transparent_50%,#1e88b6_50%)]"
        : "bg-[#1e88b6]"
    }
  `}
    >
      <div className="mx-6 flex items-center justify-between w-full">
        {/* Logo & Title */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/aux-logo.png"
              alt="Accelerate UX Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/">
            <p
              className={`text-lg sm:text-2xl mx-3 cursor-pointer ${workshopTextColor}`}
            >
              Accelerate UX Workshop
            </p>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center ml-auto">
          <Link href="/" className={`mx-3 ${navTextColor}`}>
            Home
          </Link>
          <Link href="/events" className={`mx-3 ${navTextColor}`}>
            Events
          </Link>
          <Link href="/resources" className={`mx-3 ${navTextColor}`}>
            Resources
          </Link>
          <Link href="/about" className={`mx-3 ${navTextColor}`}>
            About Us
          </Link>
          <Link href="/contact" className={`mx-3 ${navTextColor}`}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ml-auto ${
            isHomePage ? "text-[#1e88b6]" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Close /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#1e88b6] flex flex-col items-center py-4 md:hidden z-50">
          <Link
            href="/"
            className={`my-2 ${navTextColor}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/events"
            className={`my-2 ${navTextColor}`}
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/resources"
            className={`my-2 ${navTextColor}`}
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>
          <Link
            href="/about"
            className={`my-2 ${navTextColor}`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`my-2 ${navTextColor}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
