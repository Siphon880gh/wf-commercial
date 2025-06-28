"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, Quote } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Real Results, <span className="text-primary">Real Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See what clients, students, and supervisors say about working with a developer who delivers exceptional results
            </p>
            
            <div className="flex justify-center space-x-8">
              <Badge variant="secondary" className="text-lg px-4 py-2">100% Client Satisfaction</Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">5/5 Star Student Rating</Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">Enterprise Client Proven</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 border-b">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-8 text-lg px-4 py-2">🌟 MOST IMPACTFUL FEEDBACK</Badge>
            
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="text-center space-y-6">
                <Quote className="h-12 w-12 text-primary mx-auto" />
                <blockquote className="text-3xl font-bold leading-relaxed">
                  &ldquo;Weng is a &lsquo;Master&rsquo; coder. It took him about 5 minutes to fix a problem that was taking days to figure out.&rdquo;
                </blockquote>
                <div className="space-y-2">
                  <div className="text-xl font-semibold">Jeff Cohen</div>
                  <div className="text-lg text-muted-foreground">eLearning and Digital Instruction Coordinator</div>
                  <div className="text-primary font-medium">Pennsylvania Institute of Technology</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    💡 Context: Technical problem-solving that saved days of development time
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Enterprise & Agency Client Results</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leading companies for mission-critical projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge>Agency Collaboration</Badge>
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">Sterling Williams</CardTitle>
                <CardDescription className="text-lg">Lead Web and Graphic Designer, The Web Stylist</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic">
                  &ldquo;Weng has been such a blessing #Godsend on a number of projects… combined with just being a great guy, I knew we were meant to work together forever on any project I needed a dev on. Highly recommend!&rdquo;
                </blockquote>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    🎯 Business Impact: Long-term partnership, consistent quality delivery
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  Project Context: Multiple high-stakes client projects requiring reliable development partnership
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge>Platform Development</Badge>
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">Numair Qureshi</CardTitle>
                <CardDescription className="text-lg">Senior Web Designer, The Magnolia Designer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic">
                  &ldquo;Weng is an incredibly gifted developer… He has also worked with exceptional job for Mixotype, ensuring our platform works to specifications. Best developer you can hire.&rdquo;
                </blockquote>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    🎯 Business Impact: Platform stability, specification compliance
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  Project Context: Complex platform development and maintenance for Mixotype
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge>Technical Expertise</Badge>
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">Isaac Mathias</CardTitle>
                <CardDescription className="text-lg">Digital Creator / UI/UX Designer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic">
                  &ldquo;Weng fei is a very all he does especially PHP and mysql… recommend him for any job related to his skills.&rdquo;
                </blockquote>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    🎯 Business Impact: Technical excellence in backend development
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  Project Context: PHP and MySQL development projects requiring database expertise
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge>Innovative Solutions</Badge>
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">Vano Spada</CardTitle>
                <CardDescription className="text-lg">CEO and Founder, VEZAT TV</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic">
                  &ldquo;Well versed in javascript and jQuery developing solutions to uncommon problems… Added real-time switching between live stream and a third party video player.&rdquo;
                </blockquote>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    🎯 Business Impact: Innovative solution for unique technical challenge
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  Project Context: Complex video streaming integration requiring custom JavaScript solutions
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Excellence */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Educational Excellence: 5-Star Rated Instructor</h2>
            <p className="text-xl text-muted-foreground">
              Perfect ratings from students and supervisors prove teaching effectiveness
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary">5/5</div>
              <div className="text-xl font-semibold">Average Student Rating</div>
              <div className="text-muted-foreground">Perfect score from all students who provided feedback</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary">100%</div>
              <div className="text-xl font-semibold">Supervisor Approval</div>
              <div className="text-muted-foreground">Consistently outperforms team averages</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary">Senior</div>
              <div className="text-xl font-semibold">Tutor Level</div>
              <div className="text-muted-foreground">EdX bootcamp senior tutor across multiple cohorts</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">Student Feedback Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="text-center space-y-6 p-8">
                        <div className="text-4xl">👏</div>
                        <h3 className="text-2xl font-bold">Supervisor Recognition</h3>
                        <p className="text-lg text-muted-foreground">
                          My supervisors giving me a shout out on the Slack platform which we use for Full Stack Coding Bootcamp students to reach us.
                        </p>
                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl text-blue-600">💬</div>
                            <div className="text-blue-800 font-semibold">Slack Supervisor Shoutout</div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="text-center space-y-6 p-8">
                        <div className="text-4xl">⭐</div>
                        <h3 className="text-2xl font-bold">Perfect Student Ratings</h3>
                        <p className="text-lg text-muted-foreground">
                          Excellent ratings. Rating Percentage is how many Full Stack Coding Bootcamp students actually gave a score… My Average Rating is 5 out of 5. I outperform the Goal Average Rating.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-green-800 font-bold">🏆 Outperforms team average consistently</p>
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl text-green-600">📊</div>
                            <div className="text-green-800 font-semibold">5/5 Star Rating Dashboard</div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="text-center space-y-6 p-8">
                        <div className="text-4xl">📈</div>
                        <h3 className="text-2xl font-bold">Team Performance Metrics</h3>
                        <p className="text-lg text-muted-foreground">
                          I consistently outperform the team at comparison metric Team vs You.
                        </p>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <p className="text-purple-800 font-bold">🚀 Top performer in competitive environment</p>
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl text-purple-600">📊</div>
                            <div className="text-purple-800 font-semibold">Team vs Individual Performance</div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Teaching Specializations</CardTitle>
                <CardDescription>Advanced topics where I excel as an educator</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">React State Management</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Context & Reducers</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Redux Toolkit</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">GraphQL Implementation</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Sequelize ORM</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Handlebars Templating</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results-Focused Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why These Testimonials Matter for Your Business</h2>
            <p className="text-xl text-muted-foreground">
              Real feedback translates to real value for your technical initiatives
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">🚀</div>
                <CardTitle>Problem-Solving Speed</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-primary">
                  &ldquo;5 minutes to fix a problem that was taking days&rdquo;
                </blockquote>
                <p className="text-muted-foreground">
                  <strong>Business Value:</strong> Faster time-to-market, reduced development costs, quick resolution of blocking issues
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">🤝</div>
                <CardTitle>Long-term Partnership Value</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-primary">
                  &ldquo;We were meant to work together forever on any project&rdquo;
                </blockquote>
                <p className="text-muted-foreground">
                  <strong>Business Value:</strong> Reliable development partner you can count on, consistent quality across projects
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">⭐</div>
                <CardTitle>Consistent Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-primary">
                  &ldquo;Perfect 5/5 rating, outperforms team average&rdquo;
                </blockquote>
                <p className="text-muted-foreground">
                  <strong>Business Value:</strong> Quality you can depend on every single time, predictable high-standard delivery
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">💡</div>
                <CardTitle>Innovation Under Pressure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-primary">
                  &ldquo;Solutions to uncommon problems… real-time switching&rdquo;
                </blockquote>
                <p className="text-muted-foreground">
                  <strong>Business Value:</strong> Creative solutions when standard approaches fail, breakthrough technical innovations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Trusted Across Industries</h2>
            <p className="text-xl text-muted-foreground">
              Diverse client base demonstrates adaptability and technical breadth
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🏥</div>
                <CardTitle>Healthcare Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">People&apos;s Care</div>
                  <div className="text-muted-foreground">HIPAA-compliant systems, patient data management</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">💪</div>
                <CardTitle>Fitness & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">ExRx.net</div>
                  <div className="text-muted-foreground">Exercise databases, API development, high-volume data</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🏠</div>
                <CardTitle>Real Estate Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">VideoListings.AI</div>
                  <div className="text-muted-foreground">AI integration, video processing, MLS systems</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🎓</div>
                <CardTitle>Education Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">EdX Bootcamps</div>
                  <div className="text-muted-foreground">Learning management, student success, curriculum delivery</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">📺</div>
                <CardTitle>Media & Streaming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">VEZAT TV</div>
                  <div className="text-muted-foreground">Video streaming, real-time switching, custom solutions</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section id="consultation" className="py-20 bg-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Join These Satisfied Clients?</h2>
            <p className="text-xl text-muted-foreground">
              Experience the same level of technical excellence and problem-solving that earned these testimonials
            </p>
            
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-sm">Master-level problem solving</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-semibold text-sm">Long-term partnership approach</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⭐</div>
                <div className="font-semibold text-sm">Perfect quality track record</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💡</div>
                <div className="font-semibold text-sm">Innovative solutions for unique challenges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🗣️</div>
                <div className="font-semibold text-sm">Clear communication and teaching ability</div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Consultation</CardTitle>
                <CardDescription className="text-lg">
                  Let&apos;s discuss how I can deliver similar results for your project
                </CardDescription>
              </CardHeader>
              <CardContent>
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

                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium">Project Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What type of project do you have?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leadership">Technical Leadership Role</SelectItem>
                        <SelectItem value="development">Full-Stack Development Project</SelectItem>
                        <SelectItem value="automation">Business Automation (n8n)</SelectItem>
                        <SelectItem value="training">Team Training & Education</SelectItem>
                        <SelectItem value="consulting">Technical Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="challenge" className="text-sm font-medium">Your Challenge</label>
                    <Textarea 
                      id="challenge" 
                      placeholder="Describe your technical challenge or what you hope to achieve..."
                      rows={4}
                    />
                  </div>

                  <Button size="lg" className="w-full text-lg">
                    Book Free Strategy Session
                  </Button>

                  <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="text-center">
                      <div className="text-green-600 mb-1">✓</div>
                      <div>30-minute consultation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-600 mb-1">✓</div>
                      <div>No sales pressure</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-600 mb-1">✓</div>
                      <div>Actionable insights guaranteed</div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 