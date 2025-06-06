
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
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
              <Link to="/blog" className="text-white transition-colors">Blog</Link>
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
            📝 AI Insights & Trends
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Latest in
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Innovation</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest AI trends, insights, and best practices from our team of experts.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8">
                  <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">
                    AI Strategy
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-4">The Future of AI in Business: 2024 Predictions and Trends</h3>
                  <p className="text-white/70 mb-6">
                    Explore the key AI trends that will shape business operations in 2024, from generative AI adoption to ethical AI implementation and the rise of AI-human collaboration.
                  </p>
                  <div className="flex items-center space-x-6 text-white/60 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Dr. Sarah Chen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>March 15, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>8 min read</span>
                    </div>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center p-8">
                  <div className="w-full h-48 bg-white/10 rounded-lg flex items-center justify-center">
                    <Brain className="h-16 w-16 text-purple-400" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Articles */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-blue-400" />
                  </div>
                  <Badge className="w-fit bg-blue-600/20 text-blue-300 border-blue-500/30 mb-2">
                    Machine Learning
                  </Badge>
                  <CardTitle className="text-white text-lg">Building Robust ML Pipelines for Production</CardTitle>
                  <CardDescription className="text-white/70">
                    Best practices for deploying machine learning models in production environments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-4">
                    <span>Marcus Rodriguez</span>
                    <span>March 10, 2024</span>
                    <span>6 min read</span>
                  </div>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-green-400" />
                  </div>
                  <Badge className="w-fit bg-green-600/20 text-green-300 border-green-500/30 mb-2">
                    Automation
                  </Badge>
                  <CardTitle className="text-white text-lg">RPA vs AI: Choosing the Right Automation Strategy</CardTitle>
                  <CardDescription className="text-white/70">
                    Understanding when to use RPA versus AI for different business automation needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-4">
                    <span>Emily Watson</span>
                    <span>March 8, 2024</span>
                    <span>5 min read</span>
                  </div>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-purple-400" />
                  </div>
                  <Badge className="w-fit bg-purple-600/20 text-purple-300 border-purple-500/30 mb-2">
                    Data Science
                  </Badge>
                  <CardTitle className="text-white text-lg">Ethical AI: Building Responsible AI Systems</CardTitle>
                  <CardDescription className="text-white/70">
                    Guidelines for developing AI systems that are fair, transparent, and accountable.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-4">
                    <span>Dr. Sarah Chen</span>
                    <span>March 5, 2024</span>
                    <span>7 min read</span>
                  </div>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-orange-400" />
                  </div>
                  <Badge className="w-fit bg-orange-600/20 text-orange-300 border-orange-500/30 mb-2">
                    NLP
                  </Badge>
                  <CardTitle className="text-white text-lg">Large Language Models in Enterprise Applications</CardTitle>
                  <CardDescription className="text-white/70">
                    How businesses are leveraging LLMs for customer service, content generation, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-4">
                    <span>Marcus Rodriguez</span>
                    <span>March 2, 2024</span>
                    <span>9 min read</span>
                  </div>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-teal-600/20 to-green-600/20 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-teal-400" />
                  </div>
                  <Badge className="w-fit bg-teal-600/20 text-teal-300 border-teal-500/30 mb-2">
                    Computer Vision
                  </Badge>
                  <CardTitle className="text-white text-lg">AI in Manufacturing: Quality Control Revolution</CardTitle>
                  <CardDescription className="text-white/70">
                    How computer vision is transforming quality control processes in manufacturing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-4">
                    <span>Emily Watson</span>
                    <span>February 28, 2024</span>
                    <span>6 min read</span>
                  </div>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-indigo-400" />
                  </div>
                  <Badge className="w-fit bg-indigo-600/20 text-indigo-300 border-indigo-500/30 mb-2">
                    Business Strategy
                  </Badge>
                  <CardTitle className="text-white text-lg">ROI of AI: Measuring Success in AI Projects</CardTitle>
                  <CardDescription className="text-white/70">
                    Key metrics and frameworks for evaluating the return on investment of AI initiatives.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-4">
                    <span>Dr. Sarah Chen</span>
                    <span>February 25, 2024</span>
                    <span>8 min read</span>
                  </div>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with AI Insights</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest AI trends, case studies, and expert insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
