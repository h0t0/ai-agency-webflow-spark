
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Target, Zap, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
              <Link to="/about" className="text-white transition-colors">About</Link>
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
            🤖 About NeuralFlow AI
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pioneering the Future of
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Artificial Intelligence</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            We are a team of AI experts, data scientists, and engineers dedicated to transforming businesses through cutting-edge artificial intelligence solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-8">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-white/70 text-lg">
                To democratize AI technology and make it accessible to businesses of all sizes, enabling them to harness the power of artificial intelligence to drive innovation, efficiency, and growth.
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-8">
              <CardHeader>
                <Globe className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-white/70 text-lg">
                To become the leading AI agency that bridges the gap between cutting-edge research and practical business applications, creating a world where AI enhances human potential.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">NeuralFlow by the Numbers</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-white/70 text-lg">AI Models Deployed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">150+</div>
              <div className="text-white/70 text-lg">Businesses Transformed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-white/70 text-lg">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-white/70 text-lg">AI Experts on Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              World-class experts leading the AI revolution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-white mb-2">Dr. Sarah Chen</h3>
              <p className="text-purple-300 mb-4">CEO & AI Research Director</p>
              <p className="text-white/70 text-sm">Former Google AI researcher with 15+ years in machine learning and neural networks.</p>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-white mb-2">Marcus Rodriguez</h3>
              <p className="text-purple-300 mb-4">CTO & Engineering Lead</p>
              <p className="text-white/70 text-sm">Ex-Tesla AI engineer specializing in autonomous systems and deep learning architectures.</p>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-white mb-2">Emily Watson</h3>
              <p className="text-purple-300 mb-4">Head of AI Strategy</p>
              <p className="text-white/70 text-sm">Former McKinsey partner with expertise in AI transformation and business strategy.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-white/70">We strive for perfection in every AI solution we deliver, ensuring the highest quality and performance standards.</p>
            </div>

            <div className="text-center">
              <Users className="h-16 w-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-white/70">We work closely with our clients as partners, ensuring that our AI solutions align perfectly with their business goals.</p>
            </div>

            <div className="text-center">
              <Zap className="h-16 w-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-white/70">We stay at the forefront of AI research and technology, constantly pushing the boundaries of what's possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join the hundreds of companies that trust NeuralFlow AI to transform their business with artificial intelligence.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
              Start Your AI Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
