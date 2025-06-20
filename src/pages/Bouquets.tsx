import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Heart, Flower, Gift, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Bouquets = () => {
  const [likedBouquets, setLikedBouquets] = useState<number[]>([]);
  const bouquets = [
    {
      id: 1,
      title: "Choco Bliss Bouquet",
      description: "A delightful edible bouquet crafted with candies and chocolates, perfect for gifting or celebrations.",
      image: "/lovable-uploads/IMG_6047 (1).jpg",
      occasion: "Gift",
    },
    {
      id: 2,
      title: "Choco Bliss Bouquet",
      description: "Perfect for gifting or celebrations.",
      image: "/lovable-uploads/IMG_6057 (1).jpg",
      occasion: "Gift"
    },
    {
      id: 3,
      title: "Treat Bouquet",
      description: "Emphasizes that it’s an edible, fun, and celebratory craft",
      image: "/lovable-uploads/IMG_6068.png",
      occasion: "Gift"
    },
    {
      id: 4,
      title: "Edible Delight Bouquet",
      description: "A playful bouquet bursting with colorful chocolates, bringing a smile to any sweet tooth.",
      image: "/lovable-uploads/IMG_5929.png",
      occasion: "Gift"
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
          Beautifully handcrafted bouquets designed to brighten any occasion. 
          Each arrangement is thoughtfully curated with fresh flowers and artistic touches.
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
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="hover:scale-110 transition-transform">
                                <Eye className="w-5 h-5" />
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0">
                              <div className="relative">
                                <img 
                                  src={bouquet.image} 
                                  alt={bouquet.title}
                                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                />
                                <div className="p-6">
                                  <h3 className="text-2xl font-bold mb-2">{bouquet.title}</h3>
                                  <p className="text-gray-600 mb-2">{bouquet.description}</p>
                                  <span className="text-sm font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                                    {bouquet.occasion}
                                  </span>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              if (likedBouquets.includes(bouquet.id)) {
                                setLikedBouquets(likedBouquets.filter(id => id !== bouquet.id));
                              } else {
                                setLikedBouquets([...likedBouquets, bouquet.id]);
                              }
                            }}
                          >
                            <Heart 
                              className="w-5 h-5"
                              fill={likedBouquets.includes(bouquet.id) ? "#ff0000" : "none"}
                            />
                          </motion.div>
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
