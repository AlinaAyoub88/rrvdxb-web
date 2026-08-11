import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactCards = [
    {
      icon: <Phone className="w-6 h-6 text-amber-500" />,
      title: "Call Us 24/7",
      detail: "+971 4 123 4567 / +92 42 111 222",
      sub: "Dedicated customer service"
    },
    {
      icon: <Mail className="w-6 h-6 text-amber-500" />,
      title: "Email Support",
      detail: "support@rrvdxb.com",
      sub: "Fast response within 2 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-500" />,
      title: "Headquarters",
      detail: "Downtown Dubai, UAE",
      sub: "Global Fulfillment Hubs: UAE & PK"
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Operating Hours",
      detail: "Mon - Sun: 9:00 AM - 11:00 PM",
      sub: "Online store available 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
          Have questions about your order or our luxury collection? We are here to help you 24/7.
        </p>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactCards.map((card, idx) => (
          <div key={idx} className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl flex flex-col items-start hover:shadow-md transition-all">
            <div className="p-3 bg-amber-500/10 rounded-xl mb-4">{card.icon}</div>
            <h3 className="font-bold text-lg mb-1">{card.title}</h3>
            <p className="text-sm font-semibold text-zinc-800 mb-1">{card.detail}</p>
            <p className="text-xs text-zinc-500">{card.sub}</p>
          </div>
        ))}
      </section>

      {/* Main Contact Form & Map Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-2">Send Us A Message</h2>
          <p className="text-sm text-zinc-600 mb-6">Fill out the form below and our team will reach out immediately.</p>

          {submitted && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Thank you! Your message has been received. We will respond shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-zinc-700">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Alina Ayoub"
                className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl focus:outline-none focus:border-amber-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-zinc-700">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alina@example.com"
                className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl focus:outline-none focus:border-amber-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-zinc-700">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Order Inquiry / Product Help"
                className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl focus:outline-none focus:border-amber-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-zinc-700">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl focus:outline-none focus:border-amber-500 text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-zinc-950 font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Embedded Map Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Primary Hub</h2>
            <p className="text-sm text-zinc-600 mb-6">Visit our global experience center in Dubai, UAE.</p>
          </div>
          
          <div className="w-full h-[400px] bg-zinc-200 rounded-3xl overflow-hidden border border-zinc-300 shadow-inner">
            <iframe
              title="RRVDXB Dubai Hub"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539269224!2d55.27218771500912!3d25.19719698389618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1d5e2d1!2sDowntown%20Dubai!5e0!3m2!1sen!2sae!4v1680000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}