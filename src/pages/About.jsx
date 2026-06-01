import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { useBooking } from '../context/BookingContext';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const STATS = [
  { value: '10,000+', label: 'Orders Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '5+', label: 'Years in Business' },
  { value: '50+', label: 'Expert Staff Members' },
];

const WHY_US = [
  { title: 'Expert Fabric Care', desc: 'Our team of specialists understands every fabric — from delicate silks to heavy woollens.' },
  { title: 'Advanced Equipment', desc: 'We use commercial-grade washing and dry-cleaning machines for superior results every time.' },
  { title: 'Eco-Conscious Process', desc: 'Biodegradable detergents and water-recycling processes reduce our environmental footprint.' },
  { title: 'Real-Time Tracking', desc: 'Track your order status via WhatsApp updates at every stage — pickup, cleaning, delivery.' },
  { title: 'Quality Guarantee', desc: 'Not satisfied? We re-clean for free. No questions asked, no hassle.' },
  { title: 'Insured & Reliable', desc: 'Every item is individually tagged and insured. Your belongings are completely safe with us.' },
];

const TEAM = [
  { name: 'Arjun Kumar', role: 'Founder & CEO', initials: 'AK', bio: 'Passionate entrepreneur with 10+ years in the service industry. Built The Real Project to solve the laundry problem for busy urban professionals.', color: 'from-primary-600 to-primary-400' },
  { name: 'Priya Sharma', role: 'Operations Manager', initials: 'PS', bio: 'Expert in logistics and operations, Priya ensures every pickup and delivery runs like clockwork across our service zones.', color: 'from-purple-600 to-purple-400' },
  { name: 'Vikram Singh', role: 'Head of Quality', initials: 'VS', bio: 'Certified fabric care specialist with 8 years experience. Vikram personally oversees our cleaning standards and quality checks.', color: 'from-accent-600 to-accent-400' },
  { name: 'Neha Patel', role: 'Customer Relations', initials: 'NP', bio: 'Dedicated to making every customer interaction delightful. Neha and her team ensure your experience exceeds expectations.', color: 'from-orange-500 to-amber-400' },
];

export default function About() {
  const { openBooking } = useBooking();

  return (
    <div className="overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-800 to-primary-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-700/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl">
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Cleaning Clothes,{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Building Trust</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              The Real Project was built on a simple idea: everyone deserves clean, fresh clothes without the hassle. Today, we serve thousands of families across Mumbai with pride.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16" fill="white">
            <path d="M0,60 L1440,60 L1440,15 C1080,50 720,0 360,30 C240,40 120,45 0,18 Z" />
          </svg>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mb-6 leading-tight">
                From a Single Washing Machine to Mumbai's Most Trusted Laundry Service
              </h2>
              <div className="space-y-4 text-secondary-600 text-sm leading-relaxed">
                <p>
                  It started in 2019 with one washing machine, a van, and a big dream. Our founder Arjun Kumar noticed that busy professionals in Mumbai were spending precious weekend hours on laundry — time they could be spending with family or resting.
                </p>
                <p>
                  He launched The Real Project with a doorstep pickup model and a commitment to quality that would exceed expectations. Within six months, word spread across Andheri and Bandra. Within a year, we had expanded to cover eight neighbourhoods.
                </p>
                <p>
                  Today, The Real Project processes thousands of orders every month, employs a dedicated team of fabric care specialists, and has earned the trust of families, working professionals, and businesses across Mumbai.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: '🧺', label: 'Started in 2019', sub: 'With one vision' },
                  { emoji: '🏙️', label: 'Serving Mumbai', sub: '8+ neighbourhoods' },
                  { emoji: '👨‍👩‍👧‍👦', label: '10,000+ Families', sub: 'Trust us monthly' },
                  { emoji: '🌱', label: 'Eco-Friendly', sub: '100% green detergents' },
                ].map(({ emoji, label, sub }) => (
                  <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">{emoji}</div>
                    <p className="font-display font-bold text-secondary text-base">{label}</p>
                    <p className="text-secondary-500 text-xs mt-1">{sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">What Drives Us</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">Mission & Vision</motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-secondary mb-4">Our Mission</h3>
              <p className="text-secondary-600 leading-relaxed text-sm">
                To give every Indian household access to professional-grade fabric care at an affordable price — delivered with speed, transparency, and genuine warmth. We believe clean clothes should be the least of your worries.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-10 shadow-lg">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔭</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Our Vision</h3>
              <p className="text-primary-100 leading-relaxed text-sm">
                To become India's most trusted laundry and dry-cleaning brand — a household name synonymous with quality, convenience, and sustainability. We envision a future where every city in India benefits from The Real Project's service.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map(({ value, label }) => (
              <motion.div key={label} variants={fadeUp}>
                <div className="font-display font-black text-4xl md:text-5xl text-primary-600 mb-2">{value}</div>
                <div className="text-secondary-500 text-sm font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Edge</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">Why Choose The Real Project</motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4">
              We're not just a laundry service — we're a promise of quality, care, and convenience.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map(({ title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-6 hover:border-primary-100 hover:shadow-md transition-all">
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <FiCheck className="w-4 h-4 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-secondary text-base mb-1">{title}</h3>
                  <p className="text-secondary-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">The People Behind The Magic</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">Meet Our Team</motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4">
              Dedicated professionals who bring passion and expertise to every order.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map(({ name, role, initials, bio, color }) => (
              <motion.div key={name} variants={fadeUp} className="group text-center card-hover">
                <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {initials}
                </div>
                <h3 className="font-display font-bold text-secondary text-lg mb-1">{name}</h3>
                <p className="text-primary-600 text-sm font-semibold mb-3">{role}</p>
                <p className="text-secondary-500 text-sm leading-relaxed">{bio}</p>
              </motion.div>
            ))}
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
            <h2 className="font-display font-bold text-4xl text-white mb-5">Experience The Real Difference</h2>
            <p className="text-primary-200 text-base mb-8">Book your first pickup today and see why thousands choose us every week.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={openBooking} className="btn-white">Schedule a Pickup</button>
              <Link to="/contact" className="border-2 border-white/40 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all">
                Get in Touch <FiArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
