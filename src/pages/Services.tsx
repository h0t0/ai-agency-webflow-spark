
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Bot, Cog, TrendingUp, Zap, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
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
              <Link to="/services" className="text-white transition-colors">Services</Link>
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
            🚀 Our AI Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Comprehensive AI Solutions
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> for Every Need</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            From custom AI development to process automation, we provide end-to-end AI solutions that transform your business operations.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {/* Custom AI Development */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Bot className="h-16 w-16 text-purple-400 mb-6" />
                  <h2 className="text-3xl font-bold text-white mb-4">Custom AI Development</h2>
                  <p className="text-white/70 mb-6 text-lg">
                    We build bespoke AI models tailored to your specific business requirements, ensuring maximum efficiency and ROI.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Machine Learning Model Development
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Natural Language Processing Solutions
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Computer Vision Applications
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Deep Learning Neural Networks
                    </li>
                  </ul>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-3xl opacity-20"></div>
                  <div className="relative bg-slate-800/50 p-6 rounded-lg border border-white/10">
                    <h3 className="text-white font-semibold mb-4">Starting from $25,000</h3>
                    <p className="text-white/60">Timeline: 8-16 weeks</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Process Automation */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-3xl opacity-20"></div>
                  <div className="relative bg-slate-800/50 p-6 rounded-lg border border-white/10">
                    <h3 className="text-white font-semibold mb-4">Starting from $15,000</h3>
                    <p className="text-white/60">Timeline: 4-8 weeks</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Cog className="h-16 w-16 text-purple-400 mb-6" />
                  <h2 className="text-3xl font-bold text-white mb-4">Process Automation</h2>
                  <p className="text-white/70 mb-6 text-lg">
                    Streamline your operations with intelligent automation that reduces costs and increases efficiency.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Workflow Automation
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Document Processing & OCR
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Intelligent Chatbots & Virtual Assistants
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      RPA Implementation
                    </li>
                  </ul>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Data Analytics */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <TrendingUp className="h-16 w-16 text-purple-400 mb-6" />
                  <h2 className="text-3xl font-bold text-white mb-4">Data Analytics & Insights</h2>
                  <p className="text-white/70 mb-6 text-lg">
                    Transform your data into actionable insights with advanced analytics and AI-powered business intelligence.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Predictive Analytics & Forecasting
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Real-time Business Intelligence Dashboards
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Performance Optimization Analytics
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Customer Behavior Analysis
                    </li>
                  </ul>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur-3xl opacity-20"></div>
                  <div className="relative bg-slate-800/50 p-6 rounded-lg border border-white/10">
                    <h3 className="text-white font-semibold mb-4">Starting from $20,000</h3>
                    <p className="text-white/60">Timeline: 6-12 weeks</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Let's discuss your AI needs and create a custom solution that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
