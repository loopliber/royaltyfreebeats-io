import React, { useEffect, useState } from "react";
import { Play, Music, Download, Headphones, Star, ArrowRight, Check, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

export default function FreeDrakeBeats() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    { icon: Download, title: "Instant Download", desc: "Get Drake type beats immediately" },
    { icon: Check, title: "Commercial License", desc: "Free tagged versions for non-commercial use" },
    { icon: Star, title: "Premium Quality", desc: "Professional Drake-inspired production" },
    { icon: Headphones, title: "Multiple Formats", desc: "MP3 downloads available" }
  ];

  const pricingPlans = [
    { name: 'Free Tagged', price: 'FREE', features: ['Tagged Version', 'Non-Commercial Use', 'MP3 Download', 'Personal Projects'], popular: true },
    { name: 'Premium', price: '$50.00', features: ['No Tags License', '1 Music Video', '50,000 Streams', 'Live Performances'], popular: false },
    { name: 'Unlimited', price: '$100.00', features: ['No Tags + Stems', 'Unlimited Videos', 'Unlimited Streams', 'Radio Broadcasting'], popular: false },
    { name: 'Exclusive', price: 'Contact Us', features: ['Exclusive Rights', 'Beat Removed From Store', 'Direct Collaboration', 'Unlimited Everything'], popular: false }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <SEOHead 
        title="Free Drake Type Beats - Download Tagged Versions | RoyaltyFreeBeats.io"
        description="Download free Drake type beats with tags for non-commercial use. High-quality Drake-inspired instrumentals available for instant download. Upgrade to no-tag licensing for commercial releases."
        keywords="free drake beats, drake type beats, free drake type beat, drake instrumentals, drake style beats, free ovo beats, drake beats download"
        canonicalUrl="https://royaltyfreebeats.io/free-drake-beats"
      />
      {/* Hero Section */}
      <main className="relative">
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
            <div className="absolute inset-0 bg-gradient-to-br from-gold-600/20 via-blue-600/10 to-black"></div>
            <div className="relative max-w-7xl mx-auto text-center">
              <Badge className="mb-6 px-4 py-2 text-sm bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/30">
                Free Drake Type Beats Available
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-[#00D4FF] bg-clip-text text-transparent">
                Free Drake Type Beats
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Download free Drake type beats inspired by the OVO sound. Professional Drake-style 
                instrumentals available for instant download with tags.
              </p>
            </div>
          </section>

          {/* Beat Player Section */}
          <section id="beats" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Free Drake Type Beats</h2>
                <p className="text-xl text-gray-300">
                  Discover our collection of Drake-inspired instrumentals with that signature OVO sound.
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
                  title="Free Drake Type Beats Player"
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Our Free Drake Type Beats?</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Drake Type Beat Licensing Options</h2>
                <p className="text-xl text-gray-300">Start with free tagged versions, upgrade for commercial use</p>
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
                      {plan.price === 'FREE' ? 'Download Free' : 'Choose License'}
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
                <h2 className="text-3xl font-bold mb-6">About Free Drake Type Beats</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Your source for high-quality Drake type beats inspired by the OVO sound and Drake's signature style.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Authentic OVO Sound</h3>
                  <p className="leading-relaxed">
                    Download free Drake type beats featuring the signature OVO sound with atmospheric melodies, 
                    smooth 808s, and melodic elements that define Drake's production style. Our Drake-inspired 
                    instrumentals capture the essence of hits from "Take Care," "Views," and "Scorpion" eras, 
                    providing the perfect foundation for melodic rap and singing over beats.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Drake Type Beat Characteristics</h3>
                  <p className="leading-relaxed">
                    Free Drake type beats feature key elements like ambient pads, melodic piano loops, smooth bass lines, 
                    and crisp drums that complement both rap and melodic vocals. These Drake-style instrumentals often 
                    include emotional chord progressions, subtle trap influences, and the spacious mix style that allows 
                    for both aggressive rap delivery and melodic singing approaches.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Perfect for Versatile Artists</h3>
                  <p className="leading-relaxed">
                    Drake type beats are ideal for artists who blend rap and singing, offering enough space for melodic 
                    hooks while maintaining the rhythmic foundation for rap verses. Our free tagged Drake beats provide 
                    the flexibility to experiment with different vocal approaches, from Toronto-style singing to hard rap 
                    deliveries, helping you develop your unique artistic voice.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-4 text-[#00D4FF]">Master the Drake Sound</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Free Drake type beats are essential for artists developing versatile skills in both rap and melodic delivery. 
                    These instrumentals teach you how to navigate the balance between aggressive rap sections and melodic singing, 
                    a skill that has made Drake one of the most successful artists in modern hip hop. Download tagged versions 
                    for practice and upgrade to premium licensing when ready for official releases and streaming platforms.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold mb-2">Perfect for Melodic Rappers:</h4>
                      <p className="text-sm text-gray-400">
                        Develop your singing and rapping skills with Drake-inspired beats that encourage melodic experimentation.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">OVO Style Production:</h4>
                      <p className="text-sm text-gray-400">
                        Experience authentic Toronto sound with atmospheric production and smooth, commercial-ready arrangements.
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