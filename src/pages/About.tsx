import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Target, Zap, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
const About = () => {
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
            Pioneering the Future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Artificial Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We are a team of AI experts, data scientists, and engineers dedicated to transforming businesses through cutting-edge artificial intelligence solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900 text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-lg">
                To democratize AI technology and make it accessible to businesses of all sizes, enabling them to harness the power of artificial intelligence to drive innovation, efficiency, and growth.
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-gray-900 text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-lg">
                To become the leading AI agency that bridges the gap between cutting-edge research and practical business applications, creating a world where AI enhances human potential.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NeuralFlow by the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 text-lg">AI Models Deployed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600 text-lg">Businesses Transformed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600 text-lg">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 text-lg">AI Experts on Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              World-class experts leading the AI revolution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Chen</h3>
              <p className="text-blue-600 mb-4 font-medium">CEO & AI Research Director</p>
              <p className="text-gray-600 text-sm">Former Google AI researcher with 15+ years in machine learning and neural networks.</p>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marcus Rodriguez</h3>
              <p className="text-blue-600 mb-4 font-medium">CTO & Engineering Lead</p>
              <p className="text-gray-600 text-sm">Ex-Tesla AI engineer specializing in autonomous systems and deep learning architectures.</p>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emily Watson</h3>
              <p className="text-blue-600 mb-4 font-medium">Head of AI Strategy</p>
              <p className="text-gray-600 text-sm">Former McKinsey partner with expertise in AI transformation and business strategy.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every AI solution we deliver, ensuring the highest quality and performance standards.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">We work closely with our clients as partners, ensuring that our AI solutions align perfectly with their business goals.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">We stay at the forefront of AI research and technology, constantly pushing the boundaries of what's possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the hundreds of companies that trust NeuralFlow to transform their business with artificial intelligence.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Start Your AI Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default About;