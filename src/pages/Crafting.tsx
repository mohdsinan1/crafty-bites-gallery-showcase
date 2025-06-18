
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star, Scissors, Sparkles, Gem } from "lucide-react";

const Crafting = () => {
  const craftingProjects = [
    {
      id: 1,
      title: "Handmade Jewelry",
      description: "Unique necklaces and earrings with natural stones",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      category: "Jewelry"
    },
    {
      id: 2,
      title: "Fabric Art Pieces",
      description: "Textile wall hangings and decorative patches",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
      category: "Textile"
    },
    {
      id: 3,
      title: "Scrapbook Albums",
      description: "Memory books with personalized touches",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      category: "Paper Craft"
    },
    {
      id: 4,
      title: "Decorative Candles",
      description: "Hand-poured candles with natural scents",
      image: "https://images.unsplash.com/photo-1602874801006-2b8b482d0e2a?w=400&h=300&fit=crop",
      category: "Candle Making"
    },
    {
      id: 5,
      title: "Embroidered Pillows",
      description: "Custom pillows with intricate embroidery",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      category: "Embroidery"
    },
    {
      id: 6,
      title: "Clay Pottery",
      description: "Hand-thrown bowls and decorative pieces",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Pottery"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Crafty Bites
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-emerald-300 text-emerald-600 hover:bg-emerald-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Scissors className="w-16 h-16 text-emerald-500 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Crafting
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse collection of handmade crafts and DIY projects. From jewelry to home decor, 
            each piece is created with passion and attention to detail.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craftingProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <div className="flex items-center space-x-4">
                          <Sparkles className="w-5 h-5" />
                          <Gem className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-100 to-teal-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Want a Custom Craft?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let's create something special together. Custom crafting projects and workshops available.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3">
              Start a Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Crafting;
