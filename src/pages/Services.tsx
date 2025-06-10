
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Bot, Cog, TrendingUp, Zap, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
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
          <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
            <Cog className="h-3 w-3 mr-1" />
            Our AI Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive AI Solutions
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              for Every Need
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From custom AI development to process automation, we provide end-to-end AI solutions that transform your business operations.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid gap-16">
            {/* Custom AI Development */}
            <Card className="bg-white border-0 shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Bot className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom AI Development</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    We build bespoke AI models tailored to your specific business requirements, ensuring maximum efficiency and ROI.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Machine Learning Model Development
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Natural Language Processing Solutions
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Computer Vision Applications
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Deep Learning Neural Networks
                    </li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
                  <div className="text-center">
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">Starting from $25,000</h3>
                    <p className="text-gray-600">Timeline: 8-16 weeks</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Process Automation */}
            <Card className="bg-white border-0 shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg">
                  <div className="text-center">
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">Starting from $15,000</h3>
                    <p className="text-gray-600">Timeline: 4-8 weeks</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Cog className="h-8 w-8 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Process Automation</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Streamline your operations with intelligent automation that reduces costs and increases efficiency.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Workflow Automation
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Document Processing & OCR
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Intelligent Chatbots & Virtual Assistants
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      RPA Implementation
                    </li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Data Analytics */}
            <Card className="bg-white border-0 shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Analytics & Insights</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Transform your data into actionable insights with advanced analytics and AI-powered business intelligence.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Predictive Analytics & Forecasting
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Real-time Business Intelligence Dashboards
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Performance Optimization Analytics
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Customer Behavior Analysis
                    </li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
                  <div className="text-center">
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">Starting from $20,000</h3>
                    <p className="text-gray-600">Timeline: 6-12 weeks</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your AI needs and create a custom solution that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
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
