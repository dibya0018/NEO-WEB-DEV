import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/new_logo.png"
                alt="NeoTrueNorth Hospitals Logo"
                width={200}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 leading-relaxed">
              Smart Emergency Care Hospitals. When every second counts, we respond.
            </p>
            <div className="flex items-center gap-3 text-background/70">
              <Phone className="h-5 w-5" />
              <span className="font-semibold text-background whitespace-nowrap">99000 89601</span>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
           
            <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 mt-4">
             {/* Google Play */}
             <div className="flex flex-col items-center">
            <img
             src="/scan_1.png"
             alt="Google Play QR Code"
             className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-1"
             />
             <a 
              href="https://play.google.com/store/apps/details?id=com.better.neotruenorth&hl=en_US" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-28 sm:w-32 -mt-1"
            >
             <img
             src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
               alt="Get it on Google Play"
             className="w-full h-auto"
              style={{ maxHeight: '45px' }}
               />
            </a>
           </div>

       {/* App Store */}
             <div className="flex flex-col items-center">
             <img
               src="/scan_2.png"
               alt="App Store QR Code"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-2"
                 />
                 <a 
                    href="https://apps.apple.com/in/app/neo-tru-north-hospitals/id6756440509" 
                   target="_blank"
                    rel="noopener noreferrer"
                    className="block w-28 sm:w-32"
                      >
                    <img
                     src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                     alt="Download on the App Store"
                     className="w-full h-auto"
                     style={{ maxHeight: '28px' }}
                  />
                 </a>
                </div>
           </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link href="/" className="hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dad" className="hover:text-background transition-colors">
                  D.A.D Service
                </Link>
              </li>
              <li>
                <Link href="/emergency-card" className="hover:text-background transition-colors">
                  Emergency Card
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/founder" className="hover:text-background transition-colors">
                  Founder Message
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-background transition-colors">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Emergency Services</h4>
            <ul className="space-y-3 text-background/70">
              <li>Cardiac Emergency</li>
              <li>Stroke Care</li>
              <li>Trauma Care</li>
              <li>Respiratory Emergency</li>
              <li>Sepsis Treatment</li>
              <li>Poisoning Treatment</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-semibold text-background">Emergency Helpline</p>
                  <p className="whitespace-nowrap">99000 89601</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5" />
                <div>
                  <p>info@neotruenorth.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>
                    Sy. No. 110/4, Rebus Realm 1, Neeladri Rd, Doddathoguru, Electronic City, Bengaluru, Karnataka
                    560100
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-background/60 text-sm">
           © {new Date().getFullYear()} Neo TrueNorth. All rights reserved | Developed by{' '}
           <a 
              href="https://www.bipminds.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline hover:text-background transition-colors"
            >
           BIPMINDS
          </a>
          .
          </p>
          <div className="flex gap-6 text-background/60 text-sm">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
