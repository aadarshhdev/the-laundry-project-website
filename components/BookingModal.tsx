"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCalendar, FiMapPin, FiPhone, FiUser } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SERVICES = [
  "Laundry Wash & Fold",
  "Dry Cleaning",
  "Steam Ironing",
  "Shoe Cleaning",
  "Carpet Cleaning",
  "Curtain Cleaning",
];

const TIMES = [
  "8:00 AM – 10:00 AM",
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 6:00 PM",
  "6:00 PM – 8:00 PM",
];

const TODAY = new Date().toISOString().split("T")[0];

const inputCls =
  "w-full border border-tlp-border rounded-xl text-sm text-secondary placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all bg-white";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", address: "", service: "", date: "", time: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[60] bg-secondary/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden max-h-[95vh] flex flex-col">
              <div className="bg-gradient-to-r from-primary-700 to-primary-600 px-6 py-5 shrink-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-display font-bold text-xl text-white">Book a Pickup</h2>
                    <p className="text-primary-200 text-sm mt-0.5">Schedule your laundry in minutes</p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6 overflow-y-auto">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <AiOutlineCheckCircle className="w-10 h-10 text-accent-500" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-secondary mb-3">Booking Confirmed!</h3>
                    <p className="text-secondary-600 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                      We&apos;ve received your booking request. Our team will call you within 30 minutes to confirm the
                      pickup slot.
                    </p>
                    <button onClick={handleClose} className="btn-primary px-10">
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-secondary-600 uppercase tracking-wide mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className={`${inputCls} pl-9 pr-3 py-2.5`}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-600 uppercase tracking-wide mb-1.5">
                          Phone
                        </label>
                        <div className="relative">
                          <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 XXXXX"
                            className={`${inputCls} pl-9 pr-3 py-2.5`}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-secondary-600 uppercase tracking-wide mb-1.5">
                        Service
                      </label>
                      <select name="service" value={form.service} onChange={handleChange} required className={`${inputCls} px-3 py-2.5`}>
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-secondary-600 uppercase tracking-wide mb-1.5">
                        Pickup Address
                      </label>
                      <div className="relative">
                        <FiMapPin className="absolute left-3 top-3 w-4 h-4 text-secondary-400" />
                        <textarea
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          required
                          rows={2}
                          placeholder="Enter your full address"
                          className={`${inputCls} pl-9 pr-3 py-2.5 resize-none`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-secondary-600 uppercase tracking-wide mb-1.5">
                          Pickup Date
                        </label>
                        <div className="relative">
                          <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                          <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                            min={TODAY}
                            className={`${inputCls} pl-9 pr-3 py-2.5`}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-600 uppercase tracking-wide mb-1.5">
                          Time Slot
                        </label>
                        <select name="time" value={form.time} onChange={handleChange} required className={`${inputCls} px-3 py-2.5`}>
                          <option value="">Select time</option>
                          {TIMES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button type="submit" className="btn-primary w-full text-center justify-center mt-2 py-3.5">
                      Confirm Booking
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
