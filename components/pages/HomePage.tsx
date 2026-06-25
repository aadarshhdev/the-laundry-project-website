'use client';

import { fadeUp, stagger } from '@/lib/animations';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiTruck, FiClock, FiDroplet, FiTag, FiChevronDown,
  FiArrowRight, FiShield, FiAward, FiCheck,
} from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { useBooking } from '@/context/BookingContext';


const FEATURES = [
  { icon: FiTruck, title: 'Free Pickup & Delivery', desc: 'We come to your door for collection and delivery at no extra charge — always.' },
  { icon: FiClock, title: 'Same-Day Service', desc: 'Urgent orders handled with expert care. Get your clothes back the same day.' },
  { icon: FiDroplet, title: 'Eco-Friendly Cleaning', desc: 'Biodegradable, gentle detergents that are safe for your family and the planet.' },
  { icon: FiTag, title: 'Affordable Pricing', desc: 'Premium quality at prices that make sense. No hidden charges, ever.' },
];

const STEPS = [
  { step: '01', title: 'Schedule Pickup', desc: 'Book online or via WhatsApp. Choose your preferred date and time slot in seconds.' },
  { step: '02', title: 'We Collect', desc: 'Our friendly agent arrives at your door at the chosen time to collect your laundry.' },
  { step: '03', title: 'We Clean', desc: 'Expert cleaning with the right detergents and processes for each fabric type.' },
  { step: '04', title: 'We Deliver', desc: 'Fresh, clean clothes delivered back to you — neatly folded or professionally ironed.' },
];

const SERVICES = [
  { emoji: '👕', title: 'Laundry Wash & Fold', desc: 'Machine-washed, dried, and neatly folded with care and precision.', price: 'From ₹49/kg' },
  { emoji: '🧥', title: 'Dry Cleaning', desc: 'Professional solvent-based cleaning for delicate and structured fabrics.', price: 'From ₹149/item' },
  { emoji: '🔥', title: 'Steam Ironing', desc: 'Wrinkle-free, crisp garments ready for any occasion using industrial steam.', price: 'From ₹15/item' },
  { emoji: '👟', title: 'Shoe Cleaning', desc: 'Deep restoration for all types of shoes — leather, canvas, suede, and more.', price: 'From ₹199/pair' },
  { emoji: '🛋️', title: 'Carpet Cleaning', desc: 'Industrial-grade deep clean for all carpets and rugs, removing stains and allergens.', price: 'From ₹4/sq ft' },
  { emoji: '🪟', title: 'Curtain Cleaning', desc: 'Specialized cleaning that preserves fabric color, texture, and shape perfectly.', price: 'From ₹99/curtain' },
];

const STATS = [
  { value: '10,000+', label: 'Orders Completed', emoji: '📦' },
  { value: '98%', label: 'Customer Satisfaction', emoji: '⭐' },
  { value: '48 hrs', label: 'Avg. Turnaround', emoji: '⚡' },
  { value: '5+', label: 'Years of Trust', emoji: '🏆' },
];

const BEFORE_AFTER = [
  { label: 'Formal Shirts', before: 'Wrinkled & Stained', after: 'Crisp & Spotless' },
  { label: 'Winter Jackets', before: 'Dusty & Dull', after: 'Fresh & Vibrant' },
  { label: 'Sneakers', before: 'Dirty & Scuffed', after: 'Like New Again' },
];

const TESTIMONIALS = [
  { name: 'Priya Sharma', role: 'Marketing Professional', rating: 5, text: 'The Laundry Project has been a lifesaver! My sarees and formal wear come back perfectly clean and pressed. The pickup service is incredibly convenient — I never have to step out.', initials: 'PS' },
  { name: 'Rahul Mehta', role: 'Software Engineer', rating: 5, text: 'Consistent quality, always on time, and very fair pricing. I\'ve been using them for 6 months and my work shirts have never looked better. Highly recommended!', initials: 'RM' },
  { name: 'Ananya Patel', role: 'Homemaker', rating: 5, text: 'They cleaned my heavy curtains and carpets which I had been putting off for months. Excellent results and the booking process was completely seamless.', initials: 'AP' },
];

