"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react"
import { siteData } from "@/lib/data"
import { openWhatsAppChatWithMessage, buildWhatsAppContactMessage } from "@/lib/utils"

export default function ContactPage() {
  const { contactPage } = siteData

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  function handleWhatsAppSend(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const msg = buildWhatsAppContactMessage(form)
    openWhatsAppChatWithMessage(msg)
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">{contactPage.header.title}</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{contactPage.header.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-red-800 mb-6">{contactPage.contactInfo.title}</h2>
              <div className="space-y-6">
                <Card className="border-orange-200 card-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-red-800 mb-2">{contactPage.contactInfo.phone.title}</h3>
                        <p className="text-gray-700 mb-1">{contactPage.contactInfo.phone.main}</p>
                        <p className="text-gray-700 mb-1">{contactPage.contactInfo.phone.president}</p>
                        <p className="text-gray-700">{contactPage.contactInfo.phone.emergency}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 card-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-red-800 mb-2">
                          {contactPage.contactInfo.whatsapp.title}
                        </h3>
                        <p className="text-gray-700 mb-1">{contactPage.contactInfo.whatsapp.mainGroup}</p>
                        <p className="text-gray-700">{contactPage.contactInfo.whatsapp.quickReply}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 card-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-red-800 mb-2">{contactPage.contactInfo.email.title}</h3>
                        <p className="text-gray-700 mb-1">{contactPage.contactInfo.email.info}</p>
                        <p className="text-gray-700">{contactPage.contactInfo.email.booking}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 card-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-red-800 mb-2">{contactPage.contactInfo.address.title}</h3>
                        <p className="text-gray-700 mb-1">{contactPage.contactInfo.address.line1}</p>
                        <p className="text-gray-700 mb-1">{contactPage.contactInfo.address.line2}</p>
                        <p className="text-gray-700 mb-1">{contactPage.contactInfo.address.line3}</p>
                        <p className="text-gray-700">{contactPage.contactInfo.address.line4}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 card-3d">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-red-800 mb-2">{contactPage.contactInfo.hours.title}</h3>
                        <p className="text-gray-700 mb-1">{contactPage.contactInfo.hours.weekdays}</p>
                        <p className="text-gray-700 mb-1">{contactPage.contactInfo.hours.weekends}</p>
                        <p className="text-gray-700">{contactPage.contactInfo.hours.holiday}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-800 mb-4">{contactPage.socialMedia.title}</h3>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 btn-3d tilt-effect">
                  <Facebook className="mr-2 h-5 w-5" />
                  {contactPage.socialMedia.facebook}
                </Button>
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 btn-3d tilt-effect">
                  <Instagram className="mr-2 h-5 w-5" />
                  {contactPage.socialMedia.instagram}
                </Button>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 btn-3d tilt-effect">
                  <Youtube className="mr-2 h-5 w-5" />
                  {contactPage.socialMedia.youtube}
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Card className="border-orange-200 glass-effect">
              <CardHeader className="bg-gradient-to-r from-red-800 to-orange-600 text-white">
                <CardTitle className="text-2xl">{contactPage.contactForm.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleWhatsAppSend}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">
                        {contactPage.contactForm.firstName.label}
                      </Label>
                      <Input
                        id="firstName"
                        placeholder={contactPage.contactForm.firstName.placeholder}
                        className="mt-1"
                        value={form.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">
                        {contactPage.contactForm.lastName.label}
                      </Label>
                      <Input
                        id="lastName"
                        placeholder={contactPage.contactForm.lastName.placeholder}
                        className="mt-1"
                        value={form.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      {contactPage.contactForm.email.label}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={contactPage.contactForm.email.placeholder}
                      className="mt-1"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      {contactPage.contactForm.phone.label}
                    </Label>
                    <Input
                      id="phone"
                      placeholder={contactPage.contactForm.phone.placeholder}
                      className="mt-1"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">
                      {contactPage.contactForm.subject.label}
                    </Label>
                    <Input
                      id="subject"
                      placeholder={contactPage.contactForm.subject.placeholder}
                      className="mt-1"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      {contactPage.contactForm.message.label}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={contactPage.contactForm.message.placeholder}
                      className="mt-1"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                    {contactPage.contactForm.submitButton}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-red-800 text-center mb-8">{contactPage.mapSection.title}</h2>
          <Card className="border-orange-200 rounded-lg">
            <CardContent className="p-0">
               <div className="text-center text-gray-600 rounded-lg">
                  
                  <iframe
                  className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center"
              title="Our Location"
              src="https://www.google.com/maps?q=123,+Sanskriti+Bhavan,+Dadar+East,+Mumbai,+400014&output=embed"
              width="350"
              height="250"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
                </div>
              
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  )
}
