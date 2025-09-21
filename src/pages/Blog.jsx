import React from "react";
import { Calendar, Clock, ArrowRight, Music, Headphones, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "how-to-get-royalty-free-beats-in-2025",
      title: "How to Get Royalty Free Beats in 2025: Complete Guide",
      excerpt: "Discover the best ways to find and license royalty free beats for your music projects. Learn about licensing options, where to find quality beats, and how to avoid copyright issues.",
      date: "September 21, 2025",
      readTime: "8 min read",
      category: "Guide",
      keywords: ["royalty free beats", "how to get beats", "music licensing"],
      featured: true
    },
    {
      slug: "professional-hip-hop-beats-no-tags-explained",
      title: "Professional Hip Hop Beats No Tags: What You Need to Know",
      excerpt: "Understanding the difference between tagged and untagged beats, and why professional hip hop beats no tags are essential for serious artists.",
      date: "September 20, 2025",
      readTime: "6 min read",
      category: "Education",
      keywords: ["professional hip hop beats no tags", "tagged vs untagged beats"],
      featured: false
    },
    {
      slug: "trap-beats-vs-drill-beats-2025-comparison",
      title: "Trap Beats vs Drill Beats: 2025 Production Comparison",
      excerpt: "Explore the key differences between trap and drill beats, including BPM, style elements, and which genre fits your music best.",
      date: "September 19, 2025",
      readTime: "7 min read",
      category: "Production",
      keywords: ["trap beats", "drill beats", "beat comparison"],
      featured: false
    },
    {
      slug: "no-tag-beats-licensing-commercial-use",
      title: "No Tag Beats Licensing for Commercial Use: Legal Guide",
      excerpt: "Everything you need to know about no tag beats licensing, commercial rights, and how to legally use beats in your commercial projects.",
      date: "September 18, 2025",
      readTime: "9 min read",
      category: "Legal",
      keywords: ["no tag beats licensing", "commercial beats", "beat licensing"],
      featured: false
    },
    {
      slug: "best-royalty-free-hip-hop-beats-platforms",
      title: "Best Royalty Free Hip Hop Beats Platforms in 2025",
      excerpt: "Compare the top platforms for finding royalty free hip hop beats, including pricing, licensing options, and quality comparison.",
      date: "September 17, 2025",
      readTime: "10 min read",
      category: "Review",
      keywords: ["royalty free hip hop beats", "beat platforms", "where to buy beats"],
      featured: false
    },
    {
      slug: "beats-for-sale-online-buyers-guide",
      title: "Beats for Sale Online: Complete Buyer's Guide 2025",
      excerpt: "Learn how to find the best beats for sale online, what to look for in quality, and how to make smart purchasing decisions for your music.",
      date: "September 16, 2025",
      readTime: "11 min read",
      category: "Guide",
      keywords: ["beats for sale online", "buying beats", "beat marketplace"],
      featured: false
    }
  ];

  const categories = ["All", "Guide", "Education", "Production", "Legal", "Review"];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead 
        title="Royalty Free Beats Blog - Hip Hop, Trap & R&B Production Tips | RoyaltyFreeBeats.io"
        description="Learn about royalty free beats, hip hop production, trap beats, and music licensing. Expert guides on professional beats, no tag licensing, and beat production."
        keywords="royalty free beats blog, hip hop beats guide, trap beats tutorial, no tag beats licensing, professional beats education, music production tips"
        canonicalUrl="https://royaltyfreebeats.io/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30 mb-6">
              Music Production Blog
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Royalty Free Beats
              <br />
              <span className="text-transparent bg-gradient-to-r from-[#00D4FF] to-white bg-clip-text">
                Blog & Guides
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert guides on royalty free beats, hip hop production, trap beats, and professional music licensing. 
              Learn from industry professionals and elevate your music.
            </p>
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map(post => (
            <div key={post.slug} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-[#00D4FF]/50 transition-all">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-[#00D4FF]/20 to-purple-600/20 p-8 flex items-center justify-center">
                    <Music className="w-20 h-20 text-[#00D4FF]" />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className="bg-[#00D4FF]/20 text-[#00D4FF]">{post.category}</Badge>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 hover:text-[#00D4FF] transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black font-semibold">
                      Read Full Guide
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-[#00D4FF] text-black" : "border-gray-600 text-gray-300 hover:border-[#00D4FF] hover:text-[#00D4FF]"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.filter(post => !post.featured).map(post => (
              <Card key={post.slug} className="bg-gray-900/50 border-gray-800 hover:border-[#00D4FF]/50 transition-all group cursor-pointer">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-[#00D4FF]/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {post.category === "Guide" && <Download className="w-12 h-12 text-[#00D4FF]" />}
                    {post.category === "Education" && <Headphones className="w-12 h-12 text-[#00D4FF]" />}
                    {post.category === "Production" && <Music className="w-12 h-12 text-[#00D4FF]" />}
                    {post.category === "Legal" && <Badge className="w-12 h-12 text-[#00D4FF]" />}
                    {post.category === "Review" && <ArrowRight className="w-12 h-12 text-[#00D4FF]" />}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-[#00D4FF]/20 text-[#00D4FF] text-xs">{post.category}</Badge>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-[#00D4FF] transition-colors text-lg">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#00D4FF] group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SEO Content Section */}
          <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6">
              Learn About Royalty Free Beats
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive blog covers everything you need to know about royalty free beats, 
              from finding professional hip hop beats no tags to understanding no tag beats licensing. 
              Whether you're looking for trap beats, drill beats, or R&B instrumentals, our guides 
              help you make informed decisions for your music projects.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#00D4FF]">Beat Licensing Guides</h3>
                <p className="text-gray-300 text-sm">
                  Learn about different licensing options, commercial rights, and how to legally use beats in your projects.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#00D4FF]">Production Tips</h3>
                <p className="text-gray-300 text-sm">
                  Discover the differences between genres, production techniques, and how to choose the right beats.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#00D4FF]">Industry Insights</h3>
                <p className="text-gray-300 text-sm">
                  Stay updated with the latest trends in hip hop, trap, and R&B production and licensing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}