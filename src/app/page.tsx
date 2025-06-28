import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  From Code to Leadership: <span className="text-primary">Transform Your Tech Vision Into Reality</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  5-star rated full-stack developer with proven management training, ready to lead your technical team or solve your complex development challenges
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>MERN+ certified with top academic marks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>1,482+ GitHub contributions this year</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Perfect 5/5 student rating (outperforms team average)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                                     <span>Enterprise clients: Mixotype, ExRx, People&apos;s Care</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="#consultation">Schedule Free Strategy Call</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>

              <Badge variant="secondary" className="w-fit text-sm">
                1,482 GitHub contributions this year
              </Badge>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">👨‍💻</div>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">Full-Stack Developer</div>
                    <div className="text-sm text-muted-foreground">Ready for Technical Leadership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Credibility Section */}
      <section className="py-16 border-b">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Trusted by Enterprise Clients
              </h3>
              <div className="flex justify-center items-center space-x-8 text-2xl font-bold text-muted-foreground">
                <span>Mixotype</span>
                <span>•</span>
                <span>ExRx.net</span>
                <span>•</span>
                                 <span>People&apos;s Care</span>
              </div>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                                 <blockquote className="text-xl italic text-center">
                   &ldquo;Weng is a &lsquo;Master&rsquo; coder. It took him about 5 minutes to fix a problem that was taking days to figure out.&rdquo;
                 </blockquote>
                <div className="mt-4 text-center">
                  <div className="font-semibold">Jeff Cohen</div>
                  <div className="text-sm text-muted-foreground">eLearning Coordinator, Pennsylvania Institute of Technology</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Lead Your Next Project</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From business automation to technical leadership - comprehensive services that drive real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">🚀</div>
                <CardTitle>Business Automation</CardTitle>
                <CardDescription>
                  Streamline operations with n8n workflows, eliminate manual work, boost efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for: SMBs, agencies, marketing teams
                </p>
                <p className="text-sm font-semibold text-green-600">
                  Save 10-20 hours/week on manual tasks
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">👨‍💼</div>
                <CardTitle>Technical Leadership</CardTitle>
                <CardDescription>
                  Team management, architecture decisions, project delivery with proven results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for: Growing startups, enterprise teams
                </p>
                <p className="text-sm font-semibold text-green-600">
                  Immediate technical direction and team guidance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">💻</div>
                <CardTitle>Full-Stack Development</CardTitle>
                <CardDescription>
                  MERN stack, APIs, cloud solutions, legacy modernization with enterprise quality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for: Product companies, agencies
                </p>
                <p className="text-sm font-semibold text-green-600">
                  Modern, scalable applications that perform
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">🎓</div>
                <CardTitle>Technical Training</CardTitle>
                <CardDescription>
                  5-star rated educator helping teams master React, Node.js, and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for: Development teams, bootcamps
                </p>
                <p className="text-sm font-semibold text-green-600">
                  Accelerated learning and skill development
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Results-Focused Portfolio */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Recent Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              See how technical expertise drives real business outcomes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Badge className="w-fit">Co-founder / Lead Developer</Badge>
                <CardTitle className="text-2xl">VideoListings.AI</CardTitle>
                <CardDescription className="text-lg">
                  Built complete real estate video platform from concept to launch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Real estate video generator for listings and social media serving thousands of users
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">NodeJS</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">Alpine JS</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit">Lead Developer</Badge>
                <CardTitle className="text-2xl">ExRx.net Exercise API</CardTitle>
                <CardDescription className="text-lg">
                  Delivered robust fitness data API serving thousands of users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Comprehensive exercise database and API for fitness applications and platforms
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">PHP</Badge>
                    <Badge variant="secondary">REST API</Badge>
                    <Badge variant="secondary">jQuery</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">See Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Free Resources for Technical Leaders</h2>
            <p className="text-xl text-muted-foreground">
              Essential guides and templates from a 5-star rated educator
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Technical Team Management Checklist</CardTitle>
                <CardDescription>
                  Essential checklist for managing development teams and delivering projects successfully
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Download Free Guide</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Review Best Practices</CardTitle>
                <CardDescription>
                  Proven strategies and templates from a developer with perfect 5/5 education ratings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Get Free Template</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section id="consultation" className="py-20 bg-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Discuss Your Technical Challenges?</h2>
              <p className="text-xl text-muted-foreground">
                Book a free 30-minute consultation to explore how I can help lead your technical initiatives
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                      <Input id="email" type="email" placeholder="Your Email" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">Primary Interest</label>
                    <Select>
                      <SelectTrigger>
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
                    <label htmlFor="challenge" className="text-sm font-medium">Describe Your Technical Challenge</label>
                    <Textarea 
                      id="challenge" 
                      placeholder="Tell me about your technical challenge or opportunity..."
                      rows={4}
                    />
                  </div>

                  <Button size="lg" className="w-full text-lg">
                    Book Free Consultation
                  </Button>

                  <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>100% confidential</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>No obligation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>30-minute strategy session</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">WENG INDUSTRY</h3>
              <p className="text-muted-foreground mb-4">
                Technical Leadership That Delivers Results
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <a href="tel:323-942-7614" className="hover:text-primary transition-colors">
                    323-942-7614
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✉️</span>
                  <a href="mailto:weng.f.fung@gmail.com" className="hover:text-primary transition-colors">
                    weng.f.fung@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-muted-foreground">
                <div><Link href="/services" className="hover:text-primary transition-colors">Business Automation</Link></div>
                <div><Link href="/services" className="hover:text-primary transition-colors">Technical Leadership</Link></div>
                <div><Link href="/services" className="hover:text-primary transition-colors">Full-Stack Development</Link></div>
                <div><Link href="/services" className="hover:text-primary transition-colors">Team Training</Link></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-muted-foreground">
                <div><a href="#" className="hover:text-primary transition-colors">GitHub</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">YouTube (@WayneTeachesCode)</a></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
