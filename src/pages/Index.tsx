import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, TrendingUp, Zap, Users, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useActiveSections } from "@/hooks/useActiveSections";

const Index = () => {
  const { activeSections } = useActiveSections();
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
              {activeSections.services && (
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Services</Link>
              )}
              {activeSections.about && (
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</Link>
              )}
              {activeSections['case-studies'] && (
                <Link to="/case-studies" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Case Studies</Link>
              )}
              {activeSections.blog && (
                <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Blog</Link>
              )}
              {activeSections.contact && (
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Contact</Link>
              )}
              <Link to="/admin/login">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Admin</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSections.hero && <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              AI Solutions That
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Drive Results
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence. We build custom AI solutions that automate processes, boost efficiency, and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                View Case Studies
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              
              
            </div>
          </div>
        </div>
      </section>}

      {/* Services Section */}
      {activeSections.services && <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">Custom AI Development</CardTitle>
                <CardDescription className="text-gray-600">
                  Bespoke machine learning models designed specifically for your business challenges and objectives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Machine Learning Models
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Natural Language Processing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Computer Vision
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">Process Automation</CardTitle>
                <CardDescription className="text-gray-600">
                  Intelligent automation solutions that streamline operations and reduce manual work.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Workflow Automation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Document Processing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Intelligent Chatbots
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">Data Analytics</CardTitle>
                <CardDescription className="text-gray-600">
                  Advanced analytics and insights to drive data-driven decision making.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Predictive Analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business Intelligence
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance Optimization
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>}

      {/* Stats Section */}
      {activeSections.about && <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">AI Models Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>}

      {/* CTA Section */}
      {activeSections.contact && <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust us to deliver cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {activeSections.contact && (
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Get Free Consultation
                </Button>
              </Link>
            )}
            {activeSections.services && (
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white px-8 py-4 text-lg bg-slate-50 text-slate-950">
                  View All Services
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>}

      {/* Footer */}
      {activeSections.footer && (
        <footer className="bg-gray-900 text-white py-12 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">NeuralFlow</span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  Transforming businesses through innovative AI solutions. 
                  We're your trusted partner in the journey towards intelligent automation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {activeSections.about && (
                    <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  )}
                  {activeSections.services && (
                    <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                  )}
                  {activeSections['case-studies'] && (
                    <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                  )}
                  {activeSections.contact && (
                    <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>info@neuralflow.ai</li>
                  <li>+1 (555) 123-4567</li>
                  <li>San Francisco, CA</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 NeuralFlow. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>;
};
export default Index;