"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, X, Phone } from "lucide-react"
import { siteData } from "@/lib/data"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { header } = siteData

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/shivgarjana-logo.png" alt="शिवगर्जना" width={200} height={64} className="h-16 w-auto" style={{ width: 'auto', height: '4rem' }} />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {header.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${header.phoneNumber.replace(/\s/g, "")}`}
              className="text-red-600 hover:text-red-700 font-medium text-sm"
            >
              <Phone className="inline h-4 w-4 mr-1" />
              {header.phoneNumber}
            </a>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Mobile navigation menu for the website</SheetDescription>
              <div className="flex items-center justify-between mb-8">
                <Image
                  src="/images/shivgarjana-logo.png"
                  alt="शिवगर्जना"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                  style={{ width: 'auto', height: '2.5rem' }}
                />
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-6">
                {header.navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 border-t space-y-4">
                  <a
                    href={`tel:${header.phoneNumber.replace(/\s/g, "")}`}
                    className="flex items-center text-red-600 font-medium"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    {header.phoneNumber}
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
