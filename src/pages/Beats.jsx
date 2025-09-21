import React, { useEffect } from "react";
import { Music, Download, Play, Filter, Search, Tag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import SEOHead from "@/components/SEOHead";

export default function BeatsPage() {
  const genres = [
    { name: "Hip Hop Beats", count: "150+", description: "Professional hip hop beats no tags for your rap projects" },
    { name: "Trap Beats", count: "120+", description: "Hard-hitting trap instrumentals with commercial licensing" },
    { name: "Drill Beats", count: "80+", description: "Aggressive drill beats for modern rap artists" },
    { name: "R&B Beats", count: "60+", description: "Smooth R&B instrumentals for soulful vocals" },
    { name: "Pop Beats", count: "40+", description: "Commercial pop beats for mainstream artists" },
    { name: "Afrobeat", count: "30+", description: "Authentic afrobeat rhythms and instrumentals" }
  ];

  const featuredBeats = [
    { title: "Dark Trap Energy", genre: "Trap", bpm: "140", key: "Am", price: "$30" },
    { title: "Smooth Hip Hop Vibes", genre: "Hip Hop", bpm: "85", key: "C", price: "$30" },
    { title: "Drill Street Anthem", genre: "Drill", bpm: "150", key: "Gm", price: "$30" },
    { title: "Melodic Trap Waves", genre: "Trap", bpm: "145", key: "Em", price: "$30" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead 
        title="Browse Royalty Free Beats - Professional Hip Hop Beats No Tags | RoyaltyFreeBeats.io"
        description="Browse our extensive collection of royalty free hip hop beats, trap beats, and drill beats. Professional no tag beats licensing available for instant download. Beats for sale online with commercial rights."
        keywords="royalty free beats, professional hip hop beats no tags, beats for sale online, no tag beats licensing, royalty free hip hop beats, trap beats, drill beats, instrumental beats"
        canonicalUrl="https://royaltyfreebeats.io/beats"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30 mb-6">
              Professional Beats Store
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Royalty Free Beats
              <br />
              <span className="text-transparent bg-gradient-to-r from-[#00D4FF] to-white bg-clip-text">
                No Tags Required
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Browse professional hip hop beats no tags, trap instrumentals, and drill beats for sale online. 
              All beats include commercial licensing and instant download.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search royalty free beats by genre, mood, or BPM..." 
                  className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 h-12"
                />
              </div>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 h-12 px-6">
                <Filter className="w-4 h-4 mr-2" />
                Filter Beats
              </Button>
            </div>
          </div>

          {/* Genre Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Browse Beats by Genre
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {genres.map((genre, index) => (
                <div 
                  key={genre.name}
                  className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-[#00D4FF]/50 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Music className="w-8 h-8 text-[#00D4FF] group-hover:scale-110 transition-transform" />
                    <Badge className="bg-[#00D4FF]/20 text-[#00D4FF]">{genre.count}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00D4FF] transition-colors">
                    {genre.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {genre.description}
                  </p>
                  <Button className="w-full bg-transparent border border-gray-600 hover:bg-[#00D4FF] hover:text-black transition-all">
                    Browse {genre.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Main Beat Player */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Professional Hip Hop Beats No Tags
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-[#00D4FF]">RoyaltyFreeBeats.io Catalog</h3>
                <p className="text-gray-400">No tag beats licensing available - instant download with commercial rights</p>
              </div>
              
              <div className="w-full rounded-xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://airbit.com/widgets/html5/?uid=733519&config=1371594" 
                  width="100%" 
                  frameBorder="0" 
                  allowFullScreen
                  title="Royalty Free Hip Hop Beats - Professional No Tags Licensing"
                  className="w-full h-[600px] md:h-[750px]"
                />
              </div>
            </div>
          </div>

          {/* Featured Beats Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Beats for Sale Online
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBeats.map((beat, index) => (
                <div 
                  key={beat.title}
                  className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-[#00D4FF]/50 transition-all group"
                >
                  <div className="aspect-square bg-gradient-to-br from-[#00D4FF]/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Play className="w-12 h-12 text-[#00D4FF]" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-[#00D4FF] transition-colors">
                    {beat.title}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span>{beat.genre}</span>
                    <span>{beat.bpm} BPM</span>
                    <span>{beat.key}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#00D4FF]">{beat.price}</span>
                    <Button size="sm" className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black">
                      <Download className="w-4 h-4 mr-1" />
                      License
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Why Choose RoyaltyFreeBeats.io for Your Music?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">
                  Professional Hip Hop Beats No Tags
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our extensive catalog features professional hip hop beats with no tags, 
                  perfect for serious artists. Every beat is crafted by experienced producers 
                  and comes with instant download and commercial licensing rights.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">
                  No Tag Beats Licensing Made Simple
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Skip the hassle of tag removal. Our no tag beats licensing system 
                  provides clean, professional instrumentals ready for your vocals. 
                  From trap to drill to classic hip hop, find beats for sale online with clear rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}