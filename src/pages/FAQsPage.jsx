import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, MessageCircle, Truck, ShieldCheck, CreditCard, RefreshCw } from 'lucide-react';

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ['All', 'Orders & Shipping', 'Returns & Refunds', 'Authenticity', 'Payment Methods'];

  const faqs = [
    {
      category: 'Orders & Shipping',
      question: 'How long does international shipping take?',
      answer: 'Standard shipping takes 3-5 business days within the UAE and KSA, and 5-8 business days for UK, Pakistan, and international destinations.',
    },
    {
      category: 'Orders & Shipping',
      question: 'How can I track my order?',
      answer: 'Once your order is dispatched, you will receive a tracking link via email and SMS. You can also view status updates in your account dashboard.',
    },
    {
      category: 'Returns & Refunds',
      question: 'What is your return policy?',
      answer: 'We offer a 14-day hassle-free return policy for unused items in original packaging with tags intact.',
    },
    {
      category: 'Returns & Refunds',
      question: 'How long does it take to process a refund?',
      answer: 'Refunds are processed within 3-5 business days after our quality team inspects the returned item.',
    },
    {
      category: 'Authenticity',
      question: 'Are all products on RRVDXB authentic?',
      answer: 'Yes, 100% guaranteed. We source directly from authorized brand distributors and certified global luxury suppliers.',
    },
    {
      category: 'Payment Methods',
      question: 'What payment options do you accept?',
      answer: 'We accept Visa, Mastercard, Apple Pay, Tabby/Tamara buy-now-pay-later options, and Cash on Delivery in select regions.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Hero Header */}
      <section className="bg-zinc-950 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-amber-500/30">
            <HelpCircle className="w-3.5 h-3.5" />
            Help Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Find quick answers regarding shipping, product authenticity, payments, and returns.
          </p>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="max-w-4xl mx-auto -mt-8 px-6 relative z-20">
        <div className="bg-white border border-zinc-200 shadow-lg rounded-2xl p-4 sm:p-6 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., shipping, returns, payment)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-zinc-950 shadow-sm'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-zinc-50 rounded-2xl border border-zinc-200">
            <p className="text-zinc-500 text-sm">No matching questions found.</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
              className="mt-3 text-xs font-bold text-amber-500 hover:underline"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-zinc-100/80 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-zinc-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-200 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === idx && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 mt-2">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Support CTA */}
      <section className="bg-zinc-950 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-1">Still need help?</h3>
            <p className="text-xs sm:text-sm text-zinc-400">Our customer support team is available 24/7 to assist you.</p>
          </div>
          <a
            href="/contact"
            className="bg-amber-400 hover:bg-amber-500 text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}