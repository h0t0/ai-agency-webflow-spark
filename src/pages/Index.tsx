
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Target, Zap, Award } from "lucide-react";
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
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            🚀 Unlock the Future
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Solutions for
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Business Transformation</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to optimize your operations, drive growth, and stay ahead of the competition.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Cutting-edge artificial intelligence services tailored to transform your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 hover:bg-white/15 transition-all">
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white text-xl">Machine Learning</CardTitle>
                <CardDescription className="text-white/70">
                  Custom ML models that learn from your data to make intelligent predictions and automate complex decisions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Read More</Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 hover:bg-white/15 transition-all">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white text-xl">Process Automation</CardTitle>
                <CardDescription className="text-white/70">
                  Streamline operations with intelligent automation that reduces costs and eliminates human error.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Read More</Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 hover:bg-white/15 transition-all">
              <CardHeader>
                <Target className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white text-xl">Predictive Analytics</CardTitle>
                <CardDescription className="text-white/70">
                  Harness the power of data to forecast trends, optimize performance, and make data-driven decisions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Read More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-center">
              <Award className="h-48 w-48 text-purple-400" />
            </div>
            <div>
              <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
                🏆 About NeuralFlow AI
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">
                Pioneering the Future of Artificial Intelligence
              </h2>
              <p className="text-xl text-white/70 mb-8">
                We are a team of AI experts, data scientists, and engineers dedicated to transforming businesses through cutting-edge artificial intelligence solutions.
              </p>
              <Link to="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              See how we've helped businesses transform with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-8">
              <CardHeader>
                <Badge className="mb-4 bg-green-600/20 text-green-300 border-green-500/30">E-commerce</Badge>
                <CardTitle className="text-white text-2xl mb-4">40% Revenue Increase</CardTitle>
                <CardDescription className="text-white/70 text-lg">
                  Our recommendation engine helped an online retailer increase sales by personalizing the shopping experience for each customer.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Case Studies</Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-8">
              <CardHeader>
                <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/30">Manufacturing</Badge>
                <CardTitle className="text-white text-2xl mb-4">50% Cost Reduction</CardTitle>
                <CardDescription className="text-white/70 text-lg">
                  Predictive maintenance AI reduced downtime and maintenance costs for a major manufacturing company.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Case Studies</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our AI solutions can drive innovation, efficiency, and growth for your organization.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
