import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ClinicData {
  name: string
  address: string
  phone: string
  email: string
  hours: Array<{ day: string; time: string }>
  amenities: string[]
}

export default function DoctorClinic({ clinic }: { clinic: ClinicData }) {
  return (
    <section id="clinic" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Clinic Information
          </h2>
          <div className="h-1 w-20 bg-teal mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-4 animate-slide-in">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-light-blue button-pulse">
                  <MapPin className="h-6 w-6 text-teal" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Clinic Location
                </h3>
                <p className="text-muted-foreground">{clinic.address}</p>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-in animation-delay-100">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-light-blue button-pulse">
                  <Phone className="h-6 w-6 text-teal" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Phone
                </h3>
                <a
                  href={`tel:${clinic.phone}`}
                  className="text-muted-foreground hover:text-teal transition-colors"
                >
                  {clinic.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-in animation-delay-200">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-light-blue button-pulse">
                  <Mail className="h-6 w-6 text-teal" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Email
                </h3>
                <a
                  href={`mailto:${clinic.email}`}
                  className="text-muted-foreground hover:text-teal transition-colors"
                >
                  {clinic.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Amenities */}
          <div className="space-y-8">
            <div className="animate-slide-in animation-delay-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-light-blue button-pulse">
                  <Clock className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Hours of Operation
                </h3>
              </div>
              <div className="space-y-2 ml-4">
                {clinic.hours.map((hour, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-muted-foreground"
                  >
                    <span className="font-medium">{hour.day}</span>
                    <span>{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-light-blue rounded-xl p-6 animate-slide-in animation-delay-400">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Clinic Amenities
              </h3>
              <ul className="space-y-3">
                {clinic.amenities.map((amenity, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="text-teal font-bold">✓</span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="button-bounce bg-teal hover:bg-teal/90 text-white px-8 py-6 rounded-xl text-lg font-semibold">
            Book Your Appointment Now
          </Button>
        </div>
      </div>
    </section>
  )
}
