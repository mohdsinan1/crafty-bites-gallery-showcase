import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Flower, Gift } from "lucide-react";

const Bouquets = () => {
  const bouquets = [
    {
      id: 1,
      title: "Spring Awakening",
      description: "Fresh tulips and daffodils in pastel harmony",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      occasion: "Spring"
    },
    {
      id: 2,
      title: "Romantic Rose Garden",
      description: "Classic red roses with baby's breath",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop",
      occasion: "Romance"
    },
    {
      id: 3,
      title: "Wildflower Meadow",
      description: "Natural arrangement with local wildflowers",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
      occasion: "Casual"
    },
    {
      id: 4,
      title: "Elegant White",
      description: "Sophisticated white lilies and orchids",
      image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=300&fit=crop",
      occasion: "Formal"
    },
    {
      id: 5,
      title: "Sunset Celebration",
      description: "Warm oranges and yellows for joyful moments",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      occasion: "Celebration"
    },
    {
      id: 6,
      title: "Lavender Dreams",
      description: "Calming lavender and purple blooms",
      image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400&h=300&fit=crop",
      occasion: "Relaxation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/5c70765b-c8e6-4f74-bc19-4caf830e0b1b.png" 
                alt="Crafty Bites Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Crafty Bites
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
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
            <Heart className="w-16 h-16 text-pink-500 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Bouquets
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beautiful floral arrangements crafted with love for every special occasion. 
            From romantic gestures to celebratory moments, each bouquet tells a story.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bouquets.map((bouquet) => (
              <Card key={bouquet.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden rounded-xl">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={bouquet.image} 
                      alt={bouquet.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <div className="flex items-center space-x-4">
                          <Flower className="w-5 h-5" />
                          <Gift className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                        {bouquet.occasion}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors">
                      {bouquet.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {bouquet.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Order a Custom Bouquet
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let me create the perfect floral arrangement for your special moment.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3">
              Place an Order
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Bouquets;
