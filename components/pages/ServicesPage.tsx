'use client';

import { fadeUp, stagger } from '@/lib/animations';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiClock, FiTag } from 'react-icons/fi';
import { useBooking } from '@/context/BookingContext';


const SERVICES = [
  {
    emoji: '👕',
    title: 'Laundry Wash & Fold',
    tagline: 'Everyday clothes, expertly cleaned',
    desc: 'Professional machine washing with the right temperature and detergent for each fabric type, followed by neat folding and packaging.',
    features: ['Sorted by colour & fabric type', 'Eco-friendly detergents', 'Optimal dry temperature', 'Neatly folded & packed', 'Fragrance-free option available'],
    price: '₹49/kg',
    minOrder: 'Minimum 3 kg',
    turnaround: '48 hours (24 hrs express)',
    color: 'blue',
    badge: 'Most Popular',
  },
  {
    emoji: '🧥',
    title: 'Dry Cleaning',
    tagline: 'Delicate fabrics, handled with mastery',
    desc: 'Solvent-based cleaning process for delicate, structured, and specialty fabrics that cannot be water-washed — suits, sarees, lehengas, and more.',
    features: ['Pre-cleaning fabric inspection', 'Solvent-based process', 'Stain pre-treatment', 'Steam pressed & packaged', 'Free garment condition report'],
    price: '₹149/item',
    minOrder: 'No minimum',
    turnaround: '72 hours',
    color: 'purple',
    badge: null,
  },
  {
    emoji: '🔥',
    title: 'Steam Ironing',
    tagline: 'Crisp, wrinkle-free, professional finish',
    desc: 'Commercial-grade steam ironing equipment removes every wrinkle and gives your garments a crisp, press-perfect finish every single time.',
    features: ['Industrial steam press', 'All fabric types', 'Collar & cuff special care', 'Packaged on hangers', 'Same-day available'],
    price: '₹15/item',
    minOrder: 'Minimum 10 items',
    turnaround: '24 hours',
    color: 'orange',
    badge: null,
  },
  {
    emoji: '👟',
    title: 'Shoe Cleaning',
    tagline: 'Restore your footwear to its glory',
    desc: 'Complete shoe restoration service covering all materials — leather, canvas, mesh, suede, and more. We make them look brand new.',
    features: ['Sole scrubbing & deep clean', 'Inner deodorizing', 'Surface cleaning & polish', 'Conditioning for leather', 'Boxed & packaged delivery'],
    price: '₹199/pair',
    minOrder: 'No minimum',
    turnaround: '48 hours',
    color: 'green',
    badge: null,
  },
  {
    emoji: '🛋️',
    title: 'Carpet Cleaning',
    tagline: 'Deep clean for a fresher home',
    desc: 'Industrial hot-water extraction cleaning for all types of carpets and rugs — removing deep-set dirt, stains, pet hair, and allergens effectively.',
    features: ['Stain pre-treatment', 'Hot water extraction', 'Deodorizing treatment', 'Quick-dry process', 'Free pickup for large carpets'],
    price: '₹4/sq ft',
    minOrder: 'Minimum 20 sq ft',
    turnaround: '72 hours',
    color: 'red',
    badge: null,
  },
  {
    emoji: '🪟',
    title: 'Curtain Cleaning',
    tagline: 'Bring your curtains back to life',
    desc: 'Specialized cleaning process that removes dust, allergens, and stains while perfectly preserving the fabric texture, colour, and shape.',
    features: ['Gentle wash cycle', 'Shape-retention process', 'Colour-safe cleaning agents', 'Steam pressed & packed', 'Rehang service available'],
    price: '₹99/curtain',
    minOrder: 'Minimum 4 panels',
    turnaround: '72 hours',
    color: 'teal',
    badge: null,
  },
];

const COLOR_MAP = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-100',   badge: 'bg-blue-100 text-blue-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-100', badge: 'bg-purple-100 text-purple-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', badge: 'bg-orange-100 text-orange-700' },
  green:  { bg: 'bg-green-50',  border: 'border-green-100',  badge: 'bg-green-100 text-green-700' },
  red:    { bg: 'bg-red-50',    border: 'border-red-100',    badge: 'bg-red-100 text-red-700' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-100',   badge: 'bg-teal-100 text-teal-700' },
};

const COMPARE_FEATURES = [
  'Pickup & Delivery',
  'Eco-Friendly Products',
  'Quality Inspection',
  'Real-Time Updates',
  'Re-clean Guarantee',
  'Insurance Coverage',
];

export default function ServicesPage() {
  const { openBooking } = useBooking();

  return (
    <div className="overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-800 to-primary-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-700/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl">
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">What We Offer</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Every Fabric Care{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Need, Covered</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              From your everyday t-shirts to your most treasured sarees, we have a specialist process designed to keep every item looking its best.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16" fill="white">
            <path d="M0,60 L1440,60 L1440,15 C1080,50 720,0 360,30 C240,40 120,45 0,18 Z" />
          </svg>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {SERVICES.map(({ emoji, title, tagline, desc, features, price, minOrder, turnaround, color, badge }) => {
              const c = COLOR_MAP[color];
              return (
                <motion.div key={title} variants={fadeUp} className={`group relative rounded-2xl border ${c.border} ${c.bg} p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}>
                  {badge && (
                    <span className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full ${c.badge}`}>{badge}</span>
                  )}
                  <div className="text-5xl mb-5">{emoji}</div>
                  <h3 className="font-display font-bold text-secondary text-xl mb-1">{title}</h3>
                  <p className="text-primary-600 text-sm font-semibold mb-3">{tagline}</p>
                  <p className="text-secondary-600 text-sm leading-relaxed mb-6">{desc}</p>

                  <ul className="space-y-2 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-secondary-700">
                        <FiCheck className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200/60 pt-5 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <FiTag className="w-4 h-4 text-secondary-400" />
                      <span className="text-secondary-600">Starting at</span>
                      <span className="font-bold text-secondary ml-auto">{price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FiClock className="w-4 h-4 text-secondary-400" />
                      <span className="text-secondary-600">Turnaround</span>
                      <span className="font-medium text-secondary ml-auto">{turnaround}</span>
                    </div>
                    <div className="text-xs text-secondary-400 pt-1">{minOrder}</div>
                  </div>

                  <button
                    onClick={openBooking}
                    className="mt-6 w-full btn-primary text-sm py-2.5 text-center justify-center"
                  >
                    Book This Service
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">What's Included</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">Every Service Comes With</motion.h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-gray-100">
              {COMPARE_FEATURES.map((feat, i) => (
                <div key={feat} className={`flex items-center justify-between px-8 py-5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <span className="font-medium text-secondary text-sm md:text-base">{feat}</span>
                  <div className="flex items-center gap-2 text-accent-600 font-semibold text-sm">
                    <FiCheck className="w-5 h-5" />
                    <span className="hidden sm:inline">Included</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-gradient-to-br from-primary-700 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display font-bold text-4xl text-white mb-5">Not Sure Which Service You Need?</h2>
            <p className="text-primary-200 text-base mb-8">Our team is happy to help you pick the right service for your garments. Just reach out!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={openBooking} className="btn-white">Schedule a Pickup</button>
              <Link href="/contact" className="border-2 border-white/40 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all">
                Talk to Us <FiArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
