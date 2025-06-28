import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  From Healthcare to <span className="text-primary">Tech Leadership</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Bringing the same dedication to patient care into delivering exceptional technical solutions
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>UCLA MERN+ Certified (Top Marks)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>5/5 Star Educator Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Enterprise Client Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>1,482+ GitHub Contributions This Year</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">👨‍💻</div>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">Weng Fei Fung</div>
                    <div className="text-sm text-muted-foreground">Healthcare → Technology → Leadership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Why I Transitioned From Nursing to Tech</h2>
              <p className="text-xl text-muted-foreground">
                A unique journey that brings healthcare precision to technical excellence
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-8">
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    My journey began in healthcare, where I learned that <strong>attention to detail saves lives</strong>. 
                    Working weekends as an RN while building my tech career taught me something crucial: 
                    the same meticulous care that goes into patient safety applies perfectly to writing reliable, 
                    maintainable code.
                  </p>
                  <p className="text-lg leading-relaxed">
                    This unique background gives me perspective that pure-tech developers often lack. 
                    I understand <strong>systems thinking</strong>, <strong>crisis management</strong>, and <strong>the importance of documentation</strong> 
                    because I&apos;ve seen what happens when these things fail in life-critical environments.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center p-8 bg-muted/50 rounded-lg">
                <blockquote className="text-2xl italic text-primary font-semibold">
                  &ldquo;The same precision that ensures patient safety ensures your code works flawlessly in production.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Technical Excellence Meets Real-World Experience</h2>
            <p className="text-xl text-muted-foreground">
              Four key areas where my unique background creates exceptional value
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">🎓</div>
                <CardTitle className="text-2xl">Full-Stack Mastery</CardTitle>
                <CardDescription className="text-lg">
                  MERN+ certified with <strong>top academic marks</strong> from UCLA Extension
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Specialized in React, Node.js, PHP, Python - with deep understanding of when to use each technology. 
                  Academic excellence combined with real-world application.
                </p>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    📊 Proof: 1,482 GitHub contributions this year demonstrate consistent, high-quality development
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">⚙️</div>
                <CardTitle className="text-2xl">Business Automation Specialist</CardTitle>
                <CardDescription className="text-lg">
                  <strong>n8n automation expert</strong> helping businesses eliminate manual work and scale operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  From marketing workflows to sales processes - I turn repetitive tasks into automated systems. 
                  Healthcare background provides unique insight into process optimization.
                </p>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    💰 Proof: Clients report 30-75% reduction in manual work after automation implementation
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">⭐</div>
                <CardTitle className="text-2xl">Proven Educator</CardTitle>
                <CardDescription className="text-lg">
                  <strong>Perfect 5/5 rating</strong> from bootcamp students (outperforms team average)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Senior tutor at EdX covering React State, GraphQL, Sequelize, and modern development practices. 
                  Teaching complex concepts with clarity and patience.
                </p>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-purple-800 font-semibold">
                    🎬 Proof: @WayneTeachesCode YouTube channel with gamified coding education approach
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">👨‍💼</div>
                <CardTitle className="text-2xl">Leadership Ready</CardTitle>
                <CardDescription className="text-lg">
                  <strong>Project Management Certificate from UC Berkeley</strong> combined with hands-on team experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Ready to transition into technical leadership and management roles. Healthcare experience provides 
                  unique perspective on team coordination and crisis management.
                </p>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-800 font-semibold">
                    🚀 Proof: Currently pursuing AI certifications in Python and Prompt Engineering
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Creative Problem Solving</h2>
              <p className="text-xl text-muted-foreground">
                Multiple programming languages enable unique solutions to complex business challenges
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Hybrid Development Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Combining <strong>PHP and React</strong> with strategic htaccess configuration for streamlined, 
                    cost-effective development that delivers enterprise-level results on SMB budgets.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cloud-First Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Expert integration of <strong>Google Cloud Functions, Firebase, AWS S3</strong> with custom APIs. 
                    Building scalable solutions that grow with your business needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Automation-First Mindset</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every project includes automation opportunities analysis. Why do manually what 
                    can be automated reliably? Healthcare teaches you to eliminate human error wherever possible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">See My Teaching Style</h2>
            
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎬</div>
                <div className="text-xl font-semibold">Sample Tutorial from @WayneTeachesCode</div>
                <div className="text-muted-foreground">Programming education with clear, step-by-step approach</div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground">
              Watch how I break down complex programming concepts into digestible, actionable steps. 
              The same clear communication style I bring to client projects and team leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Continuous Growth & Future Vision</h2>
              <p className="text-xl text-muted-foreground">
                A journey of constant learning and professional evolution
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Healthcare Foundation</h3>
                  <p className="text-muted-foreground">
                    RN experience providing critical attention to detail and systems thinking. 
                    Understanding of life-critical processes and documentation requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Mastery</h3>
                  <p className="text-muted-foreground">
                    UCLA MERN+ certification with top marks, successful freelancing across multiple technologies, 
                    building real-world applications for enterprise clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education Excellence</h3>
                  <p className="text-muted-foreground">
                    5-star rated bootcamp tutor, YouTube education content creator with @WayneTeachesCode, 
                    consistently outperforming team averages in student satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Leadership Preparation</h3>
                  <p className="text-muted-foreground">
                    UC Berkeley Project Management certification, n8n automation expertise, 
                    AI/ML skill development through Python and Prompt Engineering certifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Future Focus</h3>
                  <p className="text-muted-foreground">
                    Healthcare software entrepreneurship combining technical and medical expertise. 
                    Positioned to lead technical teams while maintaining hands-on development skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Beyond the Code</h2>
              <p className="text-xl text-muted-foreground">
                Core principles that guide my approach to technology and leadership
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Teaching Philosophy</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="italic text-muted-foreground">
                    &ldquo;Complex concepts become simple when broken into the right steps. 
                    I&apos;ve taught everyone from complete beginners to experienced developers 
                    looking to level up their skills.&rdquo;
                  </blockquote>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Work Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="italic text-muted-foreground">
                    &ldquo;Every line of code should serve a business purpose. Beautiful code that 
                    doesn&apos;t solve real problems is just expensive art.&rdquo;
                  </blockquote>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Client Relationships</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="italic text-muted-foreground">
                    &ldquo;I don&apos;t just deliver projects - I deliver understanding. Clients should 
                    know how their systems work and how to maintain them.&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Consistent Development Activity</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1,482</div>
                <div className="text-muted-foreground">Contributions in the last year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Multiple</div>
                <div className="text-muted-foreground">Active repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Daily</div>
                <div className="text-muted-foreground">Coding commitment</div>
              </div>
            </div>

            <div className="aspect-[3/1] bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-green-800">GitHub Contribution Calendar</div>
                <div className="text-green-700">Consistent daily activity throughout the year</div>
              </div>
            </div>

            <Button asChild>
              <Link href="https://github.com" className="inline-flex items-center space-x-2">
                <span>View My GitHub Profile</span>
                <span>→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground">
              Let&apos;s discuss how my unique background can benefit your technical initiatives
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">🏥</div>
                <div className="font-semibold">Healthcare-level attention to detail</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⭐</div>
                <div className="font-semibold">Proven educator with perfect ratings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="font-semibold">Full-stack + automation expertise</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">👨‍💼</div>
                <div className="font-semibold">Leadership and management ready</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View My Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 