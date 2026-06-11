import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-custom">

        {/* Main Footer */}
        <div className="grid gap-12 py-20 lg:grid-cols-4">

          {/* NGO Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold">
              Roshan Duniya Society
            </h3>

            <p className="mt-5 max-w-lg leading-relaxed text-slate-400">
              महिलाओं के सशक्तिकरण, शिक्षा, कौशल विकास,
              स्वास्थ्य जागरूकता एवं सामाजिक उत्थान के लिए
              समर्पित एक सामाजिक संस्था।
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-orange-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-orange-500"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-orange-500"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  href="/"
                  className="text-slate-400 transition hover:text-orange-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-400 transition hover:text-orange-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/activities"
                  className="text-slate-400 transition hover:text-orange-400"
                >
                  Activities
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="text-slate-400 transition hover:text-orange-400"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/documents"
                  className="text-slate-400 transition hover:text-orange-400"
                >
                  Documents
                </Link>
              </li>

              <li>
                <Link
                  href="/volunteer"
                  className="text-slate-400 transition hover:text-orange-400"
                >
                  Volunteer
                </Link>
              </li>

              <li>
                <Link
                  href="/donate"
                  className="text-slate-400 transition hover:text-orange-400"
                >
                  Donate
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 transition hover:text-orange-400"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold">
              Contact Us
            </h4>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3 text-slate-400">
                <FaPhoneAlt className="mt-1 text-orange-500" />

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="transition hover:text-orange-400"
                >
                  +91 XXXXX XXXXX
                </a>
              </div>

              <div className="flex items-start gap-3 text-slate-400">
                <FaEnvelope className="mt-1 text-orange-500" />

                <a
                  href="mailto:info@roshanduniya.org"
                  className="transition hover:text-orange-400"
                >
                  info@roshanduniya.org
                </a>
              </div>

              <div className="flex items-start gap-3 text-slate-400">
                <FaMapMarkerAlt className="mt-1 text-orange-500" />

                <span>
                  Roshan Duniya Society
                  <br />
                  India
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Roshan Duniya Society.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}