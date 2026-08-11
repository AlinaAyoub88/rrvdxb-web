import React from 'react';
import { 
  ShoppingBag, 
  Globe, 
  Bot, 
  Truck, 
  ShieldCheck, 
  Award, 
  Users, 
  Sparkles 
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Global Customers', value: '50K+' },
    { label: 'Premium Brands', value: '100+' },
    { label: 'Countries Shipped', value: '25+' },
    { label: 'Satisfaction Rate', value: '99%' },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-amber-500" />,
      title: 'Fast International Shipping',
      description: 'End-to-end global delivery with free shipping on orders over AED 489/- across UAE & worldwide.',
    },
    {
      icon: <Bot className="w-8 h-8 text-amber-500" />,
      title: 'AI Shopping Assistant',
      description: 'Personalized product recommendations, price drop alerts, and instant shopping assistance 24/7.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      title: '100% Authentic Products',
      description: 'Curated products from world-class luxury brands like Chanel, Adidas, Sony, and Lacoste.',
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: 'Premium Quality Guarantee',
      description: 'Rigorous quality checks on every product ranging from electronics to high-end luxury fashion.',
    },
  ];

  const brandValues = [
    {
      title: 'Our Mission',
      desc: 'To revolutionize luxury e-commerce by combining cutting-edge AI technology with top-tier fashion and electronics, delivering unparalleled convenience to your doorstep.',
    },
    {
      title: 'Our Vision',
      desc: 'To become the premier global online destination trusted by millions across UAE, KSA, UK, and Pakistan for authentic products and seamless shopping experiences.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-zinc-950 text-white py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-amber-500/30">
            Welcome to RRVDXB
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Elevating Luxury Shopping <br className="hidden sm:inline" />
            <span className="text-amber-400">With AI Intelligence</span>
          </h1>
          <p className="text-zinc-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            RRVDXB is a luxury e-commerce platform offering premium electronics, fashion, 
            exclusive perfumes, and accessories. Experience end-to-end global shipping with smart AI recommendations.
          </p>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-zinc-50 py-12 px-6 sm:px-12 lg:px-24 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-1">
                {stat.value}
              </h3>
              <p className="text-zinc-600 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- BRAND STORY SECTION --- */}
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm mb-2 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
              Redefining The Standard Of Online Shopping
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Founded with the vision to bridge global style with technological convenience, RRVDXB serves 
              as a premier hub for modern online shoppers across UAE, KSA, UK, and Pakistan.
            </p>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              From the latest iPhone 14 Pro Max and PlayStation consoles to iconic perfumes and designer sneakers, 
              we curate only genuine, high-caliber goods. Coupled with our AI-powered shopping assistant, finding 
              your desired luxury item has never been faster or easier.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-zinc-950 font-bold flex items-center justify-center text-xs border-2 border-white">
                  UAE
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-950 text-white font-bold flex items-center justify-center text-xs border-2 border-white">
                  KSA
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-400 text-zinc-950 font-bold flex items-center justify-center text-xs border-2 border-white">
                  UK
                </div>
              </div>
              <span className="text-xs text-zinc-600 font-medium">Delivering luxury worldwide</span>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="space-y-6">
            {brandValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 hover:border-amber-400/50 transition-all duration-300 shadow-sm"
              >
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US / FEATURES --- */}
      <section className="bg-zinc-50 py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Shop With RRVDXB?
            </h2>
            <p className="text-zinc-600 max-w-xl mx-auto text-sm sm:text-base">
              We combine luxury brand authenticity with modern AI technology to give you the ultimate shopping experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-zinc-100"
              >
                <div className="mb-6 p-3 bg-zinc-100 rounded-xl inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-zinc-900">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BANNER CTA --- */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto bg-zinc-950 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Upgrade Your Style?
            </h2>
            <p className="text-zinc-300 max-w-xl mx-auto mb-8 text-sm sm:text-base">
              Explore our best sellers and enjoy up to 55% OFF with free international delivery over AED 489/-.
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-zinc-950 font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 shadow-lg cursor-pointer">
              Explore Store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}