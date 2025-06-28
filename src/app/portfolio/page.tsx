import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Proven Results <span className="text-primary">Across Industries</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From startup MVPs to enterprise solutions - see how technical expertise drives real business outcomes
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Major Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5/5</div>
                <div className="text-sm text-muted-foreground">Average Student Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1,482</div>
                <div className="text-sm text-muted-foreground">GitHub Contributions This Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 border-b">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-8 text-lg px-4 py-2">🌟 FEATURED SUCCESS STORY</Badge>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">VideoListings.AI</h2>
                  <Badge variant="secondary" className="mb-4">Co-founder & Lead Developer</Badge>
                  <p className="text-xl text-muted-foreground">
                    AI-powered video generation platform for real estate from concept to launch
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">The Challenge</h3>
                  <p className="text-muted-foreground">
                    Build comprehensive AI-powered video generation platform for real estate listings and social media marketing, 
                    integrating multiple complex systems and APIs.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">The Solution</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>Architected full-stack solution with NodeJS, PHP, Python</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>Integrated multiple APIs for video processing and real estate data</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>Built responsive frontend with Alpine JS and Tailwind</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>Implemented RESTful APIs for seamless third-party integrations</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">The Results</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">6 months</div>
                      <div className="text-sm text-green-800">Concept to launch</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">1000s</div>
                      <div className="text-sm text-green-800">Listings processed</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">Seamless</div>
                      <div className="text-sm text-green-800">MLS integration</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">NodeJS</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">REST API</Badge>
                  <Badge variant="outline">Alpine JS</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                </div>

                <Button asChild>
                  <Link href="#consultation">Discuss Your Platform Needs</Link>
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🏠</div>
                    <div className="text-lg font-semibold">VideoListings.AI Platform</div>
                    <div className="text-sm text-muted-foreground">Real Estate Video Generation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Technical Excellence Across Domains</h2>
            <p className="text-xl text-muted-foreground">
              From enterprise solutions to automation projects - diverse expertise that delivers results
            </p>
          </div>

          <Tabs defaultValue="enterprise" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="enterprise">Enterprise Solutions</TabsTrigger>
              <TabsTrigger value="saas">SaaS Products</TabsTrigger>
              <TabsTrigger value="automation">Automation Projects</TabsTrigger>
              <TabsTrigger value="education">Educational Impact</TabsTrigger>
            </TabsList>

            <TabsContent value="enterprise" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge>Lead Developer</Badge>
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-2xl">ExRx.net Exercise API</CardTitle>
                    <CardDescription className="text-lg">
                      Comprehensive fitness data API serving thousands of fitness applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Business Impact:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Robust API handling high-volume requests</li>
                        <li>• Comprehensive exercise database integration</li>
                        <li>• Scalable architecture supporting multiple clients</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">REST API</Badge>
                      <Badge variant="secondary">jQuery</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge>Full-Stack Developer</Badge>
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-2xl">People&apos;s Care Platform</CardTitle>
                    <CardDescription className="text-lg">
                      Healthcare management system for patient care coordination
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Business Impact:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Streamlined patient data management</li>
                        <li>• Improved care coordination workflows</li>
                        <li>• HIPAA-compliant data handling</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">Express</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="saas" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge>Solo Developer</Badge>
                      <div className="flex space-x-2">
                        <ExternalLink className="h-5 w-5 text-muted-foreground" />
                        <Github className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl">Budget Tracker PWA</CardTitle>
                    <CardDescription className="text-lg">
                      Offline-capable progressive web app for personal finance management
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Business Impact:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Works completely offline for user privacy</li>
                        <li>• Beautiful data visualizations with Chart.js</li>
                        <li>• Mobile-first responsive design</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <ExternalLink className="h-4 w-4 inline mr-1" />
                        <strong>Live Demo:</strong> wengindustries.com/app/budget-tracker/
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">Chart.js</Badge>
                      <Badge variant="secondary">PWA</Badge>
                      <Badge variant="secondary">Service Workers</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge>Solo Developer</Badge>
                      <Github className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-2xl">Developer Brain Knowledge Base</CardTitle>
                    <CardDescription className="text-lg">
                      Personal programming notes archive with 1500+ searchable entries
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Business Impact:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Advanced search and categorization system</li>
                        <li>• Real-time code syntax highlighting</li>
                        <li>• Rapid knowledge retrieval for development</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">jQuery</Badge>
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">Full-text Search</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="automation" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge>Automation Specialist</Badge>
                    </div>
                    <CardTitle className="text-2xl">Marketing Automation Suite</CardTitle>
                    <CardDescription className="text-lg">
                      Complete n8n automation workflow for SMB marketing operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Business Impact:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Reduced manual marketing tasks by 75%</li>
                        <li>• Automated lead nurturing sequences</li>
                        <li>• Integrated CRM, email, and social media platforms</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800 font-semibold">
                        💰 ROI: Saved client 20+ hours/week on marketing tasks
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">n8n</Badge>
                      <Badge variant="secondary">Webhooks</Badge>
                      <Badge variant="secondary">API Integrations</Badge>
                      <Badge variant="secondary">Email Marketing</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge>Business Automation Consultant</Badge>
                    </div>
                    <CardTitle className="text-2xl">Sales Process Automation</CardTitle>
                    <CardDescription className="text-lg">
                      End-to-end sales pipeline automation with lead scoring and follow-up
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Business Impact:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Increased lead conversion rate by 40%</li>
                        <li>• Automated follow-up sequences</li>
                        <li>• Real-time sales reporting dashboard</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800 font-semibold">
                        💰 ROI: 40% improvement in lead conversion rate
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">n8n</Badge>
                      <Badge variant="secondary">CRM APIs</Badge>
                      <Badge variant="secondary">Email Automation</Badge>
                      <Badge variant="secondary">Data Analytics</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge>Senior Technical Tutor</Badge>
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-2xl">Full-Stack Bootcamp Tutoring</CardTitle>
                    <CardDescription className="text-lg">
                      EdX bootcamp instruction across multiple technologies and student cohorts
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Educational Impact:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Perfect 5/5 student rating (beats team average)</li>
                        <li>• Specialized in React State, GraphQL, Sequelize</li>
                        <li>• Consistent top performance metrics</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 font-semibold">
                        🏆 Achievement: Only instructor with perfect 5/5 rating from all students
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React Context</Badge>
                      <Badge variant="secondary">Redux Toolkit</Badge>
                      <Badge variant="secondary">GraphQL</Badge>
                      <Badge variant="secondary">Sequelize</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge>Content Creator & Educator</Badge>
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-2xl">@WayneTeachesCode YouTube</CardTitle>
                    <CardDescription className="text-lg">
                      Programming tutorials and gamified coding education content
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Educational Impact:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Educational content reaching global audience</li>
                        <li>• Practical coding tutorials and tips</li>
                        <li>• Gamified learning approach</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>YouTube Channel:</strong> @WayneTeachesCode - Programming education with gamified approach
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Video Production</Badge>
                      <Badge variant="secondary">Educational Content</Badge>
                      <Badge variant="secondary">JavaScript Tutorials</Badge>
                      <Badge variant="secondary">Gamified Learning</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Technical Proficiency Across Stacks</h2>
            <p className="text-xl text-muted-foreground">
              Deep expertise in modern technologies with proven enterprise experience
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">⚛️</div>
                <CardTitle>Frontend Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>React</div>
                  <div>jQuery</div>
                  <div>Alpine.js</div>
                  <div>Bootstrap</div>
                  <div>Tailwind CSS</div>
                  <div>Responsive Design</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🖥️</div>
                <CardTitle>Backend Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Node.js</div>
                  <div>Express</div>
                  <div>PHP</div>
                  <div>Python</div>
                  <div>RESTful APIs</div>
                  <div>Microservices</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🗄️</div>
                <CardTitle>Database Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>MySQL</div>
                  <div>MongoDB</div>
                  <div>Sequelize ORM</div>
                  <div>Database Design</div>
                  <div>Query Optimization</div>
                  <div>Full-text Search</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">☁️</div>
                <CardTitle>Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>AWS S3</div>
                  <div>Google Cloud Functions</div>
                  <div>Firebase</div>
                  <div>CI/CD</div>
                  <div>API Integration</div>
                  <div>Cloud Architecture</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">⚙️</div>
                <CardTitle>Automation & Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>n8n Workflows</div>
                  <div>Webhook Management</div>
                  <div>CRM Integration</div>
                  <div>Marketing Automation</div>
                  <div>Business Process Automation</div>
                  <div>API Orchestration</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">What Clients Say About Working With Me</h2>
            
            <Card className="p-8">
              <CardContent className="space-y-6">
                <blockquote className="text-2xl italic">
                  &ldquo;Weng has been such a blessing #Godsend on a number of projects... combined with just being a great guy, I knew we were meant to work together forever on any project I needed a dev on. Highly recommend!&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-lg">Sterling Williams</div>
                  <div className="text-muted-foreground">Lead Web and Graphic Designer, The Web Stylist</div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <blockquote className="italic">
                    &ldquo;Weng is an incredibly gifted developer... Best developer you can hire.&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold">Numair Qureshi</div>
                    <div className="text-sm text-muted-foreground">Senior Web Designer, The Magnolia Designer</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <blockquote className="italic">
                    &ldquo;Well versed in javascript and jQuery developing solutions to uncommon problems.&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold">Vano Spada</div>
                    <div className="text-sm text-muted-foreground">CEO and Founder, VEZAT TV</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section id="consultation" className="py-20 bg-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Your Next Project?</h2>
            <p className="text-xl text-muted-foreground">
              Let&apos;s discuss how I can help you achieve similar results with your technical challenges
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="font-semibold">Business Automation</div>
                <div className="text-sm text-muted-foreground">Streamline operations with n8n workflows</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💻</div>
                <div className="font-semibold">Full-Stack Development</div>
                <div className="text-sm text-muted-foreground">Modern web applications that scale</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">👨‍💼</div>
                <div className="font-semibold">Technical Leadership</div>
                <div className="text-sm text-muted-foreground">Guide your team to success</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎓</div>
                <div className="font-semibold">Team Training</div>
                <div className="text-sm text-muted-foreground">Upskill your development team</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Services & Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 