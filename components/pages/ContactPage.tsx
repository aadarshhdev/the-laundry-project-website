'use client';

import { fadeUp, stagger } from '@/lib/animations';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import BrandLogo from '@/components/brand/BrandLogo';
import { STORE_LOCATIONS, SERVICE_AREA_SUMMARY } from '@/lib/locations';


const SUBJECTS = ['General Enquiry', 'Schedule a Pickup', 'Pricing & Plans', 'Track My Order', 'Complaint / Feedback', 'Partnership / Business'];

const INFO = [
  { icon: FiPhone, label: 'Phone', value: '+91 97522 17713', link: 'tel:+919752217713' },
  { icon: FiMail, label: 'Email', value: 'hello@thelaundryproject.in', link: 'mailto:hello@thelaundryproject.in' },
  { icon: AiOutlineWhatsApp, label: 'WhatsApp', value: '+91 97522 17713', link: 'https://wa.me/919752217713' },
];

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 6:00 PM (Pickup only)' },
];

const inputCls = 'w-full border border-gray-200 rounded-xl text-sm text-secondary placeholder-gray-400 bg-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all px-4 py-3';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-800 to-primary-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl">
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Get In Touch</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              We'd Love to{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Hear From You</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Have a question, special request, or feedback? Our team is always ready to help. Reach out through any channel that suits you best.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16" fill="white">
            <path d="M0,60 L1440,60 L1440,15 C1080,50 720,0 360,30 C240,40 120,45 0,18 Z" />
          </svg>
        </div>
      </section>

      {/* ─── FORM + INFO ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="lg:col-span-3">
              <h2 className="font-display font-bold text-2xl text-secondary mb-2">Send Us a Message</h2>
              <p className="text-secondary-500 text-sm mb-8">We typically respond within 1 business hour during working hours.</p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 border-2 border-dashed border-accent-200 rounded-2xl bg-accent-50">
                  <FiCheckCircle className="w-14 h-14 text-accent-500 mx-auto mb-5" />
                  <h3 className="font-display font-bold text-xl text-secondary mb-3">Message Sent!</h3>
                  <p className="text-secondary-600 text-sm max-w-xs mx-auto">
                    Thanks for reaching out. We'll get back to you within 1 business hour.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="mt-6 btn-primary">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-secondary-600 uppercase tracking-wide mb-1.5">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-secondary-600 uppercase tracking-wide mb-1.5">Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className={inputCls} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-secondary-600 uppercase tracking-wide mb-1.5">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-secondary-600 uppercase tracking-wide mb-1.5">Subject *</label>
                      <select name="subject" value={form.subject} onChange={handleChange} required className={inputCls}>
                        <option value="">Select a subject</option>
                        {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-secondary-600 uppercase tracking-wide mb-1.5">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us how we can help you..." className={`${inputCls} resize-none`} />
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-base justify-center flex items-center gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="lg:col-span-2 space-y-8">

              <div>
                <h2 className="font-display font-bold text-2xl text-secondary mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {INFO.map(({ icon: Icon, label, value, link }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-secondary-400 uppercase tracking-wide mb-0.5">{label}</p>
                        {link ? (
                          <a href={link} className="text-secondary font-medium text-sm hover:text-primary-600 transition-colors">{value}</a>
                        ) : (
                          <p className="text-secondary font-medium text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-secondary text-base mb-4">Our Stores</h3>
                <div className="space-y-4">
                  {STORE_LOCATIONS.map((store) => (
                    <a
                      key={store.id}
                      href={store.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-primary-200 hover:bg-primary-50/30 transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                        <FiMapPin className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-secondary text-sm group-hover:text-primary-600 transition-colors">
                          {store.shortLabel}
                        </p>
                        <p className="text-secondary-500 text-sm mt-0.5">{store.addressLine}</p>
                        <span className="text-primary-600 text-xs font-medium mt-1 inline-block">
                          Open in Google Maps →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FiClock className="w-5 h-5 text-primary-600" />
                  <h3 className="font-display font-bold text-secondary text-base">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {HOURS.map(({ day, time }) => (
                    <div key={day} className="flex items-start justify-between gap-4 text-sm">
                      <span className="text-secondary-600 font-medium">{day}</span>
                      <span className="text-secondary font-semibold text-right">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/919752217713?text=Hi!%20I%27d%20like%20to%20enquire%20about%20your%20laundry%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-6 py-4 rounded-2xl font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-accent-500/30 w-full justify-center"
              >
                <AiOutlineWhatsApp className="w-6 h-6" />
                Chat with us on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MAPS ─── */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary mb-2">Find Us in Indore</h2>
            <p className="text-secondary-500 text-sm md:text-base">{SERVICE_AREA_SUMMARY}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {STORE_LOCATIONS.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white"
              >
                <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-primary-100">
                    <BrandLogo size={40} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-secondary text-base">{store.shortLabel}</p>
                    <p className="text-secondary-500 text-sm">{store.addressLine}</p>
                  </div>
                </div>
                <div className="relative h-72 md:h-80 bg-gray-200">
                  <iframe
                    title={`${store.shortLabel} location map`}
                    src={store.embedUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
                  <a
                    href={store.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-primary-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUICK INFO CARDS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid sm:grid-cols-3 gap-6">
            {[
              { emoji: '⚡', title: '1-Hour Response', desc: 'We respond to all enquiries within 1 business hour during working hours.' },
              { emoji: '📦', title: 'Same-Day Pickup', desc: 'Book before 12 PM for a same-day pickup in your area.' },
              { emoji: '🔄', title: 'Re-clean Guarantee', desc: 'Not happy with the result? We re-clean for free, no questions asked.' },
            ].map(({ emoji, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-primary-100 hover:shadow-md transition-all">
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-display font-bold text-secondary text-lg mb-2">{title}</h3>
                <p className="text-secondary-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
