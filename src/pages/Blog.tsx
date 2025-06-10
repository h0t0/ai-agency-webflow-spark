import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
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
            📝 AI Insights & Trends
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Latest in
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              AI Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest AI trends, insights, and best practices from our team of experts.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="bg-white border-0 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8">
                  <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                    AI Strategy
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future of AI in Business: 2024 Predictions and Trends</h3>
                  <p className="text-gray-600 mb-6">
                    Explore the key AI trends that will shape business operations in 2024, from generative AI adoption to ethical AI implementation and the rise of AI-human collaboration.
                  </p>
                  <div className="flex items-center space-x-6 text-gray-500 mb-6">
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
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
                  <div className="w-full h-48 bg-white/50 rounded-lg flex items-center justify-center">
                    <Brain className="h-16 w-16 text-blue-600" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Articles */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <Badge className="w-fit bg-blue-50 text-blue-700 border-blue-200 mb-2">
                    Machine Learning
                  </Badge>
                  <CardTitle className="text-gray-900 text-lg">Building Robust ML Pipelines for Production</CardTitle>
                  <CardDescription className="text-gray-600">
                    Best practices for deploying machine learning models in production environments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                    <span>Marcus Rodriguez</span>
                    <span>March 10, 2024</span>
                    <span>6 min read</span>
                  </div>
                  <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-green-600" />
                  </div>
                  <Badge className="w-fit bg-green-50 text-green-700 border-green-200 mb-2">
                    Automation
                  </Badge>
                  <CardTitle className="text-gray-900 text-lg">RPA vs AI: Choosing the Right Automation Strategy</CardTitle>
                  <CardDescription className="text-gray-600">
                    Understanding when to use RPA versus AI for different business automation needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                    <span>Emily Watson</span>
                    <span>March 8, 2024</span>
                    <span>5 min read</span>
                  </div>
                  <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-purple-600" />
                  </div>
                  <Badge className="w-fit bg-purple-50 text-purple-700 border-purple-200 mb-2">
                    Data Science
                  </Badge>
                  <CardTitle className="text-gray-900 text-lg">Ethical AI: Building Responsible AI Systems</CardTitle>
                  <CardDescription className="text-gray-600">
                    Guidelines for developing AI systems that are fair, transparent, and accountable.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                    <span>Dr. Sarah Chen</span>
                    <span>March 5, 2024</span>
                    <span>7 min read</span>
                  </div>
                  <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-orange-600" />
                  </div>
                  <Badge className="w-fit bg-orange-50 text-orange-700 border-orange-200 mb-2">
                    NLP
                  </Badge>
                  <CardTitle className="text-gray-900 text-lg">Large Language Models in Enterprise Applications</CardTitle>
                  <CardDescription className="text-gray-600">
                    How businesses are leveraging LLMs for customer service, content generation, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                    <span>Marcus Rodriguez</span>
                    <span>March 2, 2024</span>
                    <span>9 min read</span>
                  </div>
                  <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-teal-50 to-green-50 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-teal-600" />
                  </div>
                  <Badge className="w-fit bg-teal-50 text-teal-700 border-teal-200 mb-2">
                    Computer Vision
                  </Badge>
                  <CardTitle className="text-gray-900 text-lg">AI in Manufacturing: Quality Control Revolution</CardTitle>
                  <CardDescription className="text-gray-600">
                    How computer vision is transforming quality control processes in manufacturing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                    <span>Emily Watson</span>
                    <span>February 28, 2024</span>
                    <span>6 min read</span>
                  </div>
                  <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-indigo-600" />
                  </div>
                  <Badge className="w-fit bg-indigo-50 text-indigo-700 border-indigo-200 mb-2">
                    Business Strategy
                  </Badge>
                  <CardTitle className="text-gray-900 text-lg">ROI of AI: Measuring Success in AI Projects</CardTitle>
                  <CardDescription className="text-gray-600">
                    Key metrics and frameworks for evaluating the return on investment of AI initiatives.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                    <span>Dr. Sarah Chen</span>
                    <span>February 25, 2024</span>
                    <span>8 min read</span>
                  </div>
                  <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Updated with AI Insights</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest AI trends, case studies, and expert insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-md border border-gray-200 focus:border-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
