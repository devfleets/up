import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Award, Heart, ArrowRight, Target, Eye, Handshake } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { siteData } from "@/lib/data"

export default function AboutPage() {
  const { aboutPage } = siteData

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
          <h1 className="heading-primary text-red-800 mb-6">{aboutPage.header.title}</h1>
          <div className="section-divider w-24 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{aboutPage.header.description}</p>
        </div>

        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="heading-secondary text-red-800 mb-8">{aboutPage.foundationStory.title}</h2>
              <div className="space-y-6 text-gray-700">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-red-800">{aboutPage.foundationStory.year}</strong>{" "}
                    {aboutPage.foundationStory.paragraph1}
                  </p>
                </div>
                <p className="text-lg leading-relaxed">{aboutPage.foundationStory.paragraph2}</p>
                <p className="text-lg leading-relaxed">{aboutPage.foundationStory.paragraph3}</p>
              </div>
              <Button asChild className="btn-traditional mt-6 group">
                <Link href="/team">
                  {aboutPage.foundationStory.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 shadow-xl">
                <Image
                  src="/images/shivgarjana-logo.png"
                  alt="Foundation Story"
                  width={400}
                  height={200}
                  className="mx-auto opacity-70"
                />
                <Badge className="absolute top-4 left-4 bg-orange-600 text-white shadow-lg">
                  {aboutPage.foundationStory.badgeText}
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-lg bg-gradient-to-br from-red-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-4">{aboutPage.missionVisionValues.mission.title}</h3>
                <p className="text-gray-700">{aboutPage.missionVisionValues.mission.description}</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-4">{aboutPage.missionVisionValues.vision.title}</h3>
                <p className="text-gray-700">{aboutPage.missionVisionValues.vision.description}</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg bg-gradient-to-br from-red-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-4">{aboutPage.missionVisionValues.values.title}</h3>
                <p className="text-gray-700">{aboutPage.missionVisionValues.values.description}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="heading-secondary text-red-800 text-center mb-12">{aboutPage.milestones.title}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 to-orange-600"></div>

              <div className="space-y-12">
                {aboutPage.milestones.items.map((milestone, index) => {
                  let IconComponent
                  let colorClass
                  if (index % 2 === 0) {
                    IconComponent = index === 0 ? Calendar : Award
                    colorClass = "bg-red-600"
                  } else {
                    IconComponent = index === 1 ? Award : Users
                    colorClass = "bg-orange-600"
                  }
                  return (
                    <div key={index} className="relative flex items-start">
                      <div
                        className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center text-white shadow-lg z-10`}
                      >
                        {IconComponent && <IconComponent className="h-6 w-6" />}
                      </div>
                      <div className="ml-8 flex-1">
                        <Card className="card-hover shadow-lg bg-white">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-3">
                              <Badge
                                variant="outline"
                                className="text-orange-600 border-orange-600 font-bold text-lg px-3 py-1"
                              >
                                {milestone.year}
                              </Badge>
                              <h3 className="text-xl font-bold text-red-800">{milestone.title}</h3>
                            </div>
                            <p className="text-gray-700">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-12">
          <h2 className="heading-secondary text-red-800 text-center mb-12">{aboutPage.valuesGrid.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutPage.valuesGrid.items.map((value, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-12">
          <h2 className="heading-secondary mb-6">{aboutPage.joinCta.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{aboutPage.joinCta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 shadow-lg group">
              <Link href="/contact">
                <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {aboutPage.joinCta.buttonJoin}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent group"
            >
              <Link href="/contact">
                {aboutPage.joinCta.buttonContact}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
