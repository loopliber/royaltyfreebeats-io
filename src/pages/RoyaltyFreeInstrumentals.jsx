import React, { useEffect, useState } from "react";
import { Play, Music, Download, Headphones, Star, ArrowRight, Check, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

export default function RoyaltyFreeInstrumentals() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    { icon: Download, title: "Instant Download", desc: "Get royalty free instrumentals immediately" },
    { icon: Check, title: "Commercial License", desc: "Full commercial rights included" },
    { icon: Star, title: "Premium Quality", desc: "Professional instrumental production" },
    { icon: Headphones, title: "Multiple Formats", desc: "MP3, WAV, and stems available" }
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
        title="Royalty Free Instrumentals - Professional Music Licensing | RoyaltyFreeBeats.io"
        description="License high-quality royalty free instrumentals for commercial use. Professional hip hop, trap, R&B, and pop instrumentals with instant download and clear licensing terms."
        keywords="royalty free instrumentals, instrumental music licensing, background music, commercial instrumentals, royalty free music, hip hop instrumentals, trap instrumentals"
        canonicalUrl="https://royaltyfreebeats.io/royalty-free-instrumentals"
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
                  <a href="/" className="hover:text-[#00D4FF] transition-colors">Home</a>
                  <a href="/licensing" className="hover:text-[#00D4FF] transition-colors">Licensing</a>
                  <Button size="sm" className="bg-[#00D4FF] text-black hover:bg-[#00B8E6]">
                    License Now
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/10 to-black"></div>
            <div className="relative max-w-7xl mx-auto text-center">
              <Badge className="mb-6 px-4 py-2 text-sm bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/30">
                Professional Royalty Free Instrumentals
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-[#00D4FF] bg-clip-text text-transparent">
                Royalty Free Instrumentals
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                License professional royalty free instrumentals for your commercial projects. 
                High-quality music across all genres with instant download and clear licensing terms.
              </p>
            </div>
          </section>

          {/* Beat Player Section */}
          <section id="beats" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Royalty Free Instrumentals</h2>
                <p className="text-xl text-gray-300">
                  Discover our extensive catalog of royalty free instrumentals across all genres and styles.
                </p>
              </div>
              
              {/* Airbit Player Embed */}
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <iframe 
                  src="https://airbit.com/widgets/html5/?uid=733519&config=1371594"
                  width="100%" 
                  height="750" 
                  frameBorder="0" 
                  allowFullScreen
                  title="Royalty Free Instrumentals Player"
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Our Royalty Free Instrumentals?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-[#00D4FF]/50 transition-all group">
                    <feature.icon className="w-12 h-12 mx-auto mb-4 text-[#00D4FF] group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Instrumental Licensing Options</h2>
                <p className="text-xl text-gray-300">Flexible licensing for all your commercial music needs</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`relative p-8 rounded-2xl border transition-all hover:scale-105 ${
                    plan.popular ? 'border-[#00D4FF] bg-[#00D4FF]/5' : 'border-gray-800 bg-gray-900/30'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-[#00D4FF] text-black font-semibold px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold text-[#00D4FF] mb-2">{plan.price}</div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-[#00D4FF] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full ${
                      plan.popular 
                        ? 'bg-[#00D4FF] text-black hover:bg-[#00B8E6]' 
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}>
                      Choose License
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SEO Content Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">About Royalty Free Instrumentals</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Your comprehensive source for professional royalty free instrumentals across all genres and commercial applications.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Complete Genre Coverage</h3>
                  <p className="leading-relaxed">
                    Our royalty free instrumentals catalog spans hip hop, trap, R&B, pop, electronic, rock, and ambient music. 
                    Each instrumental is professionally produced with industry-standard mixing and mastering, suitable for 
                    commercial releases, content creation, advertising, and media production. From hard-hitting beats to 
                    atmospheric background music, we provide instrumentals for every creative need.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Clear Commercial Licensing</h3>
                  <p className="leading-relaxed">
                    All royalty free instrumentals come with transparent licensing terms for commercial use. No ongoing royalty 
                    payments, no hidden fees, and no complex agreements. Our instrumental licensing covers streaming platforms, 
                    radio play, live performances, music videos, and synchronization rights. Choose from basic licensing for 
                    independent releases to unlimited licensing for major distribution and broadcasting.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Professional Production Standards</h3>
                  <p className="leading-relaxed">
                    Every royalty free instrumental maintains professional production standards with studio-quality recording, 
                    professional mixing, and commercial mastering. Our instrumentals feature multiple format downloads including 
                    MP3 for immediate use, WAV for professional applications, and stem packages for advanced production work. 
                    All instrumentals are delivered at industry-standard sample rates and bit depths.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-4 text-[#00D4FF]">Perfect for Every Creative Project</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Royalty free instrumentals provide the perfect foundation for artists, content creators, advertisers, and media 
                    producers who need high-quality music without ongoing licensing complications. Our instrumental catalog offers 
                    professional-grade music at affordable prices with clear commercial rights. Whether you're creating YouTube 
                    videos, podcast intros, commercial advertisements, or releasing original music, our royalty free instrumentals 
                    deliver the quality and flexibility you need for successful projects.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold mb-2">For Content Creators:</h4>
                      <p className="text-sm text-gray-400">
                        License instrumentals for YouTube, podcasts, social media, and digital content with full commercial rights included.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">For Music Artists:</h4>
                      <p className="text-sm text-gray-400">
                        Professional instrumentals for original releases, with options for exclusive rights and stem packages available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Music className="w-6 h-6 text-[#00D4FF]" />
                <div className="text-xl font-bold">RoyaltyFreeBeats.io</div>
              </div>
              <p className="text-gray-400 mb-4">Professional beats for serious artists</p>
              <p className="text-sm text-gray-500">© 2025 RoyaltyFreeBeats.io. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}