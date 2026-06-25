'use client';

import { fadeUp, stagger } from '@/lib/animations';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { useBooking } from '@/context/BookingContext';


const PLANS = [
  {
    name: 'Basic',
    price: '₹299',
    period: '/month',
    tagline: 'Perfect for individuals & small households',
    color: 'default',
    features: [
      { text: '10 kg regular laundry', included: true },
      { text: '2 dry clean items', included: true },
      { text: 'Standard 48-hr turnaround', included: true },
      { text: 'Free delivery on orders ₹500+', included: true },
      { text: 'Basic eco packaging', included: true },
      { text: 'Priority pickup slot', included: false },
      { text: 'Free ironing items', included: false },
      { text: 'Dedicated account manager', included: false },
      { text: 'Monthly shoe cleaning', included: false },
    ],
  },
  {
    name: 'Standard',
    price: '₹599',
    period: '/month',
    tagline: 'Best value for families',
    color: 'primary',
    popular: true,
    features: [
      { text: '25 kg regular laundry', included: true },
      { text: '8 dry clean items', included: true },
      { text: 'Priority 36-hr turnaround', included: true },
      { text: 'Always free delivery', included: true },
      { text: 'Premium eco packaging', included: true },
      { text: 'Priority pickup slot', included: true },
      { text: '5 free ironing items', included: true },
      { text: 'Dedicated account manager', included: false },
      { text: 'Monthly shoe cleaning', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '₹999',
    period: '/month',
    tagline: 'For busy professionals & large families',
    color: 'dark',
    features: [
      { text: 'Unlimited regular laundry', included: true },
      { text: '20 dry clean items', included: true },
      { text: 'Express 24-hr turnaround', included: true },
      { text: 'Always free delivery + priority', included: true },
      { text: 'Luxury packaging & hangers', included: true },
      { text: 'Guaranteed priority pickup', included: true },
      { text: '15 free ironing items', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Monthly shoe cleaning (1 pair)', included: true },
    ],
  },
];

const COMPARE_ROWS = [
  { feature: 'Regular Laundry', basic: '10 kg', standard: '25 kg', premium: 'Unlimited' },
  { feature: 'Dry Clean Items', basic: '2 items', standard: '8 items', premium: '20 items' },
  { feature: 'Turnaround Time', basic: '48 hours', standard: '36 hours', premium: '24 hours' },
  { feature: 'Free Delivery', basic: 'On ₹500+', standard: 'Always', premium: 'Always + Priority' },
  { feature: 'Free Ironing', basic: '—', standard: '5 items', premium: '15 items' },
  { feature: 'Account Manager', basic: '—', standard: '—', premium: '✓ Included' },
  { feature: 'Shoe Cleaning', basic: '—', standard: '—', premium: '1 pair/month' },
];

const FAQS = [
  { q: 'Can I cancel my subscription anytime?', a: 'Yes. You can cancel your subscription at any time with no cancellation fees. Your plan remains active until the end of the current billing period.' },
  { q: 'What happens if I exceed my laundry limit?', a: 'For the Basic and Standard plans, additional laundry beyond your limit is charged at ₹49/kg — the same rate as our regular pricing.' },
  { q: 'Is there a free trial available?', a: 'Yes! Your first order with The Laundry Project comes with a 20% discount. Use code FIRST20 at checkout.' },
  { q: 'Can I upgrade or downgrade my plan?', a: 'Absolutely. You can switch plans at any time. Upgrades take effect immediately; downgrades apply from the next billing cycle.' },
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
          <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="px-6 pb-5 text-secondary-600 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingPage() {
  const { openBooking } = useBooking();

  return (
    <div className="overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-800 to-primary-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Transparent Pricing</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Simple,{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Honest</span>{' '}
              Pricing
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              No hidden fees. No surprises. Just fair pricing for premium laundry care delivered to your door.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16" fill="white">
            <path d="M0,60 L1440,60 L1440,15 C1080,50 720,0 360,30 C240,40 120,45 0,18 Z" />
          </svg>
        </div>
      </section>

      {/* ─── PLANS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-8 items-start">
            {PLANS.map(({ name, price, period, tagline, color, popular, features }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className={`relative rounded-2xl overflow-hidden ${
                  color === 'primary'
                    ? 'bg-gradient-to-br from-primary-600 to-primary-700 shadow-2xl shadow-primary-600/30 scale-105'
                    : color === 'dark'
                    ? 'bg-secondary border border-secondary-700 shadow-xl'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                {popular && (
                  <div className="bg-accent-500 text-white text-xs font-bold text-center py-2 px-4 tracking-wide uppercase">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className={`font-display font-bold text-2xl mb-1 ${color === 'primary' || color === 'dark' ? 'text-white' : 'text-secondary'}`}>{name}</h3>
                  <p className={`text-sm mb-6 ${color === 'primary' ? 'text-primary-200' : color === 'dark' ? 'text-gray-400' : 'text-secondary-500'}`}>{tagline}</p>

                  <div className="flex items-end gap-1 mb-8">
                    <span className={`font-display font-black text-5xl leading-none ${color === 'primary' || color === 'dark' ? 'text-white' : 'text-secondary'}`}>{price}</span>
                    <span className={`text-sm mb-1 ${color === 'primary' ? 'text-primary-200' : color === 'dark' ? 'text-gray-400' : 'text-secondary-500'}`}>{period}</span>
                  </div>

                  <button
                    onClick={openBooking}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 mb-8 ${
                      color === 'primary'
                        ? 'bg-white text-primary-600 hover:bg-primary-50 shadow-lg'
                        : color === 'dark'
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/30'
                    }`}
                  >
                    Get Started
                  </button>

                  <ul className="space-y-3">
                    {features.map(({ text, included }) => (
                      <li key={text} className="flex items-start gap-3 text-sm">
                        {included
                          ? <FiCheck className={`w-4 h-4 mt-0.5 shrink-0 ${color === 'primary' ? 'text-accent-300' : 'text-accent-500'}`} />
                          : <FiX className={`w-4 h-4 mt-0.5 shrink-0 ${color === 'primary' ? 'text-primary-400' : 'text-gray-300'}`} />
                        }
                        <span className={included
                          ? color === 'primary' || color === 'dark' ? 'text-white' : 'text-secondary-700'
                          : color === 'primary' ? 'text-primary-300' : 'text-gray-400'
                        }>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center text-secondary-400 text-sm mt-10">
            All prices inclusive of GST. Monthly plans billed on a 30-day cycle.{' '}
            <Link href="/contact" className="text-primary-600 font-medium hover:underline">Custom enterprise plans available.</Link>
          </motion.p>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Compare Plans</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">Plan Comparison</motion.h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100">
              <div className="px-6 py-4 text-sm font-semibold text-secondary-600">Feature</div>
              {['Basic', 'Standard', 'Premium'].map((plan) => (
                <div key={plan} className={`px-6 py-4 text-center text-sm font-bold ${plan === 'Standard' ? 'bg-primary-600 text-white' : 'text-secondary'}`}>
                  {plan}
                </div>
              ))}
            </div>

            {COMPARE_ROWS.map(({ feature, basic, standard, premium }, i) => (
              <div key={feature} className={`grid grid-cols-4 border-b border-gray-50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}>
                <div className="px-6 py-4 text-sm font-medium text-secondary">{feature}</div>
                <div className="px-6 py-4 text-center text-sm text-secondary-600">{basic}</div>
                <div className="px-6 py-4 text-center text-sm font-semibold text-white bg-primary-600/90">{standard}</div>
                <div className="px-6 py-4 text-center text-sm text-secondary-600">{premium}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Pricing FAQs</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">Common Questions</motion.h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-3">
            {FAQS.map((faq) => <FAQItem key={faq.q} {...faq} />)}
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
            <h2 className="font-display font-bold text-4xl text-white mb-5">Start With Your First Order</h2>
            <p className="text-primary-200 text-base mb-8">Use code <span className="font-bold text-white bg-white/10 px-3 py-1 rounded-lg">FIRST20</span> to get 20% off your first pickup. No plan required.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={openBooking} className="btn-white">Book Your First Pickup</button>
              <Link href="/contact" className="border-2 border-white/40 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all">
                Ask a Question <FiArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
