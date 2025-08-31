"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement | null>(null);
  const [underlineProps, setUnderlineProps] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  // تحديث موقع الخط عند تغيير الصفحة
  useEffect(() => {
    const currentLink = navRef.current?.querySelector(
      `[data-path='${pathname}']`
    ) as HTMLElement | null;

    if (currentLink) {
      setUnderlineProps({
        left: currentLink.offsetLeft,
        width: currentLink.offsetWidth,
      });
    }
  }, [pathname]);

  return (
    <nav className="bg-black text-white px-8 py-4 p-4 rounded-lg shadow-[6px_6px_0px_white] flex items-center justify-between relative">
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

      {/* Desktop Links */}
      <ul
        ref={navRef}
        className="hidden md:flex gap-8 relative text-white text-3xl mr-6"
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              data-path={link.href}
              className="relative px-1"
            >
              {link.label}
            </Link>
          </li>
        ))}
        {/* الخط المتحرك */}
        <motion.div
          className="absolute bottom-0 h-[2px] bg-[#FFDD55]"
          layout
          animate={{ left: underlineProps.left, width: underlineProps.width }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </ul>

      {/* Mobile Button */}
      <button
        aria-label="Toggle Menu"
        className="md:hidden text-white text-3xl rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-20 right-4 bg-black text-white rounded-lg shadow-[6px_6px_0px_white] flex flex-col items-start p-4 space-y-4 md:hidden z-50"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition px-2 py-1 rounded ${
                pathname === link.href
                  ? "text-[#FFDD55]"
                  : "hover:text-[#FFDD55]"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
