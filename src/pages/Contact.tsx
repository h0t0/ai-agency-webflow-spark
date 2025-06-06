
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">NeuralFlow AI</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
              <Link to="/case-studies" className="text-white/80 hover:text-white transition-colors">Case Studies</Link>
              <Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" className="text-white transition-colors">Contact</Link>
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            💬 Get in Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Transform Your Business
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Together</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to harness the power of AI? Our experts are here to help you identify opportunities and build solutions that drive real results.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-8">
              <CardHeader className="px-0">
                <CardTitle className="text-white text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3 text-purple-400" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-white/70">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input 
                        id="firstName" 
                        className="bg-white/10 border-white/20 text-white placeholder-white/60"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input 
                        id="lastName" 
                        className="bg-white/10 border-white/20 text-white placeholder-white/60"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder-white/60"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-white">Company</Label>
                    <Input 
                      id="company" 
                      className="bg-white/10 border-white/20 text-white placeholder-white/60"
                      placeholder="Your Company Name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="text-white">Service Interest</Label>
                    <select 
                      id="service"
                      className="w-full h-10 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-ai">Custom AI Development</option>
                      <option value="automation">Process Automation</option>
                      <option value="analytics">Data Analytics & Insights</option>
                      <option value="consultation">AI Strategy Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="budget" className="text-white">Project Budget</Label>
                    <select 
                      id="budget"
                      className="w-full h-10 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>
                  
                  <Button className="bg-purple-600 hover:bg-purple-700 w-full text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6">
                <CardHeader className="px-0">
                  <CardTitle className="text-white text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-white/70">hello@neuralflow.ai</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-white/70">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">Address</div>
                      <div className="text-white/70">123 AI Innovation Drive<br />San Francisco, CA 94105</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">Business Hours</div>
                      <div className="text-white/70">Mon - Fri: 9:00 AM - 6:00 PM PST</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6">
                <CardHeader className="px-0">
                  <CardTitle className="text-white text-xl">Schedule a Consultation</CardTitle>
                  <CardDescription className="text-white/70">
                    Book a free 30-minute consultation to discuss your AI needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6">
                <CardHeader className="px-0">
                  <CardTitle className="text-white text-xl">Quick Response</CardTitle>
                  <CardDescription className="text-white/70">
                    We typically respond to all inquiries within 24 hours during business days.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Quick answers to common questions about our AI services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6">
              <h3 className="text-white font-semibold text-lg mb-3">How long does a typical AI project take?</h3>
              <p className="text-white/70">Most projects take 8-16 weeks from start to deployment, depending on complexity and scope.</p>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6">
              <h3 className="text-white font-semibold text-lg mb-3">What's the minimum budget for an AI project?</h3>
              <p className="text-white/70">Our projects typically start at $15,000, though we offer consultations for businesses of all sizes.</p>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6">
              <h3 className="text-white font-semibold text-lg mb-3">Do you provide ongoing support?</h3>
              <p className="text-white/70">Yes, we offer comprehensive support and maintenance packages to ensure your AI solutions continue to perform optimally.</p>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6">
              <h3 className="text-white font-semibold text-lg mb-3">Can you work with our existing systems?</h3>
              <p className="text-white/70">Absolutely. We specialize in integrating AI solutions with existing business systems and workflows.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
