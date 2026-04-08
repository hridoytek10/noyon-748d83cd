"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

interface ContactField {
  name: string
  type: string
  placeholder: string
  required: boolean
}

interface ContactData {
  title: string
  subtitle: string
  formFields: ContactField[]
}

export default function DoctorContact({
  contact,
}: {
  contact: ContactData
}) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-light-blue via-white to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {contact.title}
          </h2>
          <div className="h-1 w-20 bg-teal mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            {contact.subtitle}
          </p>
        </div>

        {submitted && (
          <div className="mb-8 bg-teal/10 border border-teal rounded-lg p-4 flex items-center gap-3 animate-slide-in">
            <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
            <p className="text-teal font-medium">
              Thank you! We&apos;ll be in touch shortly.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {contact.formFields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {field.placeholder}
                    {field.required && (
                      <span className="text-teal">*</span>
                    )}
                  </label>
                  {field.type === "textarea" ? (
                    <Textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="rounded-lg border-border focus:ring-teal"
                      rows={4}
                    />
                  ) : (
                    <Input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="rounded-lg border-border focus:ring-teal"
                    />
                  )}
                </div>
              ))}
              <Button
                type="submit"
                className="button-bounce w-full bg-teal hover:bg-teal/90 text-white py-6 rounded-lg text-lg font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center animate-slide-in animation-delay-200">
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have questions about our services or want to schedule an appointment? We&apos;re here to help and will respond as soon as possible.
              </p>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Response Time:</strong> Within 24 hours
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Preferred Contact:</strong> Email or phone
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Available:</strong> Monday - Friday, 9 AM - 5 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
