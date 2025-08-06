import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Star, ClipboardIcon, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Hamber = () => {
  const [likedWorks, setLikedWorks] = useState<number[]>([]);
  const hamberWorks = [
    {
      id: 2,
      title: "Save the Date Card",
      description: "Creative and beautifully designed save the date card",
      image: "/lovable-uploads/WhatsApp Image 2025-06-18 at 15.12.17_032dcd9d.jpg",
      material: "Glossy Paper"
    },
    {
      id: 3,
      title: "Wedding Invitation Card",
      description: "Heartfelt thank you card for your special day",
      image: "/lovable-uploads/IMG_8056[1].jpg",
      material: "Pearlescent Paper"
    },
    {
      id: 4,
      title: "Save the Date Card",
      description: "Elegant and personalized wedding invitation card",
      image: "/lovable-uploads/IMG_2635.jpg",
      material: "Pearlescent Paper"
    },
    {
      id: 5,
      title: "Wedding Invitation Card",
      description: "Heartfelt thank you card for your special day",
      image: "/lovable-uploads/craft5.png",
      material: "Pearlescent Paper"
    },
    {
      id: 6,
      title: "Event Invitation",
      description: "A charming handcrafted invitation card",
      image: "/lovable-uploads/craft4.png",
      material: "Event Cards"
    },
    {
      id: 7,
      title: "Wedding Anniversary Card",
      description: "Heartfelt thank you card for your special day",
      image: "/lovable-uploads/craft1.png",
      material: "Greeting Cards"
    },
    {
      id: 8,
      title: "Wedding Invitation Card",
      description: "Heartfelt thank you card for your special day",
      image: "/lovable-uploads/craft2.png",
      material: "Pearlescent Paper"
    },
    {
      id: 9,
      title: "Get-Together Invitation",
      description: "A charming handmade invitation card for a memorable batch reunion",
      image: "/lovable-uploads/craft3.png",
      material: "Event Cards”"
    },
    

  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
            <img 
                src="/lovable-uploads/5c70765b-c8e6-4f74-bc19-4caf830e0b1b.png" 
                alt="Crafty Bites Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Crafty Bites
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-amber-300 text-amber-600 hover:bg-amber-50">
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
            <ClipboardIcon className="w-16 h-16 text-amber-500 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Wedding Crafts
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Handcrafted card designed to capture the elegance of your special day. Perfect for
            with attention to detail and designed to last for generations.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hamberWorks.map((work) => (
              <Card key={work.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden rounded-xl">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={work.image} 
                      alt={work.title}
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
                                  src={work.image} 
                                  alt={work.title}
                                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                />
                                <div className="p-6">
                                  <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                                  <p className="text-gray-600 mb-2">{work.description}</p>
                                  <span className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                                    {work.material}
                                  </span>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              if (likedWorks.includes(work.id)) {
                                setLikedWorks(likedWorks.filter(id => id !== work.id));
                              } else {
                                setLikedWorks([...likedWorks, work.id]);
                              }
                            }}
                          >
                            <Heart 
                              className="w-5 h-5"
                              fill={likedWorks.includes(work.id) ? "#ff0000" : "none"}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                        {work.material}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-amber-600 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Need Custom Wedding Craft?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let's build something amazing together. Custom furniture and woodworking projects welcome.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3">
            Start a Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hamber;
