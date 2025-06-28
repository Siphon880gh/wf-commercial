import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Phone, Mail, Star, Trophy, Users, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(37,99,235,0.1),transparent)]"></div>
        
        <div className="container px-4 mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-healthcare-teal text-white font-semibold px-3 py-1">
                    Available for Technical Leadership
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  From Code to Leadership: <span className="text-brand-primary bg-gradient-to-r from-brand-primary to-healthcare-teal bg-clip-text text-transparent">Transform Your Tech Vision Into Reality</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  5-star rated full-stack developer with proven management training, ready to lead your technical team or solve your complex development challenges
                </p>
              </div>

              {/* Enhanced Credibility Points */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-success-green/10 border border-success-green/20 hover-lift">
                  <CheckCircle className="h-5 w-5 text-success-green" />
                  <span className="font-medium">MERN+ certified with top academic marks</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-education-purple/10 border border-education-purple/20 hover-lift">
                  <Trophy className="h-5 w-5 text-education-purple" />
                  <span className="font-medium">1,482+ GitHub contributions this year</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-warning-orange/10 border border-warning-orange/20 hover-lift">
                  <Star className="h-5 w-5 text-warning-orange" />
                  <span className="font-medium">Perfect 5/5 student rating (outperforms team average)</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-healthcare-teal/10 border border-healthcare-teal/20 hover-lift">
                  <Users className="h-5 w-5 text-healthcare-teal" />
                  <span className="font-medium">Enterprise clients: Mixotype, ExRx, People&apos;s Care</span>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 h-12 bg-warning-orange hover:bg-warning-orange/90 text-white shadow-professional hover:shadow-professional-lg font-semibold group">
                  <Link href="#consultation" className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Schedule Free Strategy Call</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 h-12 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold">
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>

              {/* GitHub Activity Badge */}
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="w-fit text-sm bg-education-purple/10 text-education-purple border border-education-purple/20">
                  <Zap className="h-3 w-3 mr-1" />
                  1,482 GitHub contributions this year
                </Badge>
                <div className="text-sm text-muted-foreground">
                  Actively coding and contributing
                </div>
              </div>
            </div>

            {/* Enhanced Visual Element */}
            <div className="relative animate-slide-up">
              <div className="aspect-square bg-gradient-to-br from-brand-primary/20 via-healthcare-teal/20 to-education-purple/20 rounded-2xl flex items-center justify-center shadow-professional-xl backdrop-blur-sm border border-white/20">
                <div className="text-center space-y-6 p-8">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-brand-primary">Technical Authority</div>
                    <div className="text-lg text-healthcare-teal font-semibold">Ready for Leadership</div>
                    <div className="flex justify-center space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-warning-orange text-warning-orange" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Credibility Section */}
      <section className="py-16 border-b bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-healthcare-teal uppercase tracking-wider">
                Trusted by Enterprise Clients
              </h3>
              <div className="flex justify-center items-center space-x-8 text-2xl font-bold text-foreground/80">
                <span className="hover:text-brand-primary transition-colors">Mixotype</span>
                <span className="text-muted-foreground">•</span>
                <span className="hover:text-brand-primary transition-colors">ExRx.net</span>
                <span className="text-muted-foreground">•</span>
                <span className="hover:text-brand-primary transition-colors">People&apos;s Care</span>
              </div>
            </div>

            <Card className="max-w-4xl mx-auto shadow-professional-lg border-2 border-healthcare-teal/20 hover-lift">
              <CardContent className="p-8 bg-gradient-to-r from-healthcare-teal/5 to-success-green/5">
                <blockquote className="text-xl italic text-center text-foreground leading-relaxed">
                  &ldquo;Weng is a &lsquo;Master&rsquo; coder. It took him about 5 minutes to fix a problem that was taking days to figure out.&rdquo;
                </blockquote>
                <div className="mt-6 text-center">
                  <div className="font-bold text-lg text-brand-primary">Jeff Cohen</div>
                  <div className="text-sm text-healthcare-teal font-medium">eLearning Coordinator, Pennsylvania Institute of Technology</div>
                  <div className="flex justify-center space-x-1 mt-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-warning-orange text-warning-orange" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Lead Your Next Project</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From business automation to technical leadership - comprehensive services that drive real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-lift group border-2 border-transparent hover:border-warning-orange/20 hover:shadow-professional-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4 group-hover:animate-bounce-subtle">🚀</div>
                <CardTitle className="text-warning-orange group-hover:text-warning-orange/80">Business Automation</CardTitle>
                <CardDescription className="leading-relaxed">
                  Streamline operations with n8n workflows, eliminate manual work, boost efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for: SMBs, agencies, marketing teams
                </p>
                <div className="bg-success-green/10 p-3 rounded-lg border border-success-green/20">
                  <p className="text-sm font-semibold text-success-green">
                    Save 10-20 hours/week on manual tasks
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift group border-2 border-transparent hover:border-brand-primary/20 hover:shadow-professional-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4 group-hover:animate-bounce-subtle">👨‍💼</div>
                <CardTitle className="text-brand-primary group-hover:text-brand-primary/80">Technical Leadership</CardTitle>
                <CardDescription className="leading-relaxed">
                  Team management, architecture decisions, project delivery with proven results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for: Growing startups, enterprise teams
                </p>
                <div className="bg-brand-primary/10 p-3 rounded-lg border border-brand-primary/20">
                  <p className="text-sm font-semibold text-brand-primary">
                    Immediate technical direction and team guidance
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift group border-2 border-transparent hover:border-healthcare-teal/20 hover:shadow-professional-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4 group-hover:animate-bounce-subtle">💻</div>
                <CardTitle className="text-healthcare-teal group-hover:text-healthcare-teal/80">Full-Stack Development</CardTitle>
                <CardDescription className="leading-relaxed">
                  MERN stack, APIs, cloud solutions, legacy modernization with enterprise quality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for: Product companies, agencies
                </p>
                <div className="bg-healthcare-teal/10 p-3 rounded-lg border border-healthcare-teal/20">
                  <p className="text-sm font-semibold text-healthcare-teal">
                    Modern, scalable applications that perform
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift group border-2 border-transparent hover:border-education-purple/20 hover:shadow-professional-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4 group-hover:animate-bounce-subtle">🎓</div>
                <CardTitle className="text-education-purple group-hover:text-education-purple/80">Technical Training</CardTitle>
                <CardDescription className="leading-relaxed">
                  5-star rated educator helping teams master React, Node.js, and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for: Development teams, bootcamps
                </p>
                <div className="bg-education-purple/10 p-3 rounded-lg border border-education-purple/20">
                  <p className="text-sm font-semibold text-education-purple">
                    Accelerated learning and skill development
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 h-12 font-semibold shadow-professional hover:shadow-professional-lg">
              <Link href="/services">View All Services & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-secondary/20">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Recent Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              See how technical expertise drives real business outcomes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover-lift shadow-professional hover:shadow-professional-xl border-2 border-success-green/20">
              <CardHeader>
                <Badge className="w-fit bg-success-green text-white font-semibold">Co-founder / Lead Developer</Badge>
                <CardTitle className="text-2xl text-brand-primary">VideoListings.AI</CardTitle>
                <CardDescription className="text-lg">
                  Built complete real estate video platform from concept to launch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Real estate video generator for listings and social media serving thousands of users
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20">NodeJS</Badge>
                    <Badge variant="secondary" className="bg-education-purple/10 text-education-purple border border-education-purple/20">Python</Badge>
                    <Badge variant="secondary" className="bg-healthcare-teal/10 text-healthcare-teal border border-healthcare-teal/20">REST APIs</Badge>
                    <Badge variant="secondary" className="bg-success-green/10 text-success-green border border-success-green/20">Alpine JS</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift shadow-professional hover:shadow-professional-xl border-2 border-healthcare-teal/20">
              <CardHeader>
                <Badge className="w-fit bg-healthcare-teal text-white font-semibold">Lead Developer</Badge>
                <CardTitle className="text-2xl text-brand-primary">ExRx.net Exercise API</CardTitle>
                <CardDescription className="text-lg">
                  Delivered robust fitness data API serving thousands of users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive exercise database and API for fitness applications and platforms
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-warning-orange/10 text-warning-orange border border-warning-orange/20">MySQL</Badge>
                    <Badge variant="secondary" className="bg-education-purple/10 text-education-purple border border-education-purple/20">PHP</Badge>
                    <Badge variant="secondary" className="bg-healthcare-teal/10 text-healthcare-teal border border-healthcare-teal/20">REST API</Badge>
                    <Badge variant="secondary" className="bg-success-green/10 text-success-green border border-success-green/20">jQuery</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 h-12 font-semibold shadow-professional">
              <Link href="/portfolio">See Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Lead Magnet Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Free Resources for Technical Leaders</h2>
            <p className="text-xl text-muted-foreground">
              Essential guides and templates from a 5-star rated educator
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift shadow-professional hover:shadow-professional-lg border-2 border-education-purple/20">
              <CardHeader>
                <div className="text-4xl mb-4">📋</div>
                <CardTitle className="text-education-purple">Technical Team Management Checklist</CardTitle>
                <CardDescription className="leading-relaxed">
                  Essential checklist for managing development teams and delivering projects successfully
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-education-purple hover:bg-education-purple/90 text-white h-11 font-semibold">
                  Download Free Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift shadow-professional hover:shadow-professional-lg border-2 border-healthcare-teal/20">
              <CardHeader>
                <div className="text-4xl mb-4">✅</div>
                <CardTitle className="text-healthcare-teal">Code Review Best Practices</CardTitle>
                <CardDescription className="leading-relaxed">
                  Proven strategies and templates from a developer with perfect 5/5 education ratings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-healthcare-teal hover:bg-healthcare-teal/90 text-white h-11 font-semibold">
                  Get Free Template
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Consultation Section */}
      <section id="consultation" className="py-20 bg-gradient-to-br from-brand-primary/5 via-healthcare-teal/5 to-brand-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Discuss Your Technical Challenges?</h2>
              <p className="text-xl text-muted-foreground">
                Book a free 30-minute consultation to explore how I can help lead your technical initiatives
              </p>
            </div>

            <Card className="shadow-professional-xl border-2 border-brand-primary/20">
              <CardContent className="p-8 bg-gradient-to-r from-background to-secondary/20">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-brand-primary">Your Name</label>
                      <Input id="name" placeholder="Your Name" className="h-11 border-2 border-muted focus:border-brand-primary" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-brand-primary">Your Email</label>
                      <Input id="email" type="email" placeholder="Your Email" className="h-11 border-2 border-muted focus:border-brand-primary" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-semibold text-brand-primary">Primary Interest</label>
                    <Select>
                      <SelectTrigger className="h-11 border-2 border-muted focus:border-brand-primary">
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leadership">Full-time Leadership Role</SelectItem>
                        <SelectItem value="automation">Business Automation (n8n)</SelectItem>
                        <SelectItem value="consulting">Technical Consulting</SelectItem>
                        <SelectItem value="development">Development Project</SelectItem>
                        <SelectItem value="training">Team Training/Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="challenge" className="text-sm font-semibold text-brand-primary">Describe Your Technical Challenge</label>
                    <Textarea 
                      id="challenge" 
                      placeholder="Tell me about your technical challenge or opportunity..."
                      rows={4}
                      className="border-2 border-muted focus:border-brand-primary"
                    />
                  </div>

                  <Button size="lg" className="w-full text-lg h-12 bg-warning-orange hover:bg-warning-orange/90 text-white font-bold shadow-professional-lg">
                    Book Free Consultation
                  </Button>

                  <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-green" />
                      <span>100% confidential</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-green" />
                      <span>No obligation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-green" />
                      <span>30-minute strategy session</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 border-t bg-gradient-to-r from-muted/50 to-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-2 text-brand-primary">WENG INDUSTRY</h3>
              <p className="text-healthcare-teal font-semibold mb-4">
                Technical Leadership That Delivers Results
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 hover:bg-healthcare-teal/10 p-2 rounded-lg transition-colors group">
                  <Phone className="h-4 w-4 text-success-green group-hover:text-healthcare-teal" />
                  <a href="tel:323-942-7614" className="hover:text-healthcare-teal transition-colors font-medium">
                    323-942-7614
                  </a>
                </div>
                <div className="flex items-center space-x-3 hover:bg-healthcare-teal/10 p-2 rounded-lg transition-colors group">
                  <Mail className="h-4 w-4 text-success-green group-hover:text-healthcare-teal" />
                  <a href="mailto:weng.f.fung@gmail.com" className="hover:text-healthcare-teal transition-colors font-medium">
                    weng.f.fung@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-brand-primary">Services</h4>
              <div className="space-y-2 text-muted-foreground">
                <div><Link href="/services" className="hover:text-warning-orange transition-colors font-medium">Business Automation</Link></div>
                <div><Link href="/services" className="hover:text-brand-primary transition-colors font-medium">Technical Leadership</Link></div>
                <div><Link href="/services" className="hover:text-healthcare-teal transition-colors font-medium">Full-Stack Development</Link></div>
                <div><Link href="/services" className="hover:text-education-purple transition-colors font-medium">Team Training</Link></div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-brand-primary">Connect</h4>
              <div className="space-y-2 text-muted-foreground">
                <div><a href="#" className="hover:text-education-purple transition-colors font-medium">GitHub</a></div>
                <div><a href="#" className="hover:text-brand-primary transition-colors font-medium">LinkedIn</a></div>
                <div><a href="#" className="hover:text-warning-orange transition-colors font-medium">YouTube (@WayneTeachesCode)</a></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
