"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Calendar, Music, Flag, Star, Award, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { siteData } from "@/lib/data"
import {  openWhatsAppChatWithMessage } from "@/lib/utils"

export default function HomePage() {
  const [showLogo, setShowLogo] = useState(false)
  const { homePage } = siteData

  useEffect(() => {
    setShowLogo(true)
  }, [])

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50"></div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div
            className={`mb-8 transform transition-all duration-1000 ease-out ${
              showLogo ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <Image
              src="/images/shivgarjana-logo.png"
              alt={homePage.hero.altText}
              width={600}
              height={200}
              className="mx-auto"
              priority
            />
          </div>

          <div>
            <h1 className="heading-primary text-gray-800 mb-6">{homePage.hero.title}</h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium max-w-3xl mx-auto">
              {homePage.hero.tagline}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {homePage.hero.stats.map((stat, index) => {
                let IconComponent
                let colorClass
                switch (stat.icon) {
                  case "Music":
                    IconComponent = Music
                    colorClass = "text-red-600"
                    break
                  case "Flag":
                    IconComponent = Flag
                    colorClass = "text-orange-600"
                    break
                  case "Users":
                    IconComponent = Users
                    colorClass = "text-red-600"
                    break
                  case "Calendar":
                    IconComponent = Calendar
                    colorClass = "text-orange-600"
                    break
                  default:
                    IconComponent = Music
                    colorClass = "text-red-600"
                }
                return (
                  <div key={index} className="stat-item text-center">
                    <div className={`${colorClass} mb-2 flex justify-center`}>
                      {IconComponent && <IconComponent className="h-8 w-8" />}
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-traditional pulse-soft">
                <Play className="mr-2 h-5 w-5" />
                {homePage.hero.buttonPerformance}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                onClick={() => openWhatsAppChatWithMessage()}
              >
                <Phone className="mr-2 h-5 w-5" />
                {homePage.hero.buttonBookNow}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary text-red-800 mb-8">{homePage.aboutSection.title}</h2>
            <div className="section-divider w-24 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{homePage.aboutSection.description}</p>
            <Button
              asChild
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
            >
              <Link href="/about">{homePage.aboutSection.buttonText}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          <h2 className="heading-secondary text-red-800 text-center mb-12">{homePage.achievementsSection.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {homePage.achievementsSection.achievements.map((achievement, index) => {
              let IconComponent
              let colorClass
              switch (achievement.icon) {
                case "Award":
                  IconComponent = Award
                  colorClass = "bg-gradient-to-br from-red-500 to-red-600"
                  break
                case "Star":
                  IconComponent = Star
                  colorClass = "bg-gradient-to-br from-orange-500 to-orange-600"
                  break
                case "Users":
                  IconComponent = Users
                  colorClass = "bg-gradient-to-br from-red-500 to-orange-500"
                  break
                default:
                  IconComponent = Award
                  colorClass = "bg-gradient-to-br from-red-500 to-red-600"
              }
              return (
                <Card key={index} className="card-hover border-0 shadow-lg decorative-corner">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                    </div>
                    <div className="text-4xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-secondary text-red-800 text-center mb-12">{homePage.recentEventsSection.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {homePage.recentEventsSection.events.map((event, index) => (
              <Card key={index} className={`card-hover overflow-hidden ${event.featured ? "ring-2 ring-red-500" : ""}`}>
                <div className="relative image-overlay">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  {event.featured && <Badge className="absolute top-3 right-3 bg-red-600 text-white">Featured</Badge>}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.location}</p>
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    {event.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
            >
              <Link href="/events">{homePage.recentEventsSection.buttonText}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          <h2 className="heading-secondary text-red-800 text-center mb-12">{homePage.servicesSection.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {homePage.servicesSection.services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md card-hover text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{homePage.contactInfoSection.title}</h3>
              <p className="text-gray-600">{homePage.contactInfoSection.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${homePage.contactInfoSection.phoneNumber}`}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                <Phone className="h-6 w-6" />
                {homePage.contactInfoSection.buttonCall}
              </a>
              <a
                href={`mailto:${homePage.contactInfoSection.emailAddress}`}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                <Mail className="h-6 w-6" />
                {homePage.contactInfoSection.buttonEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
