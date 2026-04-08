import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Clock, Calendar } from "lucide-react"

interface HeroData {
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
  stats: Array<{ number: string; label: string }>
}

export default function DoctorHero({ data }: { data: HeroData }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-light-blue via-white to-white flex items-center justify-center px-4 py-20 mt-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="animate-fade-in-up">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-muted-foreground font-semibold mb-2">
              {data.subtitle}
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-muted-foreground">(100+ patient reviews)</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {data.description}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10">
            {data.stats.map((stat, index) => (
              <div key={index} className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-teal">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons with animations */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="button-bounce bg-teal hover:bg-teal/90 text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-2 shadow-lg">
              <Calendar className="w-5 h-5" />
              {data.cta}
            </Button>
            <Button variant="outline" className="button-pulse border-2 border-teal text-teal hover:bg-light-blue px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </div>

          <div className="flex gap-6 mt-10 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-teal" />
              <span>Available Today</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MessageSquare className="w-4 h-4 text-teal" />
              <span>Video Consultation</span>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative animate-slide-in animation-delay-200">
          <div className="bg-gradient-to-br from-teal/10 to-teal/5 rounded-3xl overflow-hidden shadow-2xl h-full min-h-96">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-full shadow-xl p-6 animate-bounce" style={{ animationDuration: "2s" }}>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal">10+</p>
              <p className="text-xs text-muted-foreground font-semibold">Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
