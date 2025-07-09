import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
const Contact = () => {
  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">NeuralFlow</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Services</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</Link>
              <Link to="/case-studies" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Case Studies</Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Blog</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Contact</Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Transform Your Business
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Together
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to harness the power of AI? Our experts are here to help you identify opportunities and build solutions that drive real results.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border-0 shadow-lg p-8">
              <CardHeader className="px-0">
                <CardTitle className="text-gray-900 text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3 text-blue-600" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                      <Input id="firstName" className="border-gray-200 focus:border-blue-500" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                      <Input id="lastName" className="border-gray-200 focus:border-blue-500" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input id="email" type="email" className="border-gray-200 focus:border-blue-500" placeholder="john@company.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-gray-700">Company</Label>
                    <Input id="company" className="border-gray-200 focus:border-blue-500" placeholder="Your Company Name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="text-gray-700">Service Interest</Label>
                    <select id="service" className="w-full h-10 px-3 py-2 border border-gray-200 rounded-md focus:border-blue-500">
                      <option value="">Select a service</option>
                      <option value="custom-ai">Custom AI Development</option>
                      <option value="automation">Process Automation</option>
                      <option value="analytics">Data Analytics & Insights</option>
                      <option value="consultation">AI Strategy Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="budget" className="text-gray-700">Project Budget</Label>
                    <select id="budget" className="w-full h-10 px-3 py-2 border border-gray-200 rounded-md focus:border-blue-500">
                      <option value="">Select budget range</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-blue-500 resize-none" placeholder="Tell us about your project and how we can help..." />
                  </div>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-lg p-6">
                <CardHeader className="px-0">
                  <CardTitle className="text-gray-900 text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="text-gray-900 font-medium">Email</div>
                      <div className="text-gray-600">hello@neuralflow.ai</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="text-gray-900 font-medium">Phone</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="text-gray-900 font-medium">Address</div>
                      <div className="text-gray-600">123 AI Innovation Drive<br />San Francisco, CA 94105</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="text-gray-900 font-medium">Business Hours</div>
                      <div className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM PST</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg p-6">
                <CardHeader className="px-0">
                  <CardTitle className="text-gray-900 text-xl">Schedule a Consultation</CardTitle>
                  <CardDescription className="text-gray-600">
                    Book a free 30-minute consultation to discuss your AI needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg p-6">
                <CardHeader className="px-0">
                  <CardTitle className="text-gray-900 text-xl">Quick Response</CardTitle>
                  <CardDescription className="text-gray-600">
                    We typically respond to all inquiries within 24 hours during business days.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our AI services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-lg p-6">
              <h3 className="text-gray-900 font-semibold text-lg mb-3">How long does a typical AI project take?</h3>
              <p className="text-gray-600">Most projects take 8-16 weeks from start to deployment, depending on complexity and scope.</p>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg p-6">
              <h3 className="text-gray-900 font-semibold text-lg mb-3">What's the minimum budget for an AI project?</h3>
              <p className="text-gray-600">Our projects typically start at $15,000, though we offer consultations for businesses of all sizes.</p>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg p-6">
              <h3 className="text-gray-900 font-semibold text-lg mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-600">Yes, we offer comprehensive support and maintenance packages to ensure your AI solutions continue to perform optimally.</p>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg p-6">
              <h3 className="text-gray-900 font-semibold text-lg mb-3">Can you work with our existing systems?</h3>
              <p className="text-gray-600">Absolutely. We specialize in integrating AI solutions with existing business systems and workflows.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;