const FAQS = [
  { q: 'How do I schedule a pickup?', a: 'Click "Book Pickup," fill out the quick form, or send a WhatsApp message. We offer same-day and next-day pickup slots Monday through Saturday.' },
  { q: 'What is the minimum order value?', a: 'Our minimum order value is ₹200. For orders above ₹500, delivery is completely free of charge.' },
  { q: 'How long does the service take?', a: 'Standard turnaround is 48 hours. We also offer same-day express service for most garments (additional charges apply).' },
  { q: 'Are my clothes safe with you?', a: 'Absolutely. Each item is individually tagged, processed with care, and quality-checked before delivery. We are fully insured against loss or damage.' },
  { q: 'Which areas do you service?', a: 'We currently serve Indore, Madhya Pradesh — with stores in Geetabhawan and Scheme No. 140, plus surrounding neighbourhoods. More locations coming soon!' },
  { q: 'What payment methods do you accept?', a: 'We accept UPI, credit/debit cards, net banking, and cash on delivery. Payment is collected at the time of delivery.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden transition-colors duration-200 ${open ? 'border-primary-200 bg-primary-50/40' : 'border-gray-100 bg-white'}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left gap-4">
        <span className="font-semibold text-secondary text-sm md:text-base">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }} className="shrink-0">
          <FiChevronDown className={`w-5 h-5 ${open ? 'text-primary-600' : 'text-secondary-400'}`} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-secondary-600 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <div className="overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary via-secondary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-16 left-0 w-96 h-96 bg-primary-700/15 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(37,99,235,0.08),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left: Text */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.12] mb-6">
                Professional Laundry &{' '}
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Dry Cleaning
                </span>
                , Delivered to Your Doorstep
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-9 max-w-lg">
                Fast pickup, expert cleaning, and hassle-free delivery. We handle your laundry so you can focus on what matters most.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button onClick={openBooking} className="btn-primary text-base px-8 py-4 shadow-xl shadow-primary-600/30">
                  Schedule Pickup
                </button>
                <Link href="/pricing" className="border-2 border-white/25 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
                  View Pricing
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  { icon: AiFillStar, text: '4.9★ Rating' },
                  { icon: FiShield, text: 'Insured Service' },
                  { icon: FiAward, text: '10,000+ Orders' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-gray-300 text-sm">
                    <Icon className="w-4 h-4 text-accent-400" />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl p-10 text-center w-80"
                >
                  <div className="text-7xl mb-5">🧺</div>
                  <h3 className="font-display font-bold text-secondary text-xl mb-1">Your Laundry, Sorted</h3>
                  <p className="text-secondary-500 text-sm mb-6">Fast · Clean · Delivered</p>
                  <div className="flex justify-center gap-2">
                    {['👕', '👗', '🧥', '👔'].map((emoji, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -7, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.35 }}
                        className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-xl"
                      >
                        {emoji}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-5 -right-8 bg-accent-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-accent-500/40 whitespace-nowrap"
                >
                  Same-Day Service ⚡
                </motion.div>
                <motion.div
                  animate={{ x: [0, -8, 0], y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-8 bg-white text-secondary text-xs font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
                >
                  📍 Free Pickup & Delivery
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-16 md:h-20" fill="white">
            <path d="M0,72 L1440,72 L1440,18 C1080,60 720,0 360,36 C240,48 120,54 0,20 Z" />
          </svg>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">The Smarter Way to Do Laundry</motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4 text-center">
              We combine technology, expertise, and genuine care to deliver an unmatched laundry experience.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-primary-100 hover:bg-primary-50/30 card-hover">
                <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-secondary text-lg mb-3">{title}</h3>
                <p className="text-secondary-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Simple Process</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">How It Works</motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4">
              Four simple steps to freshly cleaned clothes delivered right to your door.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-11 left-[calc(12.5%+48px)] right-[calc(12.5%+48px)] h-0.5 bg-gradient-to-r from-primary-100 via-primary-300 to-primary-100" />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {STEPS.map(({ step, title, desc }) => (
                <motion.div key={step} variants={fadeUp} className="text-center">
                  <div className="w-24 h-24 bg-white border-2 border-primary-200 rounded-full flex flex-col items-center justify-center mx-auto mb-6 shadow-md shadow-primary-100/60 relative z-10">
                    <span className="text-[10px] font-bold text-primary-400 tracking-widest">STEP</span>
                    <span className="font-display font-black text-2xl text-primary-600 leading-none">{step}</span>
                  </div>
                  <h3 className="font-display font-bold text-secondary text-xl mb-3">{title}</h3>
                  <p className="text-secondary-500 text-sm leading-relaxed max-w-52 mx-auto">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">Our Services</motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4">
              From everyday laundry to specialty cleaning, we've got all your fabric care needs covered.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(({ emoji, title, desc, price }) => (
              <motion.div key={title} variants={fadeUp} className="group p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:bg-gradient-to-br hover:from-primary-50/50 hover:to-white card-hover">
                <div className="text-5xl mb-5">{emoji}</div>
                <h3 className="font-display font-bold text-secondary text-xl mb-2">{title}</h3>
                <p className="text-secondary-500 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 font-bold text-sm bg-primary-50 px-3 py-1.5 rounded-lg">{price}</span>
                  <Link href="/services" className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-600 text-sm font-semibold flex items-center gap-1">
                    Details <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center mt-12">
            <Link href="/services" className="btn-secondary">View All Services</Link>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map(({ value, label, emoji }) => (
              <motion.div key={label} variants={fadeUp}>
                <div className="text-4xl mb-3">{emoji}</div>
                <div className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white mb-2">{value}</div>
                <div className="text-gray-400 text-sm font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── BEFORE / AFTER ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Results That Speak</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">See The Difference</motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4">
              Our expert cleaning methods restore fabrics to their pristine, like-new condition.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-8">
            {BEFORE_AFTER.map(({ label, before, after }) => (
              <motion.div key={label} variants={fadeUp} className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-2 h-52">
                  <div className="bg-gray-100 flex flex-col items-center justify-center p-5 relative border-r border-gray-200">
                    <span className="absolute top-3 left-3 text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded-md">BEFORE</span>
                    <div className="text-5xl opacity-40 mt-4">😟</div>
                    <p className="text-gray-400 text-xs text-center mt-3 font-medium">{before}</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 flex flex-col items-center justify-center p-5 relative">
                    <span className="absolute top-3 right-3 text-xs font-bold bg-accent-500 text-white px-2 py-0.5 rounded-md">AFTER</span>
                    <div className="text-5xl mt-4">✨</div>
                    <p className="text-accent-600 text-xs text-center mt-3 font-semibold">{after}</p>
                  </div>
                </div>
                <div className="p-4 bg-white text-center border-t border-gray-100">
                  <h3 className="font-display font-bold text-secondary">{label}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Happy Customers</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">What Our Customers Say</motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({ name, role, rating, text, initials }) => (
              <motion.div key={name} variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <AiFillStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-secondary-600 text-sm leading-relaxed mb-6 italic">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-400 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary text-sm">{name}</p>
                    <p className="text-secondary-500 text-xs">{role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Got Questions?</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">Frequently Asked Questions</motion.h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-3">
            {FAQS.map((faq) => <FAQItem key={faq.q} {...faq} />)}
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-28 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 right-16 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-8 left-16 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary-200 font-semibold text-sm uppercase tracking-widest mb-4">Get Started Today</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Ready for Fresher, Cleaner Clothes?
            </h2>
            <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of happy customers who trust The Laundry Project for all their laundry needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={openBooking} className="btn-white text-base px-8 py-4">
                Schedule Pickup Now
              </button>
              <Link href="/pricing" className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all">
                View Pricing Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
