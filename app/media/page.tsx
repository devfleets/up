"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Camera, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { siteData } from "@/lib/data"
import { openWhatsAppChat } from "@/lib/utils"

export default function MediaPage() {
  const { mediaPage } = siteData

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">{mediaPage.header.title}</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{mediaPage.header.description}</p>
        </div>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-red-800 flex items-center gap-3">
              <Camera className="h-8 w-8" />
              {mediaPage.photoGallery.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaPage.photoGallery.galleries.map((gallery, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-lg transition-shadow cursor-pointer card-3d tilt-effect ${gallery.featured ? "ring-2 ring-orange-600 rotating-border" : "border-orange-200"}`}
              >
                <div className="relative">
                  <Image
                    src={gallery.thumbnail || "/placeholder.svg"}
                    alt={gallery.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {gallery.featured && (
                    <Badge className="absolute top-3 left-3 bg-orange-600 text-white">Featured</Badge>
                  )}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {gallery.count}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-red-800 mb-2">{gallery.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{gallery.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{gallery.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-red-800 flex items-center gap-3">
              <Play className="h-8 w-8" />
              {mediaPage.videoGallery.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaPage.videoGallery.videos.map((video, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${video.featured ? "ring-2 ring-red-600" : "border-orange-200"}`}
              >
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {video.featured && <Badge className="absolute top-3 left-3 bg-red-600 text-white">Featured</Badge>}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors btn-3d">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-red-800 mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{video.views}</span>
                    <span>{video.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-red-800 to-orange-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{mediaPage.youtubeCta.title}</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">{mediaPage.youtubeCta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-800 hover:bg-gray-100">
              <Play className="mr-2 h-5 w-5" />
              {mediaPage.youtubeCta.buttonVisit}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-800 bg-transparent"
            >
              {mediaPage.youtubeCta.buttonSubscribe}
            </Button>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-red-800 text-center mb-8">{mediaPage.socialMedia.title}</h2>
          <div className="flex justify-center gap-6">
            {mediaPage.socialMedia.links.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={social.name === "WhatsApp" ? (e) => { e.preventDefault(); openWhatsAppChat(); } : undefined}
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 transform duration-200">
                  <CardContent className="p-4 text-center">
                    <div
                      className={`w-12 h-12 ${social.color} rounded-full mx-auto mb-3 flex items-center justify-center`}
                    >
                      <span className="text-white font-bold">{social.name[0]}</span>
                    </div>
                    <h3 className="font-bold text-gray-800">{social.name}</h3>
                    <p className="text-sm text-gray-600">{social.handle}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
