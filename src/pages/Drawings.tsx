
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Star, Palette, Eye, Heart } from "lucide-react";
import { useState } from "react";

const Drawings = () => {
  const drawings = [
    {
      id: 1,
      title: "Sacred Architecture",
      description: "Beautiful watercolor painting of the Prophet's Mosque with intricate details",
      image: "/lovable-uploads/17fc901c-b86d-4f9e-a282-f56f51bb2263.png",
      category: "Religious Art"
    },
    {
      id: 2,
      title: "Anime Character Study",
      description: "Detailed pencil sketch of an anime girl character with flowing hair",
      image: "/lovable-uploads/77510403-4879-4b1c-b572-cce0f41e3289.png",
      category: "Character Design"
    },
    {
      id: 3,
      title: "Girl with Cats",
      description: "Charming illustration of a girl surrounded by cute cats and plants",
      image: "/lovable-uploads/30a12034-70df-4ba3-93aa-463f2a4fe9dc.png",
      category: "Illustration"
    },
    {
      id: 4,
      title: "Urban Sketches",
      description: "Quick city scenes captured in pencil",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      category: "Urban"
    },
    {
      id: 5,
      title: "Fantasy Realm",
      description: "Imaginative creatures from another world",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Fantasy"
    },
    {
      id: 6,
      title: "Still Life Study",
      description: "Classic arrangement with modern twist",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "Still Life"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Crafty Bites
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
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
            <Palette className="w-16 h-16 text-purple-500 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Drawings
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my collection of artistic drawings, from detailed portraits to abstract expressions. 
            Each piece represents a moment of inspiration captured on paper.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drawings.map((drawing) => (
              <Card key={drawing.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden rounded-xl">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={drawing.image} 
                      alt={drawing.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <div className="flex items-center space-x-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="hover:scale-110 transition-transform">
                                <Eye className="w-5 h-5" />
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0">
                              <div className="relative">
                                <img 
                                  src={drawing.image} 
                                  alt={drawing.title}
                                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                />
                                <div className="p-6">
                                  <h3 className="text-2xl font-bold mb-2">{drawing.title}</h3>
                                  <p className="text-gray-600 mb-2">{drawing.description}</p>
                                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                                    {drawing.category}
                                  </span>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Heart className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {drawing.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                      {drawing.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {drawing.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Interested in a Custom Drawing?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Commission a personalized artwork that captures your vision perfectly.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3">
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Drawings;
