import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ExternalLink, Award, Trophy, Star, Target } from "lucide-react"

export default function CertificatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Certified Excellence in <span className="text-primary">Technical Leadership</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Academic top marks, industry certifications, and proven achievements that validate expertise and commitment to continuous learning
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Top Marks</div>
                <div className="text-muted-foreground">UCLA MERN+ Certification</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-muted-foreground">Technical Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Senior</div>
                <div className="text-muted-foreground">EdX Tutor Level</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="certifications" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="certifications" className="text-lg">Technical Certifications</TabsTrigger>
              <TabsTrigger value="achievements" className="text-lg">Professional Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="certifications" className="space-y-12">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">Industry-Recognized Technical Expertise</h2>
                <p className="text-xl text-muted-foreground">
                  Each certification represents mastery of specific technologies and proven competency
                </p>
              </div>

              {/* Flagship Certification */}
              <Card className="border-primary shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="text-lg px-4 py-2">🏆 FLAGSHIP CERTIFICATION</Badge>
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">Full Stack MERN+ Web Development</CardTitle>
                  <CardDescription className="text-xl">UCLA Extension • April 2021 • Graduated with Top Marks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    Intensive 6-month program covering full-stack development with MongoDB, Express.js, React, and Node.js. 
                    Includes advanced topics in authentication, deployment, and modern development practices.
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🎯 Business Value:</h4>
                    <p className="text-green-700">
                      Validates ability to build enterprise-level applications from concept to deployment with modern technology stack
                    </p>
                  </div>

                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl">🎓</div>
                      <div className="text-lg font-semibold">UCLA Extension Certificate</div>
                      <div className="text-sm text-muted-foreground">Top Academic Performance</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certification Categories */}
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="text-4xl mb-4">🗄️</div>
                    <CardTitle className="text-2xl">Database Mastery</CardTitle>
                    <CardDescription>Proven expertise in both SQL and NoSQL database design and optimization</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold">MySQL Advanced Certification</h4>
                        <p className="text-sm text-muted-foreground">SoloLearn • February 2023</p>
                        <p className="text-sm mt-2">Database design, query optimization, stored procedures, indexing</p>
                        <div className="bg-blue-50 p-3 rounded mt-2">
                          <p className="text-blue-800 text-sm font-semibold">
                            💼 Business Impact: Design scalable database architectures for high-performance applications
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-secondary pl-4">
                        <h4 className="font-semibold">SQL Programming Certificate</h4>
                        <p className="text-sm text-muted-foreground">SoloLearn • February 2023</p>
                        <p className="text-sm mt-2">Complex queries, joins, subqueries, data analysis</p>
                        <div className="bg-blue-50 p-3 rounded mt-2">
                          <p className="text-blue-800 text-sm font-semibold">
                            💼 Business Impact: Extract actionable insights from complex data relationships
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="text-4xl mb-4">🐍</div>
                    <CardTitle className="text-2xl">Python & AI Development</CardTitle>
                    <CardDescription>Modern programming skills for automation, data science, and AI applications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold">Python Programming Certificate</h4>
                        <p className="text-sm text-muted-foreground">SoloLearn • December 2022</p>
                        <p className="text-sm mt-2">Object-oriented programming, data structures, algorithms, automation</p>
                        <div className="bg-blue-50 p-3 rounded mt-2">
                          <p className="text-blue-800 text-sm font-semibold">
                            💼 Business Impact: Build automation scripts and integrate AI/ML capabilities
                          </p>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800">🚀 Currently Pursuing:</h4>
                        <p className="text-yellow-700 text-sm mt-2">
                          AI Applications and Prompt Engineering certifications to stay ahead of technological trends
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="text-4xl mb-4">🎨</div>
                    <CardTitle className="text-2xl">Frontend Excellence</CardTitle>
                    <CardDescription>Creating responsive, user-friendly interfaces that convert</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold">CSS Advanced Techniques</h4>
                        <p className="text-sm text-muted-foreground">SoloLearn • 2017</p>
                        <p className="text-sm mt-2">Responsive design, animations, grid systems, modern CSS</p>
                        <div className="bg-blue-50 p-3 rounded mt-2">
                          <p className="text-blue-800 text-sm font-semibold">
                            💼 Business Impact: Create pixel-perfect, mobile-optimized user experiences
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-secondary pl-4">
                        <h4 className="font-semibold">Web Development Fundamentals</h4>
                        <p className="text-sm text-muted-foreground">SoloLearn • January 2023</p>
                        <p className="text-sm mt-2">HTML5, CSS3, JavaScript ES6+, responsive frameworks</p>
                        <div className="bg-blue-50 p-3 rounded mt-2">
                          <p className="text-blue-800 text-sm font-semibold">
                            💼 Business Impact: Build modern web applications with excellent user experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="text-4xl mb-4">📈</div>
                    <CardTitle className="text-2xl">Leadership & Management</CardTitle>
                    <CardDescription>Business skills essential for technical leadership roles</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">Project Management Certificate</h4>
                      <p className="text-sm text-muted-foreground">UC Berkeley Extension • 2023</p>
                      <p className="text-sm mt-2">Agile methodologies, team leadership, stakeholder management, delivery</p>
                      <div className="bg-blue-50 p-3 rounded mt-2">
                        <p className="text-blue-800 text-sm font-semibold">
                          💼 Business Impact: Lead technical teams and deliver projects on time and budget
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-12">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">Professional Recognition & Achievements</h2>
                <p className="text-xl text-muted-foreground">
                  Real-world validation of technical expertise and professional impact
                </p>
              </div>

              {/* Achievement Navigation */}
              <div className="flex justify-center mb-12">
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" asChild>
                    <Link href="#academic-excellence">Academic Excellence</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#professional-recognition">Professional Recognition</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#community-impact">Community Impact</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#technical-leadership">Technical Leadership</Link>
                  </Button>
                </div>
              </div>

              {/* Academic Excellence */}
              <Card id="academic-excellence">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                    <div>
                      <CardTitle className="text-2xl">🎓 Academic Excellence</CardTitle>
                      <CardDescription>Graduated UCLA Extension&apos;s intensive program with top marks</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg">
                    Graduated UCLA Extension&apos;s intensive 6-month Full Stack Web Development program with top marks. 
                    Comprehensive grade breakdown showing mastery across all technical areas.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">🏆 Academic Highlights:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span>Perfect attendance throughout intensive 6-month program</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span>Top marks in all major project deliverables</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span>Peer recognition for collaborative excellence</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span>Advanced understanding of MERN+ stack implementation</span>
                        </div>
                      </div>
                    </div>

                    <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="text-4xl text-green-600">📜</div>
                        <div className="text-green-800 font-semibold">UCLA Extension Transcript</div>
                        <div className="text-green-700 text-sm">Top marks across all modules</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">💼 Business Value:</h4>
                    <p className="text-green-700">
                      Proves ability to master complex technical concepts quickly and maintain high standards under pressure
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Recognition */}
              <Card id="professional-recognition">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Star className="h-8 w-8 text-blue-500" />
                    <div>
                      <CardTitle className="text-2xl">🏆 Professional Recognition</CardTitle>
                      <CardDescription>Consistent recognition from peers, supervisors, and industry professionals</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">EdX Bootcamp Excellence</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-muted-foreground">5/5 student rating, outperforms team averages consistently</p>
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="text-blue-800 text-sm font-semibold">
                            🎯 Impact: Promoted to Senior Tutor level across multiple bootcamp cohorts
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Supervisor Commendations</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-muted-foreground">Regular Slack recognition for exceptional student support</p>
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="text-blue-800 text-sm font-semibold">
                            🎯 Impact: Trusted with advanced students and complex technical debugging
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Client Testimonial Excellence</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-muted-foreground">100% client satisfaction rate across enterprise projects</p>
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="text-blue-800 text-sm font-semibold">
                            🎯 Impact: Repeat business and long-term partnership offers
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl text-blue-600">💬</div>
                      <div className="text-blue-800 font-semibold">Supervisor Recognition Screenshots</div>
                      <div className="text-blue-700 text-sm">Regular acknowledgment for exceptional performance</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Community Impact */}
              <Card id="community-impact">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Target className="h-8 w-8 text-purple-500" />
                    <div>
                      <CardTitle className="text-2xl">🌟 Community Impact & Teaching Excellence</CardTitle>
                      <CardDescription>Significant contributions to developer education and community engagement</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">@WayneTeachesCode</CardTitle>
                          <ExternalLink className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-muted-foreground">Educational content reaching global developer community</p>
                        <p className="text-sm font-semibold">Specialty: Gamified learning approaches and practical tutorials</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">EdX Bootcamp System</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-muted-foreground">Senior tutor supporting hundreds of students in technical careers</p>
                        <p className="text-sm font-semibold">Specialty: React State, GraphQL, Sequelize, modern development practices</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Open Source Contributions</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-muted-foreground">1,482+ GitHub contributions in the last year</p>
                        <p className="text-sm font-semibold">Specialty: Consistent, high-quality code contributions across diverse projects</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="aspect-[3/1] bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl text-green-600">📊</div>
                      <div className="text-green-800 font-semibold">GitHub Contribution Calendar</div>
                      <div className="text-green-700 text-sm">1,482 contributions demonstrate consistent engagement with code and community</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Leadership */}
              <Card id="technical-leadership">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-2xl">💼 Technical Leadership Readiness</CardTitle>
                      <CardDescription>Combination of technical expertise, management training, and real-world leadership experience</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold">Technical Architecture</h4>
                        <p className="text-sm text-muted-foreground">Successfully architected VideoListings.AI from concept to production</p>
                        <p className="text-sm font-medium text-primary">Impact: Full-stack platform serving real estate industry with AI integration</p>
                      </div>

                      <div className="border-l-4 border-secondary pl-4">
                        <h4 className="font-semibold">Team Mentoring</h4>
                        <p className="text-sm text-muted-foreground">Senior tutor role guiding junior developers through complex concepts</p>
                        <p className="text-sm font-medium text-primary">Impact: 5/5 rating for teaching effectiveness and student success</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Project Management</h4>
                        <p className="text-sm text-muted-foreground">UC Berkeley Project Management certification plus real project delivery</p>
                        <p className="text-sm font-medium text-primary">Impact: Proven ability to deliver technical projects on time and specification</p>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold">Cross-functional Communication</h4>
                        <p className="text-sm text-muted-foreground">Healthcare background providing unique perspective on user-critical systems</p>
                        <p className="text-sm font-medium text-primary">Impact: Ability to translate technical concepts for non-technical stakeholders</p>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl text-purple-600">📈</div>
                      <div className="text-purple-800 font-semibold">Team Performance Metrics</div>
                      <div className="text-purple-700 text-sm">Consistently outperforms team averages while maintaining collaborative excellence</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why These Credentials Matter */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why These Credentials Matter for Your Business</h2>
            <p className="text-xl text-muted-foreground">
              Certifications and achievements translate directly to business value
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Proven Learning Ability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Top marks in intensive programs demonstrate ability to master new technologies quickly
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-blue-800 font-semibold text-sm">
                    💼 Value: Faster adaptation to your specific tech stack and requirements
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Teaching Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  5/5 student ratings prove ability to explain complex concepts clearly
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-blue-800 font-semibold text-sm">
                    💼 Value: Excellent communication with team members and stakeholders
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Consistent High Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Track record of excellence across academic, professional, and community settings
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-blue-800 font-semibold text-sm">
                    💼 Value: Reliable delivery of high-quality work you can depend on
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Continuous Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Active pursuit of emerging technologies like AI and advanced automation
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-blue-800 font-semibold text-sm">
                    💼 Value: Future-proof solutions that leverage latest technological advances
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Leverage This Expertise?</h2>
            <p className="text-xl text-muted-foreground">
              Put certified technical excellence to work on your next project or leadership challenge
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="font-semibold">Technical Leadership</div>
                <div className="text-sm text-muted-foreground">Project Management certified + 5/5 team performance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💻</div>
                <div className="font-semibold">Full-Stack Development</div>
                <div className="text-sm text-muted-foreground">UCLA MERN+ certified with top academic marks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔧</div>
                <div className="font-semibold">Business Automation</div>
                <div className="text-sm text-muted-foreground">n8n specialist + database optimization expert</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎓</div>
                <div className="font-semibold">Team Training</div>
                <div className="text-sm text-muted-foreground">Senior educator with perfect student ratings</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View Portfolio Projects</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="text-green-600 mb-1">✓</div>
                <div>Certified expertise across multiple technical areas</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 mb-1">✓</div>
                <div>Proven track record of excellence and reliability</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 mb-1">✓</div>
                <div>Continuous learning and adaptation to new technologies</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 mb-1">✓</div>
                <div>Clear communication and teaching ability</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 