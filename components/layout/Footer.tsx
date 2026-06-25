"use client";

import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { useState } from "react";
import { STORE_LOCATIONS } from "@/lib/locations";
import BrandMark from "@/components/brand/BrandMark";

const services = [
  "Laundry Wash & Fold",
  "Dry Cleaning",
  "Steam Ironing",
  "Shoe Cleaning",
  "Carpet Cleaning",
  "Curtain Cleaning",
];

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-secondary text-gray-300">
      <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Ready for Fresh, Clean Clothes?</h3>
              <p className="text-primary-200 mt-1 text-sm">Schedule your pickup in minutes – we handle the rest.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-white text-sm">
                Schedule Pickup
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white/40 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <BrandMark logoSize={48} variant="light" showTagline />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium laundry and dry cleaning services delivered to your doorstep. Quality, speed, and trust — every
              time.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FiInstagram, href: "#" },
                { Icon: FiFacebook, href: "#" },
                { Icon: FiTwitter, href: "#" },
                { Icon: FiYoutube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span className="w-1 h-1 bg-accent-500 rounded-full" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <FiPhone className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                +91 97522 17713
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <FiMail className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                hello@thelaundryproject.in
              </li>
              {STORE_LOCATIONS.map((store) => (
                <li key={store.id} className="flex items-start gap-2.5 text-sm text-gray-400">
                  <FiMapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                  <a href={store.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    {store.shortLabel} — {store.addressLine}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <FiClock className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                Mon–Sat: 8 AM – 9 PM
              </li>
            </ul>

            <h4 className="font-display font-semibold text-white mb-3 text-sm">Newsletter</h4>
            {subscribed ? (
              <p className="text-accent-500 text-sm font-medium">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-secondary-800 border border-secondary-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">© 2024 The Laundry Project. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
