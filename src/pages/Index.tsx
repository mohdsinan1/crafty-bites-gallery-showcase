
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Heart, Hammer, Scissors, ArrowRight } from "lucide-react";

const Index = () => {
  const categories = [
    {
      title: "Drawings",
      description: "Artistic sketches and illustrations that bring imagination to life",
      icon: Palette,
      color: "bg-gradient-to-br from-purple-400 to-pink-400",
      path: "/drawings"
    },
    {
      title: "Bouquets",
      description: "Beautiful floral arrangements for every special occasion",
      icon: Heart,
      color: "bg-gradient-to-br from-pink-400 to-rose-400",
      path: "/bouquets"
    },
    {
      title: "Hamber",
      description: "Unique handcrafted pieces with attention to detail",
      icon: Hammer,
      color: "bg-gradient-to-br from-amber-400 to-orange-400",
      path: "/hamber"
    },
    {
      title: "Crafting",
      description: "Creative DIY projects and handmade treasures",
      icon: Scissors,
      color: "bg-gradient-to-br from-emerald-400 to-teal-400",
      path: "/crafting"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/5c70765b-c8e6-4f74-bc19-4caf830e0b1b.png" 
                alt="Crafty Bites Logo" 
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Crafty Bites
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
              <Link to="/drawings" className="text-gray-700 hover:text-orange-600 transition-colors">Drawings</Link>
              <Link to="/bouquets" className="text-gray-700 hover:text-orange-600 transition-colors">Bouquets</Link>
              <Link to="/hamber" className="text-gray-700 hover:text-orange-600 transition-colors">Hamber</Link>
              <Link to="/crafting" className="text-gray-700 hover:text-orange-600 transition-colors">Crafting</Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</Link>
            </div>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/5c70765b-c8e6-4f74-bc19-4caf830e0b1b.png" 
                alt="Crafty Bites Logo" 
                className="w-32 h-32 drop-shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Crafty Bites
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Where creativity meets craftsmanship. Discover a world of handmade treasures, 
              artistic drawings, beautiful bouquets, and unique creations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3">
                Explore My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-3">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              My Creative Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my diverse collection of handcrafted items, each piece telling its own unique story
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Link key={category.title} to={category.path}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`${category.color} h-48 flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <IconComponent className="w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's bring your creative vision to life. Get in touch to discuss custom pieces or commissions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-12 py-4 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/5c70765b-c8e6-4f74-bc19-4caf830e0b1b.png" 
              alt="Crafty Bites Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold">Crafty Bites</span>
          </div>
          <p className="text-gray-400 mb-4">Creating beautiful, handcrafted pieces with love and passion</p>
          <p className="text-gray-500 text-sm">© 2024 Crafty Bites. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
