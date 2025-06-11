import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Zap, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const CaseStudies = () => {
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
          <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
            📊 Success Stories
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Real Results from
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              AI Implementation
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses across industries transform their operations and achieve remarkable growth through AI.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {/* Case Study 1 */}
            <Card className="bg-white border-0 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8">
                  <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">
                    E-commerce
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">GlobalShop Increases Revenue by 40%</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    We implemented a personalized recommendation engine and dynamic pricing AI that transformed GlobalShop's customer experience and profitability.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-green-600">40%</div>
                      <div className="text-gray-500">Revenue Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">65%</div>
                      <div className="text-gray-500">Click-through Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">25%</div>
                      <div className="text-gray-500">Cart Abandonment Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">8 weeks</div>
                      <div className="text-gray-500">Implementation Time</div>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-24 w-24 text-green-600 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">AI-Powered Recommendations</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Case Study 2 */}
            <Card className="bg-white border-0 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center order-2 md:order-1">
                  <div className="text-center">
                    <Zap className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">Process Automation</p>
                  </div>
                </div>
                <div className="p-8 order-1 md:order-2">
                  <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                    Manufacturing
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">TechManufacturing Reduces Costs by 35%</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Our intelligent process automation and predictive maintenance AI helped TechManufacturing optimize their production line and reduce operational costs.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">35%</div>
                      <div className="text-gray-500">Cost Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">50%</div>
                      <div className="text-gray-500">Downtime Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">99.2%</div>
                      <div className="text-gray-500">Quality Score</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">12 weeks</div>
                      <div className="text-gray-500">ROI Achievement</div>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Case Study 3 */}
            <Card className="bg-white border-0 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8">
                  <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
                    Healthcare
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">MedCenter Improves Patient Outcomes by 60%</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    We developed an AI diagnostic assistant and patient monitoring system that significantly improved diagnosis accuracy and patient care quality.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">60%</div>
                      <div className="text-gray-500">Faster Diagnosis</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">95%</div>
                      <div className="text-gray-500">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">30%</div>
                      <div className="text-gray-500">Readmission Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">16 weeks</div>
                      <div className="text-gray-500">Implementation Time</div>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Target className="h-24 w-24 text-purple-600 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">AI Diagnostics</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white text-lg px-8 py-3 bg-slate-950 hover:bg-slate-800">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default CaseStudies;