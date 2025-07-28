import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, Music, Flag, Users, Heart, Star, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { siteData } from "@/lib/data"

export default function TeamPage() {
  const { teamPage } = siteData

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-8">
            <Image
              src="/images/shivgarjana-logo.png"
              alt="शिवगर्जना"
              width={300}
              height={100}
              className="mx-auto opacity-80"
            />
          </div>
          <h1 className="heading-primary text-red-800 mb-6">{teamPage.header.title}</h1>
          <div className="section-divider w-24 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{teamPage.header.description}</p>
        </div>

        <section className="mb-20">
          <h2 className="heading-secondary text-red-800 text-center mb-12">{teamPage.leadership.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamPage.leadership.members.map((leader, index) => {
              let IconComponent
              let colorClass
              switch (leader.role) {
                case "संस्थापक अध्यक्ष":
                  IconComponent = Crown
                  colorClass = "bg-gradient-to-br from-red-600 to-red-700"
                  break
                case "महिला विभाग प्रमुख":
                  IconComponent = Heart
                  colorClass = "bg-gradient-to-br from-orange-600 to-orange-700"
                  break
                case "मुख्य समन्वयक":
                  IconComponent = Users
                  colorClass = "bg-gradient-to-br from-red-500 to-orange-600"
                  break
                default:
                  IconComponent = Crown
                  colorClass = "bg-gradient-to-br from-red-600 to-red-700"
              }
              return (
                <Card key={index} className="card-hover border-0 shadow-xl bg-white overflow-hidden">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 h-48 flex items-center justify-center">
                      <Image
                        src="/images/shivgarjana-logo.png"
                        alt={leader.name}
                        width={150}
                        height={60}
                        className="object-contain opacity-60"
                      />
                    </div>
                    <div className={`absolute top-4 right-4 ${colorClass} text-white p-3 rounded-full shadow-lg`}>
                      {IconComponent && <IconComponent className="h-6 w-6" />}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-2">{leader.name}</h3>
                    <Badge className="bg-orange-100 text-orange-800 mb-3 px-3 py-1">{leader.role}</Badge>
                    <p className="text-gray-600 mb-3 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-orange-600" />
                      अनुभव: {leader.experience}
                    </p>
                    <blockquote className="italic text-gray-700 border-l-4 border-orange-600 pl-4 bg-orange-50 p-3 rounded">
                      "{leader.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="heading-secondary text-red-800 text-center mb-12 flex items-center justify-center gap-3">
            <Music className="h-8 w-8" />
            {teamPage.dholMasters.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamPage.dholMasters.members.map((master, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg bg-gradient-to-br from-white to-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{master.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-red-800">{master.name}</h3>
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        {master.speciality}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2 flex items-center">
                    <Star className="h-4 w-4 mr-2 text-orange-600" />
                    अनुभव: {master.experience}
                  </p>
                  <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-600">
                    <p className="text-sm text-gray-700">🏆 {master.achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="heading-secondary text-red-800 text-center mb-12 flex items-center justify-center gap-3">
            <Flag className="h-8 w-8" />
            {teamPage.flagLeaders.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamPage.flagLeaders.members.map((leader, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg bg-gradient-to-br from-white to-red-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{leader.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-red-800">{leader.name}</h3>
                      <Badge variant="outline" className="text-red-600 border-red-600">
                        {leader.speciality}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2 flex items-center">
                    <Star className="h-4 w-4 mr-2 text-red-600" />
                    अनुभव: {leader.experience}
                  </p>
                  <div className="bg-red-50 p-3 rounded border-l-4 border-red-600">
                    <p className="text-sm text-gray-700">🏆 {leader.achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-12">
          <h2 className="heading-secondary text-red-800 text-center mb-12">{teamPage.teamStats.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamPage.teamStats.stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-12">
          <h2 className="heading-secondary mb-6">{teamPage.joinTeamCta.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{teamPage.joinTeamCta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 shadow-lg group">
              <Link href="/contact">
                <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {teamPage.joinTeamCta.buttonJoin}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent group"
            >
              <Link href="/contact">
                {teamPage.joinTeamCta.buttonMoreInfo}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
