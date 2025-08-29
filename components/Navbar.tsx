"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav
      className="bg-black text-white px-8 py-4 p-4 rounded-lg
                 shadow-[6px_6px_0px_white] flex items-center justify-between relative"
    >
      {/* Logo */}
      <Link
        href="/"
        className="h-16 w-16 rounded-full border-2 border-black bg-[#FFDD55]
         hover:bg-white flex items-center justify-center ml-6 
         shadow-[4px_4px_0px_white] hover:shadow-[4px_4px_0px_#ffdd55] transition duration-300 ease-in-out
         text-black hover:text-[#ffdd55]"
      >
        <span className="text-4xl font-extrabold">H</span>
      </Link>

      {/* Links (Desktop only) */}
      <ul className="hidden md:flex gap-8 text-white text-3xl mr-6">
        <li>
          <Link
            href="/"
            className={`hover:text-[#FFDD55] transition ${
              pathname === "/" ? "text-[#FFDD55]" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`hover:text-[#FFDD55] transition ${
              pathname === "/about" ? "text-[#FFDD55]" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={`hover:text-[#FFDD55] transition ${
              pathname === "/services" ? "text-[#FFDD55]" : ""
            }`}
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className={`hover:text-[#FFDD55] transition ${
              pathname === "/contact" ? "text-[#FFDD55]" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Button */}
      <button
        aria-label="Toggle Menu"
        className="md:hidden text-white text-3xl rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Dropdown Menu (Mobile only) */}
      {open && (
        <div className=" absolute top-20 right-4 bg-black text-white rounded-lg shadow-[6px_6px_0px_white] flex flex-col items-start p-4 space-y-4 md:hidden z-50">
          <Link
            href="/"
            className={`hover:text-[#FFDD55] transition ${
              pathname === "/" ? "text-[#FFDD55]" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#FFDD55] transition ${
              pathname === "/about" ? "text-[#FFDD55]" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`hover:text-[#FFDD55] transition ${
              pathname === "/services" ? "text-[#FFDD55]" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[#FFDD55] transition ${
              pathname === "/contact" ? "text-[#FFDD55]" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
