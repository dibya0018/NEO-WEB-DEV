import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import { PrivacyPolicyDialog } from "./privacy-policy-dialog"
import { TermsOfServiceDialog } from "./terms-of-service-dialog"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 items-start">
          <div className="space-y-4 text-center sm:text-left">
            <Link href="/" className="flex items-center justify-center sm:justify-start gap-2 -mt-5 sm:-mt-7">
              <Image
                src="logo.png"
                alt="NeoTrueNorth Hospitals Logo"
                width={200}
                height={50}
                className="h-16 sm:h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 leading-relaxed">
              Emergency 1st Hospitals. When every second counts, we respond.
            </p>
            {/* <div className="flex items-center gap-3 text-background/70">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <a href="tel:+919900089601" className="font-semibold text-background hover:underline whitespace-nowrap">+91 99000 89601</a>
            </div> */}
           
            <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 mt-6 justify-center sm:justify-start items-start">
              {/* Google Play */}
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <img
                  src="/scan_1.png"
                  alt="Google Play QR Code"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
                <a
                  href="https://play.google.com/store/apps/details?id=com.better.neotruenorth&hl=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-28 sm:w-32 h-[40px] transition-opacity hover:opacity-80 flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="w-100 h-100 object-contain "
                  />
                </a>
              </div>

              {/* App Store */}
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <img
                  src="/scan_2.png"
                  alt="App Store QR Code"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
                <a
                  href="https://apps.apple.com/in/app/neo-tru-north-hospitals/id6756440509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-28 sm:w-32 h-[40px] transition-opacity hover:opacity-80 flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="w-28 h-29 object-contain object-center"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 flex flex-col text-center sm:text-left">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-background/70 flex-1">
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
                  CEO Message
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-background transition-colors">
                  Locate Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 flex flex-col text-center sm:text-left -ml-0 sm:-ml-4 md:-ml-8 lg:-ml-12">
            <h4 className="font-semibold text-lg mb-4">24x7 Emergency Services</h4>
            <ul className="space-y-3 text-background/70 flex-1">
              {[
                { name: "General physician 24x7", href: "/Services#general-physician" },
                { name: "Pharmacy 24x7", href: "/Services#pharmacy" },
                { name: "Diagnostics 24x7", href: "/Services#diagnostics" },
                { name: "Ambulance 24x7", href: "/Services#ambulance" }
              ].map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="hover:underline hover:text-background">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 flex flex-col text-center sm:text-left -ml-0 sm:-ml-4 md:-ml-6 lg:-ml-8">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70 flex-1">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-background">Emergency Helpline</p>
                  <a href="tel:+919900089601" className="hover:underline whitespace-nowrap text-background/70 hover:text-background">
                    +91 99000 89601
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="pt-0.5">
                  <a href="mailto:contact@neotruenorthhospitals.com" className="hover:underline hover:text-background break-words">
                    contact@neotruenorthhospitals.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="leading-relaxed">
                    Sy. No. 110/4, Rebus Realm 1, Neeladri Rd, Doddathoguru, Electronic City, Bengaluru, Karnataka 560100
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 pt-2 justify-center sm:justify-start">
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-[10px] sm:text-xs md:text-sm text-center md:text-left flex-1 leading-tight">
            © {new Date().getFullYear()} Neo TrueNorth hospitals Pvt ltd. All rights reserved | Developed by{' '}
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
          <div className="flex flex-wrap gap-4 md:gap-6 text-background/60 text-sm justify-center items-center w-full md:w-auto">
            <PrivacyPolicyDialog />
            <TermsOfServiceDialog />
            <a href="#" className="hover:text-background transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
