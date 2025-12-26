"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import Image from "next/image"

type NavLink = {
  href: string
  label: string
  external?: boolean
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
   { href: "/Services", label: "24x7 Emergency Services" },
  { href: "/dad", label: "D.A.D" },
  {href: "/emergency-card",label: "Emergency Card"},
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
<motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="sticky top-4 mx-4 z-50 bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-lg"
>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="NeoTrueNorth Hospitals Logo"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative ${
                    pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bg rounded-full"
                    />
                  )}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://wa.me/919900089601" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Chat on WhatsApp"
              className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-200 h-10 w-10 flex items-center justify-center shadow-lg"
            >
              <svg className="h-[35px] w-[35px] scale-190" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="12" cy="12" r="12" fill="#25D366"/>
                <path d="M17.472 14.382c-.301-.182-1.774-.872-2.05-.972-.276-.1-.476-.15-.677.15-.2.3-.77.974-.945 1.174-.174.198-.35.222-.646.075-.3-.15-1.263-.465-2.405-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.02-.465.13-.615.136-.135.3-.345.45-.523.146-.181.194-.301.297-.496.1-.21.05-.375-.025-.524-.076-.15-.675-1.62-.93-2.206-.24-.555-.49-.465-.675-.473l-.57-.006a1.08 1.08 0 00-.78.36c-.27.3-.99.96-.99 2.34 0 1.38 1.006 2.72 1.15 2.91.14.195 1.98 3.165 4.8 4.31.66.27 1.17.42 1.56.54.66.18 1.26.15 1.74.09.51-.06 1.56-.63 1.77-1.23.21-.6.21-1.14.15-1.23-.05-.09-.21-.15-.45-.27" fill="white"/>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 2.13.555 4.14 1.53 5.895L.15 24l6.255-1.68A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-6.63-5.37-12-12-12zm0 21.75c-2.13 0-4.14-.555-5.895-1.53l-4.2 1.125 1.14-4.11A10.2 10.2 0 011.5 12c0-5.79 4.71-10.5 10.5-10.5S22.5 6.21 22.5 12s-4.71 10.5-10.5 10.5z" fill="white"/>
              </svg>
            </a>
            <Button 
              variant="outline" 
              className="p-2 gradient-bg rounded-full border-0 hover:opacity-90 transition-all duration-200 h-10 w-10 text-white opacity-90 flex items-center justify-center" 
              asChild
            >
              <a href="tel:9900089601" aria-label="Call 99000 89601">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <button 
            className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-200" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div> {/* This closing div is for the container */}
        <AnimatePresence>
  {isMenuOpen && (
    <>
      {/* Overlay with blur effect - transparent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-transparent z-40"
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Menu container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-16 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl z-50 p-6"
      >
        
        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-lg font-medium ${
                pathname === link.href
                  ? 'bg-gradient-to-r from-[#65349E] to-[#F04A89] text-white'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:9900089601"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#65349E] to-[#F04A89] text-white mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone className="h-5 w-5" />
            99000 89601
          </a>
        </nav>
      </motion.div>
    </>
  )}
</AnimatePresence>
      </div>
    </motion.header>
  )
}
