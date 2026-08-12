import React, { useState } from 'react';
import { Search, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

export default function BrandsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Luxury Fashion', 'Electronics', 'Perfumes & Beauty', 'Accessories'];

  const featuredBrands = [
    {
      id: 1,
      name: 'Chanel',
      category: 'Perfumes & Beauty',
      tagline: 'Timeless Elegance & Haute Couture',
      logo: 'CH',
      itemCount: '120+ Products',
      popular: 'Coco Mademoiselle, Bleu De Chanel',
    },
    {
      id: 2,
      name: 'Sony',
      category: 'Electronics',
      tagline: 'World-Class Audio & Gaming Systems',
      logo: 'SN',
      itemCount: '85+ Products',
      popular: 'PlayStation 5, WH-1000XM5 Headphones',
    },
    {
      id: 3,
      name: 'Apple',
      category: 'Electronics',
      tagline: 'Innovative Premium Technology',
      logo: 'AP',
      itemCount: '150+ Products',
      popular: 'iPhone 14 Pro Max, MacBook Pro',
    },
    {
      id: 4,
      name: 'Adidas',
      category: 'Luxury Fashion',
      tagline: 'Sportswear & Exclusive Footwear',
      logo: 'AD',
      itemCount: '200+ Products',
      popular: 'Yeezy Series, Ultraboost',
    },
    {
      id: 5,
      name: 'Lacoste',
      category: 'Accessories',
      tagline: 'Classic French Apparel & Eyewear',
      logo: 'LC',
      itemCount: '95+ Products',
      popular: 'Polo Shirts, Leather Watches',
    },
    {
      id: 6,
      name: 'Gucci',
      category: 'Luxury Fashion',
      tagline: 'Modern Italian Luxury & Leather Goods',
      logo: 'GC',
      itemCount: '110+ Products',
      popular: 'Gucci Bloom, Leather Belts',
    },
  ];

  const filteredBrands = featuredBrands.filter((brand) => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          brand.popular.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || brand.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* --- HERO BANNER --- */}
      <section className="bg-zinc-950 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Official Partnerships
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Luxury Brand Collection</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Explore 100% authentic products curated directly from global leaders in luxury fashion, premium electronics, and fine fragrances.
          </p>
        </div>
      </section>

      {/* --- SEARCH & CATEGORY FILTER --- */}
      <section className="max-w-6xl mx-auto -mt-8 px-6 relative z-20">
        <div className="bg-white border border-zinc-200 shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search brands or products (e.g., Apple, Chanel)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
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

      {/* --- BRANDS GRID --- */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Brands ({filteredBrands.length})</h2>
          <span className="text-xs text-zinc-500 flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            100% Authenticity Guaranteed
          </span>
        </div>

        {filteredBrands.length === 0 ? (
          <div className="text-center py-16 bg-zinc-50 rounded-2xl border border-zinc-200">
            <p className="text-zinc-500 font-medium text-sm">No brands found matching your criteria.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 text-xs font-bold text-amber-500 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="bg-zinc-50 border border-zinc-200 hover:border-amber-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 text-amber-400 font-bold text-lg flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-colors">
                      {brand.logo}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-white border border-zinc-200 rounded-full text-zinc-600">
                      {brand.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-1">{brand.name}</h3>
                  <p className="text-xs text-zinc-500 mb-4">{brand.tagline}</p>

                  <div className="bg-white p-3 rounded-xl border border-zinc-100 mb-4">
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">Top Selling Items</p>
                    <p className="text-xs font-medium text-zinc-800">{brand.popular}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-200 text-xs text-zinc-500 font-medium">
                  <span>{brand.itemCount}</span>
                  <span className="flex items-center gap-1 text-amber-500 group-hover:translate-x-1 transition-transform">
                    View Products <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- TRUST BANNER --- */}
      <section className="bg-zinc-950 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-1">Are you an authorized luxury brand seller?</h3>
            <p className="text-xs sm:text-sm text-zinc-400">Partner with RRVDXB to distribute your items across UAE, KSA, UK, and Pakistan.</p>
          </div>
          <button className="bg-amber-400 hover:bg-amber-500 text-zinc-950 font-bold px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap cursor-pointer">
            Become a Partner
          </button>
        </div>
      </section>
    </div>
  );
}