
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin,
  Bot,
  Cog,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            🚀 Leading AI Innovation
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Power</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            We build cutting-edge AI solutions that automate processes, enhance decision-making, 
            and unlock unprecedented growth for forward-thinking businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your industry and business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Bot className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Custom AI Development</CardTitle>
                <CardDescription className="text-white/70">
                  Bespoke AI models and solutions built specifically for your business requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white/60">
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Machine Learning Models</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Natural Language Processing</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Computer Vision</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Cog className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Process Automation</CardTitle>
                <CardDescription className="text-white/70">
                  Streamline operations and reduce costs with intelligent automation solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white/60">
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Workflow Automation</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Document Processing</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Intelligent Chatbots</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Data Analytics & Insights</CardTitle>
                <CardDescription className="text-white/70">
                  Turn your data into actionable insights with advanced analytics and AI
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white/60">
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Predictive Analytics</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Business Intelligence</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Performance Optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-white/70">AI Models Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-white/70">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">150+</div>
              <div className="text-white/70">Businesses Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white/70">AI-Powered Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose NeuralFlow AI?</h2>
              <p className="text-white/70 mb-6 text-lg">
                We're not just another AI company. We're your strategic partner in digital transformation, 
                combining deep technical expertise with industry knowledge to deliver solutions that drive real results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Rapid Implementation</h3>
                    <p className="text-white/60">Fast deployment with minimal disruption to your operations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Industry Expertise</h3>
                    <p className="text-white/60">Deep knowledge across finance, healthcare, retail, and manufacturing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Dedicated Support</h3>
                    <p className="text-white/60">Ongoing support and optimization from our team of experts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-3xl opacity-30"></div>
              <Card className="relative bg-white/10 border-white/20 backdrop-blur-sm p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-white/70 mb-6">
                  Join the AI revolution and transform your business today. Our experts are ready to discuss your unique challenges and opportunities.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                  Schedule Free Consultation
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to transform your business with AI? Let's discuss your project and explore the possibilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center p-6">
              <Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-white/70">hello@neuralflow.ai</p>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center p-6">
              <Phone className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-white/70">+1 (555) 123-4567</p>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center p-6">
              <MapPin className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-white/70">San Francisco, CA</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold text-white">NeuralFlow AI</span>
            </div>
            <div className="text-white/60">
              © 2024 NeuralFlow AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
