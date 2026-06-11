"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Roshan Duniya Society"
              width={50}
              height={50}
              priority
              className="rounded-full border border-slate-200 object-cover"
            />

            <div>
              <h1 className="text-sm font-bold text-slate-900 sm:text-lg">
                Roshan Duniya Society
              </h1>

              <p className="hidden text-xs text-slate-500 sm:block">
                NGO & Social Welfare Organization
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <Link
              href="/"
              className="transition hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition hover:text-orange-500"
            >
              About
            </Link>

            <Link
              href="/activities"
              className="transition hover:text-orange-500"
            >
              Activities
            </Link>

            <Link
              href="/gallery"
              className="transition hover:text-orange-500"
            >
              Gallery
            </Link>

            <Link
              href="/documents"
              className="transition hover:text-orange-500"
            >
              Documents
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-orange-500"
            >
              Contact
            </Link>

            <Link
              href="/volunteer"
              className="transition hover:text-orange-500"
            >
              Join Us
            </Link>

            <Link
              href="/donate"
              className="rounded-xl bg-orange-500 px-5 py-3 text-white transition hover:bg-orange-600"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-slate-900 lg:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-slate-200 py-5 lg:hidden">
            <nav className="flex flex-col gap-5 text-sm font-medium">

              <Link
                href="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/activities"
                onClick={() => setIsOpen(false)}
              >
                Activities
              </Link>

              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>

              <Link
                href="/documents"
                onClick={() => setIsOpen(false)}
              >
                Documents
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/volunteer"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>

              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-orange-500 px-5 py-3 text-center text-white"
              >
                Donate Now
              </Link>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}