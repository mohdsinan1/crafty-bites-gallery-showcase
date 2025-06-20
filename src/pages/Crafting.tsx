import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Star, Scissors, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Crafting = () => {
  const [likedProjects, setLikedProjects] = useState<number[]>([]);
  const craftingProjects = [
    {
      id: 1,
      title: "Aesthetic Wall Art Display",
      description: "A cozy, handcrafted wall decor arrangement",
      image: "/lovable-uploads/IMG_0232.jpg",
      category: "Room Decor"
    },
    {
      id: 2,
      title: "Embroidery Hoop",
      description: "A handcrafted embroidery hoop featuring a custom name and date",
      image: "/lovable-uploads/IMG_0270.jpg",
      category: "Hand Embroidery"
    },
    {
      id: 3,
      title: "Calligraphy Wall Art",
      description: "A stunning handcrafted piece of Islamic calligraphy",
      image: "/lovable-uploads/IMG_4237.jpg",
      category: "Religious Decor"
    },
    {
      id: 4,
      title: "Desk Decor Arrangement",
      description: "A creative mix of handmade vases, dried flowers, and motivational wall stickers",
      image: "/lovable-uploads/IMG_0239.jpg",
      category: "Handmade Room Decor"
    },
    {
      id: 5,
      title: "Calligraphy Wall Art",
      description: "A stunning handcrafted piece of Islamic calligraphy",
      image: "/lovable-uploads/IMG_4238.jpg",
      category: "Religious Decor"
    },
    {
      id: 6,
      title: "White Handmade Teddy",
      description: "A handmade soft toy teddy",
      image: "/public/lovable-uploads/IMG_8711.jpg",
      category: "Handmade Soft Toys"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
            <img 
                src="/lovable-uploads/5c70765b-c8e6-4f74-bc19-4caf830e0b1b.png" 
                alt="Crafty Bites Logo" 
                className="w-10 h-10 rounded-lg"
              />
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
          Bringing imagination to life with unique handmade creations.<br></br>
          Every craft tells a story of passion and creativity.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craftingProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden rounded-xl">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
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
                                  src={project.image} 
                                  alt={project.title}
                                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                />
                                <div className="p-6">
                                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                  <p className="text-gray-600 mb-2">{project.description}</p>
                                  <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                                    {project.category}
                                  </span>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              if (likedProjects.includes(project.id)) {
                                setLikedProjects(likedProjects.filter(id => id !== project.id));
                              } else {
                                setLikedProjects([...likedProjects, project.id]);
                              }
                            }}
                          >
                            <Heart 
                              className="w-5 h-5"
                              fill={likedProjects.includes(project.id) ? "#ff0000" : "none"}
                            />
                          </motion.div>
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
