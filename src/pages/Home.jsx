
import React, { useEffect, useState } from "react";
import { Play, Music, Download, Headphones, Star, ArrowRight, Check, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    { icon: Download, title: "Instant Download", desc: "Get your beats immediately after purchase" },
    { icon: Check, title: "Commercial License", desc: "Full rights to use in commercial projects" },
    { icon: Star, title: "Premium Quality", desc: "Professional studio-grade production" },
    { icon: Headphones, title: "Multiple Formats", desc: "MP3, WAV, and trackouts available" }
  ];

  const pricingPlans = [
    { name: 'Basic', price: '$30.00', features: ['Standard License', '1 Music Video', '5,000 Streams'], popular: false },
    { name: 'Premium', price: '$50.00', features: ['No Tags License', '1 Music Video', '50,000 Streams', 'Live Performances'], popular: true },
    { name: 'Unlimited', price: '$100.00', features: ['No Tags + Stems', 'Unlimited Videos', 'Unlimited Streams', 'Radio Broadcasting'], popular: false },
    { name: 'Exclusive', price: 'Contact Us', features: ['Exclusive Rights', 'Beat Removed From Store', 'Direct Collaboration', 'Unlimited Everything'], popular: false }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <SEOHead 
        title="Royalty Free Beats - Premium Hip Hop & Trap Beats | RoyaltyFreeBeats.io"
        description="Discover premium royalty-free beats for hip hop, trap, and more. Instant download, commercial license included. Professional quality beats for artists worldwide."
        keywords="royalty free beats, hip hop beats, trap beats, beats for sale, rap beats, instrumental beats, music licensing, producer beats, commercial license beats"
        canonicalUrl="https://royaltyfreebeats.io/"
      />
      {/* Hero Section */}
      <main className="relative">
        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-4 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <span className="text-lg sm:text-xl font-bold">ALL BEATS ONLY $5 TODAY!</span>
                <span className="text-2xl">🔥</span>
              </div>
              <div className="text-sm sm:text-base font-semibold">
                <span className="bg-white/20 px-3 py-1 rounded-full mr-2">LIMITED COPIES!</span>
                <span className="bg-white/20 px-3 py-1 rounded-full animate-pulse">ENDS SOON!</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <Music className="w-8 h-8 text-[#00D4FF]" />
                  <div className="text-xl font-bold">RoyaltyFreeBeats.io</div>
                </a>
                <div className="hidden md:flex items-center space-x-8">
                  <div className="relative group">
                    <a href="#beats" className="hover:text-[#00D4FF] transition-colors cursor-pointer">
                      Free Beats ▼
                    </a>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <a href="/free-hip-hop-beats" className="block px-4 py-3 text-sm hover:text-[#00D4FF] hover:bg-gray-800/50 transition-colors">Free Hip Hop Beats</a>
                      <a href="/free-trap-beats" className="block px-4 py-3 text-sm hover:text-[#00D4FF] hover:bg-gray-800/50 transition-colors">Free Trap Beats</a>
                      <a href="/free-drake-beats" className="block px-4 py-3 text-sm hover:text-[#00D4FF] hover:bg-gray-800/50 transition-colors">Free Drake Beats</a>
                      <a href="/royalty-free-instrumentals" className="block px-4 py-3 text-sm hover:text-[#00D4FF] hover:bg-gray-800/50 transition-colors rounded-b-lg">Royalty Free Instrumentals</a>
                    </div>
                  </div>
                  <a href="#beats" className="hover:text-[#00D4FF] transition-colors">All Beats</a>
                  <a href="/licensing" className="hover:text-[#00D4FF] transition-colors">Licensing</a>
                  <Button className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black font-semibold">
                    Browse Library
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30 mb-6">
                  Premium Beat Store
                </Badge>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Royalty Free Beats
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-[#00D4FF] to-white bg-clip-text">
                    Hip Hop, Trap & R&B
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Professional royalty free hip hop beats, trap beats, and drill instrumentals. 
                  No tag beats licensing with instant download and commercial rights included.
                </p>
              </div>

              {/* Beat Player Section */}
              <div id="beats" className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
                  Listen & Download Premium Beats
                </h2>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800">
                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-semibold mb-2 text-[#00D4FF]">Featured Beat Collection</h3>
                    <p className="text-gray-400 mb-4">Explore our latest hip hop and trap instrumentals</p>
                    <div className="text-sm text-gray-500 max-w-2xl mx-auto">
                      <p>Professional royalty free beats featuring hip hop, trap, drill, and R&B instrumentals. 
                      All beats are available with instant download and include commercial licensing options. 
                      Choose from no tag licensing for clean, professional recordings or basic licensing for budget projects.</p>
                    </div>
                  </div>
                  
                  <div className="w-full rounded-xl overflow-hidden shadow-2xl">
                    <iframe 
                      src="https://airbit.com/widgets/html5/?uid=733519&config=1371594" 
                      width="100%" 
                      frameBorder="0" 
                      allowFullScreen
                      title="Royalty Free Beats Player - Hip Hop & Trap Instrumentals"
                      className="w-full h-[600px] md:h-[750px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                  Why Choose Our Beats?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Professional quality meets affordability. Get the sound that sets you apart.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className={`text-center transform transition-all duration-700 ${
                      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 bg-[#00D4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#00D4FF]/30">
                      <feature.icon className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-5xl font-bold mb-8">
                    Crafted for
                    <span className="text-[#00D4FF]"> Artists</span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Every beat in our collection is professionally produced and mixed, 
                    ready to elevate your music to the next level. From hard-hitting trap 
                    to smooth hip hop, find the perfect sound for your style.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Professional studio production quality",
                      "Cleared for commercial use worldwide", 
                      "Multiple format downloads included",
                      "Lifetime access to your purchases"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-96 rounded-2xl overflow-hidden border border-[#00D4FF]/30 shadow-2xl">
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src="https://cdn.shopify.com/videos/c/o/v/fe2693c13fa34c99ac325a80aeea3e32.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#00D4FF]/10 rounded-full blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 to-black">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                  Flexible Licensing Options
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Find the perfect license for your project. All plans come with instant downloads.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                {pricingPlans.map((plan) => (
                  <div 
                    key={plan.name} 
                    className={`bg-gray-900/50 rounded-2xl p-8 border ${plan.popular ? 'border-[#00D4FF]' : 'border-gray-800'} relative transform transition-transform hover:scale-105 flex flex-col h-full`}
                  >
                    {plan.popular && <Badge className="absolute top-0 -translate-y-1/2 bg-[#00D4FF] text-black font-semibold">Most Popular</Badge>}
                    
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-6">
                        <Tag className={`w-6 h-6 ${plan.popular ? 'text-[#00D4FF]' : 'text-gray-500'}`} />
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                      </div>
                      
                      <div className="mb-8">
                        <span className="text-5xl font-bold">{plan.price.startsWith('$') ? plan.price : '-'}</span>
                        {plan.name === 'Exclusive' && <p className="text-lg font-bold mt-1">Negotiable</p>}
                      </div>
                      
                      <ul className="space-y-4 text-gray-400 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.name === 'Exclusive' ? (
                      <div className="w-full mt-auto bg-gray-800/50 border border-[#00D4FF]/30 text-[#00D4FF] font-semibold text-center py-3 px-4 rounded-lg text-sm sm:text-base break-all">
                        help@royaltyfreebeats.io
                      </div>
                    ) : (
                      <Button asChild className="w-full mt-auto bg-[#00D4FF] hover:bg-[#00B8E6] text-black font-bold">
                        <a href="#beats">Choose Beat</a>
                      </Button>
                    )}
                  </div>
                ))}
              </div>

               <div className="text-center mt-16">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4 group"
                  >
                    <a href="#beats">
                      Browse Full Beat Library
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
               </div>
            </div>
          </section>

          {/* SEO Content Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">About RoyaltyFreeBeats.io</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Your premier destination for professional royalty free beats and instrumental music licensing.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Professional Hip Hop Beats</h3>
                  <p className="leading-relaxed">
                    Our extensive catalog features professional hip hop beats no tags, perfect for rap artists and vocalists. 
                    Each instrumental is crafted with modern production techniques and industry-standard quality. 
                    Whether you need hard-hitting trap beats or smooth R&B instrumentals, our collection has the perfect sound for your project.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">No Tag Beats Licensing</h3>
                  <p className="leading-relaxed">
                    Get clean, professional beats without producer tags through our no tag beats licensing options. 
                    Perfect for serious artists ready to release commercial music, our no tag licensing provides 
                    radio-ready instrumentals with clear commercial rights. Choose from various licensing tiers 
                    based on your project needs and distribution goals.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Instant Download & Commercial Rights</h3>
                  <p className="leading-relaxed">
                    All beats for sale online include instant download and commercial licensing rights. 
                    Stream on Spotify, Apple Music, and all major platforms with confidence. Our transparent 
                    licensing ensures you know exactly what rights you're getting, from basic licensing for 
                    independent releases to unlimited licensing for major distribution.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-4 text-[#00D4FF]">Why Choose Royalty Free Beats?</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Royalty free beats offer the perfect solution for independent artists, content creators, and producers 
                    looking for high-quality instrumentals without ongoing royalty payments. Our professional beat catalog 
                    includes hip hop, trap, drill, R&B, and pop instrumentals, all available with clear licensing terms 
                    and instant download. From tagged preview versions to exclusive buyouts, we provide flexible options 
                    for every budget and project type.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold mb-2">For Artists & Rappers:</h4>
                      <p className="text-sm text-gray-400">
                        Find the perfect beat for your next single, mixtape, or album. No tags licensing available for professional releases.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">For Content Creators:</h4>
                      <p className="text-sm text-gray-400">
                        License beats for YouTube videos, podcasts, and social media content with clear commercial rights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Music className="w-6 h-6 text-[#00D4FF]" />
                    <span className="text-lg font-bold">RoyaltyFreeBeats.io</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Premium royalty-free beats and instrumentals for artists worldwide. 
                    Professional quality, instant download, commercial license included.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Free Beats</h4>
                  <div className="space-y-2 text-sm">
                    <a href="/free-hip-hop-beats" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">Free Hip Hop Beats</a>
                    <a href="/free-trap-beats" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">Free Trap Beats</a>
                    <a href="/free-drake-beats" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">Free Drake Beats</a>
                    <a href="/royalty-free-instrumentals" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">Royalty Free Instrumentals</a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <div className="space-y-2 text-sm">
                    <a href="#beats" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">Browse All Beats</a>
                    <a href="#about" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">About Us</a>
                    <a href="#pricing" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">Pricing</a>
                    <a href="/licensing" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">Licensing</a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Support</h4>
                  <div className="space-y-2 text-sm">
                    <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">FAQ</a>
                    <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">Contact</a>
                    <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors block">Privacy Policy</a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p className="text-gray-500 text-sm">
                  © 2025 RoyaltyFreeBeats.io. All rights reserved. Professional beats for serious artists.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
