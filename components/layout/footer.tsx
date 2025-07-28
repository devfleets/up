import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import { siteData } from "@/lib/data"

export default function Footer() {
  const { footer } = siteData

  return (
    <footer className="bg-gradient-to-r from-red-800 to-orange-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/shivgarjana-logo.png"
                alt="शिवगर्जना"
                width={200}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-6">{footer.description}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/shivgarjana_pune12?igsh=OTcyeDlocHEyOWc2"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">{footer.quickLinksTitle}</h3>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/90 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">{footer.servicesTitle}</h3>
            <ul className="space-y-3 text-white/90">
              {footer.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">{footer.contactInfoTitle}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="text-sm text-white/90">
                  <p>{footer.addressLine1}</p>
                  <p>{footer.addressLine2}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm text-white/90">{footer.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm text-white/90">{footer.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/90 text-sm">{footer.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={footer.privacyPolicy.href} className="text-white/90 hover:text-white text-sm transition-colors">
              {footer.privacyPolicy.name}
            </Link>
            <Link
              href={footer.termsAndConditions.href}
              className="text-white/90 hover:text-white text-sm transition-colors"
            >
              {footer.termsAndConditions.name}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
