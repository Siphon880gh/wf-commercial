import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Let&apos;s <span className="text-primary">Transform Your Technical Vision</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schedule a free consultation to discuss your technical challenges, automation opportunities, or leadership needs. 
              No sales pressure - just valuable insights and actionable recommendations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold">Free 30-Minute Strategy Session</div>
                <div className="text-sm text-muted-foreground">No obligation, just valuable insights</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold">Custom Proposal Within 24 Hours</div>
                <div className="text-sm text-muted-foreground">Detailed scope, timeline, and pricing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✅</div>
                <div className="font-semibold">100% Confidential Discussion</div>
                <div className="text-sm text-muted-foreground">Your business needs stay private</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 border-b">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Multiple Ways to Connect</h2>
              <p className="text-xl text-muted-foreground">
                Choose the method that works best for you - I respond to all inquiries within 24 hours
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Phone Call</CardTitle>
                  <CardDescription>Direct line for urgent matters</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="tel:323-942-7614" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                    323-942-7614
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available Mon-Fri, 9 AM - 6 PM PST
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Detailed project discussions</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="mailto:weng.f.fung@gmail.com" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors break-all">
                    weng.f.fung@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Response within 24 hours guaranteed
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Schedule Online</CardTitle>
                  <CardDescription>Book a time that works for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="#consultation-form">Schedule Consultation</Link>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Choose from available time slots
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Location</CardTitle>
                  <CardDescription>Based in California</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">Los Angeles Area</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available for remote work worldwide or local meetings
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">What to Expect in Our Consultation</h2>
              <p className="text-xl text-muted-foreground">
                A structured conversation focused on understanding your needs and providing immediate value
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="text-4xl mb-4">1️⃣</div>
                  <CardTitle>Discovery & Assessment (10 minutes)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Understand your current technical situation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Identify pain points and bottlenecks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Review existing systems and processes</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-4">2️⃣</div>
                  <CardTitle>Solution Strategy (15 minutes)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Discuss potential technical solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Identify automation opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Outline project approach and timeline</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-4">3️⃣</div>
                  <CardTitle>Next Steps & Proposal (5 minutes)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Provide immediate actionable recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Discuss engagement options and pricing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Schedule follow-up if both parties interested</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-green-50 p-6 rounded-lg inline-block">
                <p className="text-green-800 font-semibold text-lg">
                  💡 You&apos;ll walk away with valuable insights even if we don&apos;t work together
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge className="text-lg px-4 py-2">📅 BOOK YOUR FREE CONSULTATION</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">Tell Me About Your Technical Challenge</h2>
              <p className="text-xl text-muted-foreground">
                The more details you provide, the more valuable our consultation will be
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Free Strategy Session Request</CardTitle>
                <CardDescription className="text-lg">
                  Please fill out this form and I&apos;ll contact you within 24 hours to schedule our consultation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Your Name *</label>
                        <Input id="name" placeholder="Your Full Name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                        <Input id="phone" type="tel" placeholder="(Optional) for urgent follow-up" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">Company/Organization</label>
                        <Input id="company" placeholder="Your Company Name" />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Project Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">Primary Service Interest *</label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="What are you most interested in?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automation">Business Automation (n8n workflows)</SelectItem>
                            <SelectItem value="leadership">Technical Leadership/Management Role</SelectItem>
                            <SelectItem value="development">Full-Stack Web Development</SelectItem>
                            <SelectItem value="training">Team Training & Education</SelectItem>
                            <SelectItem value="consulting">Technical Consulting & Architecture</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                            <SelectItem value="unsure">Not Sure - Need Guidance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="timeline" className="text-sm font-medium">Project Timeline *</label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="When do you need this completed?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (Within 2 weeks)</SelectItem>
                            <SelectItem value="month">Within 1 month</SelectItem>
                            <SelectItem value="quarter">1-3 months</SelectItem>
                            <SelectItem value="later">3+ months</SelectItem>
                            <SelectItem value="ongoing">Ongoing/Long-term engagement</SelectItem>
                            <SelectItem value="exploring">Just exploring options</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium">Budget Range (Optional)</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Help me understand your budget expectations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                          <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                          <SelectItem value="50k-plus">$50,000+</SelectItem>
                          <SelectItem value="hourly">Prefer hourly rates</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Project Description</h3>
                    <div className="space-y-2">
                      <label htmlFor="challenge" className="text-sm font-medium">Describe Your Technical Challenge or Opportunity *</label>
                      <Textarea 
                        id="challenge" 
                        placeholder="Please provide as much detail as possible:&#10;&#10;• What specific problems are you trying to solve?&#10;• What systems/technologies are you currently using?&#10;• What manual processes could be automated?&#10;• What are your main pain points?&#10;• What does success look like for you?"
                        rows={8}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="goals" className="text-sm font-medium">What Are Your Main Goals?</label>
                      <Textarea 
                        id="goals" 
                        placeholder="Examples:&#10;• Reduce manual work by X hours/week&#10;• Scale operations without hiring more staff&#10;• Improve team productivity&#10;• Modernize legacy systems&#10;• Lead technical transformation"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Consultation Preferences</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="preferred-time" className="text-sm font-medium">Preferred Time of Day</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="When works best for you?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9 AM - 12 PM PST)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 5 PM PST)</SelectItem>
                            <SelectItem value="evening">Evening (5 PM - 7 PM PST)</SelectItem>
                            <SelectItem value="flexible">I&apos;m flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="meeting-type" className="text-sm font-medium">Preferred Meeting Format</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="How would you like to meet?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="video">Video call (Zoom, Google Meet)</SelectItem>
                            <SelectItem value="phone">Phone call</SelectItem>
                            <SelectItem value="in-person">In-person (LA area only)</SelectItem>
                            <SelectItem value="no-preference">No preference</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-2">
                    <label htmlFor="additional" className="text-sm font-medium">Anything Else I Should Know?</label>
                    <Textarea 
                      id="additional" 
                      placeholder="Any additional context, specific questions, or constraints I should be aware of?"
                      rows={3}
                    />
                  </div>

                  <Button size="lg" className="w-full text-lg">
                    Schedule My Free Consultation
                  </Button>

                  <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground text-center">
                    <div>
                      <div className="text-green-600 mb-1">✓</div>
                      <div>Free 30-minute session</div>
                    </div>
                    <div>
                      <div className="text-green-600 mb-1">✓</div>
                      <div>Response within 24 hours</div>
                    </div>
                    <div>
                      <div className="text-green-600 mb-1">✓</div>
                      <div>No sales pressure</div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Why Technical Leaders Choose to Work With Me</h2>
              <p className="text-xl text-muted-foreground">
                Unique combination of technical expertise, business understanding, and proven results
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>Perfect Track Record</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client satisfaction rate</div>
                  <div className="text-3xl font-bold text-primary">5/5</div>
                  <div className="text-sm text-muted-foreground">Student rating average</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Rapid Problem Solving</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <blockquote className="italic text-sm">
                    &ldquo;5 minutes to fix a problem that was taking days&rdquo;
                  </blockquote>
                  <div className="text-sm text-muted-foreground">- Jeff Cohen, Pennsylvania Institute of Technology</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Comprehensive Expertise</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="text-sm">
                    • Full-Stack Development<br/>
                    • Business Automation<br/>
                    • Technical Leadership<br/>
                    • Team Training
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg">
              <p className="text-lg font-semibold text-primary mb-4">
                🎯 Ready to Transform Your Technical Operations?
              </p>
              <p className="text-muted-foreground">
                Join satisfied clients who&apos;ve improved their efficiency, reduced manual work, and achieved their technical goals. 
                Your free consultation could be the first step toward significant positive change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 