import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const SUBJECTS = ['General Enquiry', 'Schedule a Pickup', 'Pricing & Plans', 'Track My Order', 'Complaint / Feedback', 'Partnership / Business'];

const INFO = [
  { icon: FiPhone, label: 'Phone', value: '+91 99999 99999', link: 'tel:+919999999999' },
  { icon: FiMail, label: 'Email', value: 'hello@therealproject.in', link: 'mailto:hello@therealproject.in' },
  { icon: AiOutlineWhatsApp, label: 'WhatsApp', value: '+91 99999 99999', link: 'https://wa.me/919999999999' },
  { icon: FiMapPin, label: 'Address', value: '123, Clean Street, Andheri West, Mumbai, MH 400053', link: null },
];

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 6:00 PM (Pickup only)' },
];

const inputCls = 'w-full border border-gray-200 rounded-xl text-sm text-secondary placeholder-gray-400 bg-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all px-4 py-3';

export default function Contact() {
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
                href="https://wa.me/919999999999?text=Hi!%20I%27d%20like%20to%20enquire%20about%20your%20laundry%20services."
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

      {/* ─── MAP ─── */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 md:h-96 bg-gray-200 relative">
            {/* Map placeholder styled to resemble a map */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `repeating-linear-gradient(0deg, #94a3b8 0px, #94a3b8 1px, transparent 1px, transparent 40px),
                                  repeating-linear-gradient(90deg, #94a3b8 0px, #94a3b8 1px, transparent 1px, transparent 40px)`,
              }} />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl animate-pulse">
                  <FiMapPin className="w-8 h-8 text-white" />
                </div>
                <p className="font-display font-bold text-secondary text-xl mb-1">The Real Project</p>
                <p className="text-secondary-500 text-sm">123, Clean Street, Andheri West, Mumbai</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-primary-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
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
