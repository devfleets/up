import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, Star } from "lucide-react"
import Image from "next/image"
import { siteData } from "@/lib/data"

export default function EventsPage() {
  const { eventsPage } = siteData

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">{eventsPage.header.title}</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{eventsPage.header.description}</p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-red-800 mb-8 flex items-center gap-3">
            <Calendar className="h-8 w-8" />
            {eventsPage.upcomingEvents.title}
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {eventsPage.upcomingEvents.events.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-orange-200 card-3d">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-3 right-3 ${
                      event.status === "confirmed" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"
                    }`}
                  >
                    {event.status === "confirmed" ? "निश्चित" : "प्रलंबित"}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-3">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  <Badge variant="outline" className="text-orange-600 border-orange-600 mb-4">
                    {event.mandal}
                  </Badge>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">अधिक माहिती</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-red-800 mb-8">{eventsPage.pastEvents.title}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsPage.pastEvents.events.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-orange-200">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 flex">
                    {[...Array(event.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-red-800 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-700 mb-3">{event.description}</p>

                  <div className="space-y-1 mb-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-3 w-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <Badge variant="outline" className="text-orange-600 border-orange-600 mb-3 text-xs">
                    {event.mandal}
                  </Badge>

                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm text-gray-800">मुख्य आकर्षणे:</h4>
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                        <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-red-800 text-center mb-8">{eventsPage.eventStatistics.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {eventsPage.eventStatistics.stats.map((stat, index) => {
              let IconComponent
              switch (stat.icon) {
                case "Calendar":
                  IconComponent = Calendar
                  break
                case "Users":
                  IconComponent = Users
                  break
                case "Star":
                  IconComponent = Star
                  break
                default:
                  IconComponent = Calendar
              }
              return (
                <div key={index} className="text-center float-animation">
                  <div className="text-orange-600 mb-3 flex justify-center">
                    {IconComponent && <IconComponent className="h-8 w-8" />}
                  </div>
                  <div className="text-3xl font-bold text-red-800 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-gradient-to-r from-red-800 to-orange-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{eventsPage.bookUsCta.title}</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">{eventsPage.bookUsCta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-800 hover:bg-gray-100">
              {eventsPage.bookUsCta.buttonBookNow}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-800 bg-transparent"
            >
              {eventsPage.bookUsCta.buttonKnowPrice}
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
