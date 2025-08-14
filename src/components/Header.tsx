"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const headerBackground = isHomePage
    ? "linear-gradient(to right, transparent 50%, #1e88b6 50%)"
    : "#1e88b6";

  const workshopTextColor = isHomePage ? "text-black" : "text-white";
  const navTextColor = "text-white";

  return (
    <header
      className="top-0 flex items-center z-50 h-20 transition-colors duration-300"
      style={{ background: headerBackground }}
    >
      <div className="mx-6 flex items-center justify-between w-full px-0">
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
            <p className={`text-2xl mx-3 cursor-pointer ${workshopTextColor}`}>
              Accelerate UX Workshop
            </p>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center ml-auto">
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
      </div>
    </header>
  );
}
