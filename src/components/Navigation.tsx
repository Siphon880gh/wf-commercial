"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Phone, ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-professional">
      <div className="flex h-18 w-full items-center justify-between px-6">
        {/* Enhanced Logo and Tagline */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-brand-primary transition-colors duration-200">
              WENG INDUSTRY
            </span>
            <span className="text-sm text-healthcare-teal font-medium hidden xl:block">
              Technical Leadership That Delivers Results
            </span>
          </div>
        </Link>

        {/* Enhanced Main Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-background px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-brand-primary hover:text-white hover:shadow-professional focus:bg-brand-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-background px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-brand-primary hover:text-white hover:shadow-professional focus:bg-brand-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Services
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-background px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-brand-primary hover:text-white hover:shadow-professional focus:bg-brand-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Portfolio
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-background px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-brand-primary hover:text-white hover:shadow-professional focus:bg-brand-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/testimonials" className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-background px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-brand-primary hover:text-white hover:shadow-professional focus:bg-brand-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Testimonials
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/certificates" className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-background px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-brand-primary hover:text-white hover:shadow-professional focus:bg-brand-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Certificates
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Enhanced CTA Section */}
        <div className="flex items-center space-x-4">
          {/* Professional Phone Display */}
          {/* <div className="hidden xl:flex items-center space-x-2 bg-muted rounded-lg px-3 py-2 hover:bg-healthcare-teal hover:text-white transition-all duration-200 group">
            <Phone className="h-4 w-4 text-success-green group-hover:text-white" />
            <div className="flex flex-col">
              <span className="text-2xs text-muted-foreground group-hover:text-white/80 font-medium">Direct Line</span>
              <a href="tel:323-XXX-XXXX" className="font-bold text-sm hover:text-white transition-colors">
                323-XXX-XXXX
              </a>
            </div>
          </div> */}
          
          {/* Premium CTA Button */}
          <Button 
            asChild 
            className="hidden sm:flex bg-warning-orange hover:bg-warning-orange/90 text-white font-semibold px-6 py-2 h-10 shadow-professional hover:shadow-professional-lg transition-all duration-200 group"
          >
            <Link href="/contact" className="flex items-center space-x-2">
              <span>Book Free Consultation</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden hover:bg-brand-primary hover:text-white transition-colors duration-200"
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Toggle menu</span>
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="px-6 py-4 space-y-3">
            <Link 
              href="/" 
              className="block py-2 text-sm font-semibold hover:text-brand-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block py-2 text-sm font-semibold hover:text-brand-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className="block py-2 text-sm font-semibold hover:text-brand-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-sm font-semibold hover:text-brand-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/testimonials" 
              className="block py-2 text-sm font-semibold hover:text-brand-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="/certificates" 
              className="block py-2 text-sm font-semibold hover:text-brand-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Certificates
            </Link>
            
            {/* Mobile CTA */}
            {/* Removing - Dont want scrapers to telemarketers/scammers */}
            {/* <div className="pt-4 border-t">
              <div className="flex items-center space-x-2 mb-3">
                <Phone className="h-4 w-4 text-healthcare-teal" />
                <a href="tel:323-XXX-XXXX" className="font-bold text-sm hover:text-brand-primary transition-colors">
                  323-XXX-XXXX
                </a>
              </div>
              <Button 
                asChild 
                className="w-full bg-warning-orange hover:bg-warning-orange/90 text-white font-semibold"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Free Consultation
                </Link>
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </header>
  )
} 