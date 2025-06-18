
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Star, Mail, Phone, MapPin, Send, Clock, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", project: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Crafty Bites
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
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
            <Mail className="w-16 h-16 text-blue-500 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Contact Me
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your creative vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <Send className="w-6 h-6 mr-2 text-blue-500" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="project" className="text-gray-700">Project Type</Label>
                      <Input
                        id="project"
                        name="project"
                        type="text"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="e.g., Custom drawing, Bouquet, Woodwork"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Me</h3>
                      <p className="text-gray-600 mb-1">hello@craftybites.com</p>
                      <p className="text-sm text-gray-500">I respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Me</h3>
                      <p className="text-gray-600 mb-1">(555) 123-CRAFT</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit My Studio</h3>
                      <p className="text-gray-600 mb-1">123 Creative Street</p>
                      <p className="text-gray-600 mb-1">Artisan District, CA 90210</p>
                      <p className="text-sm text-gray-500">By appointment only</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-100 to-pink-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Response Time</h3>
                      <p className="text-gray-600 mb-2">I aim to respond to all inquiries within 24 hours. For urgent projects, please call directly.</p>
                      <div className="flex items-center text-sm text-orange-600">
                        <Heart className="w-4 h-4 mr-1" />
                        Every project gets my personal attention
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">What's your typical turnaround time?</h3>
                <p className="text-gray-600">Most projects take 1-3 weeks depending on complexity. Rush orders may be accommodated for an additional fee.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Do you offer custom designs?</h3>
                <p className="text-gray-600">Absolutely! I love creating unique pieces tailored to your specific vision and requirements.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">What's your pricing structure?</h3>
                <p className="text-gray-600">Pricing varies by project complexity, materials, and timeline. I provide detailed quotes after our initial consultation.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Do you ship internationally?</h3>
                <p className="text-gray-600">Yes! I ship worldwide with secure packaging. Shipping costs and delivery times vary by location.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
