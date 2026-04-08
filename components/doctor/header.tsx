"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar } from "lucide-react"

interface HeaderData {
  logo: string
  navigation: Array<{ label: string; href: string }>
  cta: {
    call: string
    callHref: string
    book: string
    bookHref: string
  }
}

export default function DoctorHeader({ data }: { data: HeaderData }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl text-teal">
            {data.logo}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {data.navigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-teal transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="button-bounce border-teal text-teal hover:bg-light-blue rounded-lg"
              asChild
            >
              <a href={data.cta.callHref}>
                <Phone className="w-4 h-4 mr-2" />
                {data.cta.call}
              </a>
            </Button>
            <Button
              size="sm"
              className="button-glow bg-teal hover:bg-teal/90 text-white rounded-lg shadow-md"
              asChild
            >
              <a href={data.cta.bookHref}>
                <Calendar className="w-4 h-4 mr-2" />
                {data.cta.book}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-teal hover:bg-light-blue transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-border animate-slide-in">
            <div className="space-y-1 px-2 pt-2 pb-4">
              {data.navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-muted-foreground hover:text-teal hover:bg-light-blue transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="button-bounce w-full justify-center border-teal text-teal hover:bg-light-blue rounded-lg"
                  asChild
                >
                  <a href={data.cta.callHref}>
                    <Phone className="w-4 h-4 mr-2" />
                    {data.cta.call}
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="button-glow w-full bg-teal hover:bg-teal/90 text-white rounded-lg shadow-md"
                  asChild
                >
                  <a href={data.cta.bookHref}>
                    <Calendar className="w-4 h-4 mr-2" />
                    {data.cta.book}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
