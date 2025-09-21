import React from "react";
import { Shield, Check, Download, Music, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

export default function LicensingPage() {
  const licenseTypes = [
    {
      name: "Standard License",
      price: "$30",
      features: [
        "Commercial use allowed",
        "Up to 5,000 streams/views",
        "1 music video",
        "Local radio play",
        "No exclusive rights"
      ],
      bestFor: "Independent artists starting out"
    },
    {
      name: "No Tags License",
      price: "$50",
      popular: true,
      features: [
        "Clean beat - no producer tags",
        "Up to 50,000 streams/views",
        "Unlimited music videos",
        "Live performances",
        "Social media monetization"
      ],
      bestFor: "Serious artists and content creators"
    },
    {
      name: "No Tags + Stems",
      price: "$100",
      features: [
        "Clean beat with individual tracks",
        "Unlimited streams/views",
        "Radio broadcasting rights",
        "Remix and editing rights",
        "Professional mixing capability"
      ],
      bestFor: "Professional artists and producers"
    },
    {
      name: "Exclusive Rights",
      price: "Contact Us",
      features: [
        "Beat removed from store",
        "100% exclusive ownership",
        "Full copyright transfer",
        "Unlimited everything",
        "Direct producer collaboration"
      ],
      bestFor: "Major releases and established artists"
    }
  ];

  const faqs = [
    {
      question: "What does 'no tag beats licensing' mean?",
      answer: "No tag beats licensing means you receive a clean version of the instrumental without the producer's voice tag or watermark. This gives you a professional, uninterrupted beat ready for recording vocals."
    },
    {
      question: "Can I use royalty free hip hop beats commercially?",
      answer: "Yes! All our beats come with commercial licensing rights. You can sell your music, monetize on streaming platforms, and use the beats in commercial projects according to your license terms."
    },
    {
      question: "What's the difference between tagged and no tags beats?",
      answer: "Tagged beats include producer voice tags throughout the track, while no tags beats are clean instrumentals. No tags licensing provides the professional quality needed for official releases."
    },
    {
      question: "How quickly can I download beats after purchase?",
      answer: "All beats for sale online are available for instant download after purchase. You'll receive high-quality audio files and your license agreement immediately."
    },
    {
      question: "Can I modify the beats I license?",
      answer: "Yes, with proper licensing you can add vocals, change arrangement, and customize the beat for your project. Stem versions provide even more flexibility for professional mixing."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead 
        title="No Tag Beats Licensing - Royalty Free Hip Hop Beats Rights | RoyaltyFreeBeats.io"
        description="Learn about our no tag beats licensing options for royalty free hip hop beats. Clear commercial rights, instant download, and professional licensing for beats for sale online."
        keywords="no tag beats licensing, royalty free hip hop beats, beats for sale online, commercial beat licensing, hip hop instrumental rights, professional beat licensing"
        canonicalUrl="https://royaltyfreebeats.io/licensing"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30 mb-6">
              Licensing Information
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              No Tag Beats
              <br />
              <span className="text-transparent bg-gradient-to-r from-[#00D4FF] to-white bg-clip-text">
                Licensing Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional licensing for royalty free hip hop beats. Clear commercial rights, 
              instant download, and transparent pricing for all your music projects.
            </p>
          </div>

          {/* License Types */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Choose Your Beat License
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {licenseTypes.map((license) => (
                <div 
                  key={license.name}
                  className={`bg-gray-900/50 rounded-2xl p-8 border ${license.popular ? 'border-[#00D4FF]' : 'border-gray-800'} relative`}
                >
                  {license.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00D4FF] text-black font-semibold">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center mb-6">
                    <Shield className={`w-12 h-12 mx-auto mb-4 ${license.popular ? 'text-[#00D4FF]' : 'text-gray-400'}`} />
                    <h3 className="text-2xl font-bold mb-2">{license.name}</h3>
                    <div className="text-3xl font-bold text-[#00D4FF] mb-2">
                      {license.price}
                    </div>
                    <p className="text-gray-400 text-sm">{license.bestFor}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {license.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${license.popular ? 'bg-[#00D4FF] hover:bg-[#00B8E6] text-black' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
                  >
                    {license.name === 'Exclusive Rights' ? 'Contact Us' : 'Choose License'}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Rights and Usage */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                What You Get With Our Licensing
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Download className="w-8 h-8 text-[#00D4FF] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instant Download</h3>
                    <p className="text-gray-300">
                      Get your licensed beats immediately after purchase. High-quality audio files 
                      ready for professional use in your projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-[#00D4FF] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Commercial Rights</h3>
                    <p className="text-gray-300">
                      All licenses include commercial usage rights. Monetize your music on streaming 
                      platforms, sell physical copies, and perform live.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Music className="w-8 h-8 text-[#00D4FF] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Quality</h3>
                    <p className="text-gray-300">
                      Studio-grade production with professional mixing and mastering. 
                      No tag beats licensing ensures clean, radio-ready instrumentals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">
                Licensing Benefits
              </h2>
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Clear, legal ownership documentation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>No hidden fees or recurring charges</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Worldwide usage rights included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Producer credit requirements included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Lifetime access to purchased beats</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Multiple format downloads (MP3, WAV)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3 text-[#00D4FF]">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 border border-gray-700">
            <Users className="w-16 h-16 text-[#00D4FF] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to License Professional Beats?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse our catalog of royalty free hip hop beats and find the perfect sound 
              for your next project. No tag beats licensing available with instant download.
            </p>
            <Button size="lg" className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black font-bold text-lg px-8 py-4">
              Browse Beats Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}