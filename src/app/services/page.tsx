import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transform Your Business With <span className="text-primary">Technical Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From team leadership to automation solutions - comprehensive technical services that drive real business results
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">5-Star Rated Educator</Badge>
              <Badge variant="secondary" className="text-sm">Enterprise Client Proven</Badge>
              <Badge variant="secondary" className="text-sm">n8n Automation Specialist</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Business Automation Services */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="text-lg px-4 py-2">🚀 PREMIUM SERVICE</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Business Automation Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline operations, eliminate manual work, boost efficiency with n8n automation workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <div className="text-4xl mb-4">📧</div>
                <CardTitle className="text-2xl">Marketing Automation</CardTitle>
                <CardDescription className="text-lg">
                  Automated lead nurturing, email sequences, social media posting, CRM integration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Lead capture and scoring automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Email sequence automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Social media scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>CRM integration and syncing</span>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">💰 ROI: Save 10-20 hours/week on marketing tasks</p>
                </div>
                <div className="text-2xl font-bold">Starting at $2,500</div>
                <Button className="w-full" asChild>
                  <Link href="#consultation">Get Marketing Automation Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-2">MOST POPULAR</Badge>
              </div>
              <CardHeader>
                <div className="text-4xl mb-4">💼</div>
                <CardTitle className="text-2xl">Sales Process Automation</CardTitle>
                <CardDescription className="text-lg">
                  Lead scoring, follow-up sequences, pipeline management, reporting dashboards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Automated lead qualification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Follow-up sequence automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Pipeline tracking and reporting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Real-time performance dashboards</span>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">💰 ROI: Increase conversion rates by 25-40%</p>
                </div>
                <div className="text-2xl font-bold">Starting at $3,000</div>
                <Button className="w-full" asChild>
                  <Link href="#consultation">Get Sales Automation Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <div className="text-4xl mb-4">⚙️</div>
                <CardTitle className="text-2xl">Operations Automation</CardTitle>
                <CardDescription className="text-lg">
                  Invoice processing, data syncing, notification systems, workflow optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Document processing automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Data synchronization between systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Custom notification systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Workflow optimization consulting</span>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">💰 ROI: Reduce operational overhead by 30-50%</p>
                </div>
                <div className="text-2xl font-bold">Custom Quote</div>
                <Button className="w-full" asChild>
                  <Link href="#consultation">Get Operations Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Leadership Services */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">👨‍💼 Technical Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced leader ready to guide your technical team and strategic initiatives
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Interim CTO / Tech Lead</CardTitle>
                <CardDescription>Full-time or part-time technical leadership for growing companies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground">
                  Immediate technical direction and team management with proven project management certification
                </div>
                <div className="text-2xl font-bold">$120-150/hour</div>
                <div className="text-sm text-muted-foreground">Or salary negotiable for full-time roles</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Technical Project Management</CardTitle>
                <CardDescription>End-to-end project delivery using proven methodologies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground">
                  UC Berkeley certified project management with hands-on development experience
                </div>
                <div className="text-2xl font-bold">$100/hour</div>
                <div className="text-sm text-muted-foreground">On-time, on-budget project completion</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Architecture & Strategy Consulting</CardTitle>
                <CardDescription>Technical roadmaps, system design, technology stack decisions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground">
                  Scalable, future-proof technical foundation planning and implementation guidance
                </div>
                <div className="text-2xl font-bold">$150/hour</div>
                <div className="text-sm text-muted-foreground">Strategic technical consulting</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development & Training Services */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">💻 Full-Stack Development</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Web Application Development</CardTitle>
                    <CardDescription>React, Node.js, MongoDB, MySQL - complete web solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Modern, scalable applications</span>
                      <span className="font-bold">$75-100/hour</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>API Development & Integration</CardTitle>
                    <CardDescription>REST APIs, third-party integrations, cloud services setup</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Seamless system connectivity</span>
                      <span className="font-bold">$85/hour</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Legacy System Modernization</CardTitle>
                    <CardDescription>Upgrade outdated systems, improve performance, add new features</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Extended system life, improved performance</span>
                      <span className="font-bold">Custom Quote</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">🎓 Technical Training & Education</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Training Workshops</CardTitle>
                    <CardDescription>Custom workshops on React, Node.js, best practices, code reviews</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Upskilled team, improved code quality</span>
                      <span className="font-bold">$200/hour</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>One-on-One Mentoring</CardTitle>
                    <CardDescription>Personalized technical coaching for developers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Accelerated learning, career growth</span>
                      <span className="font-bold">$120/hour</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Code Review & Optimization</CardTitle>
                    <CardDescription>Comprehensive codebase analysis and improvement recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Better code quality, performance improvements</span>
                      <span className="font-bold">$100/hour</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">How We Work Together</h2>
            <p className="text-xl text-muted-foreground">
              A proven process that ensures your success from consultation to delivery
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">1️⃣</div>
                <CardTitle>Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">30-minute call to understand your needs and challenges</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">2️⃣</div>
                <CardTitle>Proposal & Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Detailed scope, pricing, and delivery schedule within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">3️⃣</div>
                <CardTitle>Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Regular updates, collaborative development, milestone delivery</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">4️⃣</div>
                <CardTitle>Launch & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Go-live support, training, and ongoing maintenance options</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Recent Client Results</h2>
            <p className="text-xl text-muted-foreground">
              Real outcomes that demonstrate the value of technical excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">50%</div>
                <CardTitle>Reduction in Manual Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Mid-size agency saved 20+ hours/week through n8n automation workflows</p>
                <Badge variant="secondary" className="mt-2">Business Automation</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">5 mins</div>
                <CardTitle>Problem Resolution Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fixed complex technical issue that had blocked team for days</p>
                <Badge variant="secondary" className="mt-2">Technical Consulting</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">5/5 ⭐</div>
                <CardTitle>Perfect Training Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">All students who provided feedback gave maximum 5-star rating</p>
                <Badge variant="secondary" className="mt-2">Technical Training</Badge>
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
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Transform Your Technical Operations?</h2>
              <p className="text-xl text-muted-foreground">
                Book a free consultation to discuss your specific needs and get a custom proposal
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-semibold">Free 30-minute strategy session</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-semibold">Custom proposal within 24 hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">✅</div>
                  <div className="font-semibold">No obligation, just valuable insights</div>
                </div>
              </div>
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
                    <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                    <Input id="company" placeholder="Your Company" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">Primary Service Interest</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select primary interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="automation">Business Automation (n8n)</SelectItem>
                          <SelectItem value="leadership">Technical Leadership</SelectItem>
                          <SelectItem value="development">Full-Stack Development</SelectItem>
                          <SelectItem value="training">Team Training</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="text-sm font-medium">Project Timeline</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="month">Within 1 month</SelectItem>
                          <SelectItem value="quarter">1-3 months</SelectItem>
                          <SelectItem value="later">3+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="text-sm font-medium">Project Details</label>
                    <Textarea 
                      id="details" 
                      placeholder="Tell me about your technical challenges, automation needs, or leadership requirements..."
                      rows={4}
                    />
                  </div>

                  <Button size="lg" className="w-full text-lg">
                    Book Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 