
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Zap, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
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
              <Link to="/case-studies" className="text-white transition-colors">Case Studies</Link>
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
            📊 Success Stories
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Real Results from
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Implementation</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses across industries transform their operations and achieve remarkable growth through AI.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {/* Case Study 1 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8">
                  <Badge className="mb-4 bg-green-600/20 text-green-300 border-green-500/30">
                    E-commerce
                  </Badge>
                  <h2 className="text-3xl font-bold text-white mb-4">GlobalShop Increases Revenue by 40%</h2>
                  <p className="text-white/70 mb-6 text-lg">
                    We implemented a personalized recommendation engine and dynamic pricing AI that transformed GlobalShop's customer experience and profitability.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-green-400">40%</div>
                      <div className="text-white/60">Revenue Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">65%</div>
                      <div className="text-white/60">Click-through Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">25%</div>
                      <div className="text-white/60">Cart Abandonment Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">8 weeks</div>
                      <div className="text-white/60">Implementation Time</div>
                    </div>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-24 w-24 text-green-400 mx-auto mb-4" />
                    <p className="text-white/80 text-lg">AI-Powered Recommendations</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Case Study 2 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 flex items-center justify-center order-2 md:order-1">
                  <div className="text-center">
                    <Zap className="h-24 w-24 text-blue-400 mx-auto mb-4" />
                    <p className="text-white/80 text-lg">Process Automation</p>
                  </div>
                </div>
                <div className="p-8 order-1 md:order-2">
                  <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/30">
                    Manufacturing
                  </Badge>
                  <h2 className="text-3xl font-bold text-white mb-4">TechManufacturing Reduces Costs by 35%</h2>
                  <p className="text-white/70 mb-6 text-lg">
                    Our intelligent process automation and predictive maintenance AI helped TechManufacturing optimize their production line and reduce operational costs.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-blue-400">35%</div>
                      <div className="text-white/60">Cost Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">50%</div>
                      <div className="text-white/60">Downtime Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">99.2%</div>
                      <div className="text-white/60">Quality Score</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">12 weeks</div>
                      <div className="text-white/60">ROI Achievement</div>
                    </div>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Case Study 3 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8">
                  <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">
                    Healthcare
                  </Badge>
                  <h2 className="text-3xl font-bold text-white mb-4">MedCenter Improves Patient Outcomes by 60%</h2>
                  <p className="text-white/70 mb-6 text-lg">
                    We developed an AI diagnostic assistant and patient monitoring system that significantly improved diagnosis accuracy and patient care quality.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-purple-400">60%</div>
                      <div className="text-white/60">Faster Diagnosis</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">95%</div>
                      <div className="text-white/60">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">30%</div>
                      <div className="text-white/60">Readmission Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">16 weeks</div>
                      <div className="text-white/60">Implementation Time</div>
                    </div>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Target className="h-24 w-24 text-purple-400 mx-auto mb-4" />
                    <p className="text-white/80 text-lg">AI Diagnostics</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
