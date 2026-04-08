import {
  Heart,
  Shield,
  Activity,
  Syringe,
  Bandage,
  Video,
  Zap,
  Stethoscope,
  TrendingUp,
} from "lucide-react"

interface ServiceItem {
  id: number
  title: string
  description: string
  icon: string
}

const iconMap: { [key: string]: React.ReactNode } = {
  Heart: <Heart className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
  Syringe: <Syringe className="w-8 h-8" />,
  Bandage: <Bandage className="w-8 h-8" />,
  Video: <Video className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
}

const defaultServices = [
  {
    icon: "Heart",
    title: "Heart Disease Diagnosis & Management",
    description: "Comprehensive evaluation and treatment of various heart conditions including hypertension, arrhythmias, and coronary artery disease.",
  },
  {
    icon: "Zap",
    title: "Interventional Cardiology",
    description: "Advanced procedures including angioplasty, stent placement, and catheter-based interventions.",
  },
  {
    icon: "Stethoscope",
    title: "Preventive Cardiology",
    description: "Risk assessment and prevention strategies to maintain long-term heart health and prevent future complications.",
  },
  {
    icon: "TrendingUp",
    title: "Cardiac Rehabilitation",
    description: "Post-operative and post-event recovery programs designed for optimal cardiac rehabilitation.",
  },
  {
    icon: "Activity",
    title: "Stress Testing & Monitoring",
    description: "Advanced diagnostic testing including ECG, echo, Holter monitoring, and exercise stress tests.",
  },
  {
    icon: "Shield",
    title: "Telemedicine Consultations",
    description: "Convenient virtual consultations for follow-up care and initial assessments.",
  },
]

export default function DoctorServices({
  services,
}: {
  services: ServiceItem[]
}) {
  const servicesToDisplay = services && services.length > 0 ? services : defaultServices

  return (
    <section id="services" className="py-20 px-4 bg-soft-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Services & Specialties</h2>
          <div className="h-1 w-20 bg-teal mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToDisplay.map((service, index) => {
            const icon = iconMap[service.icon] || iconMap.Heart
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="bg-light-blue rounded-full w-16 h-16 flex items-center justify-center mb-4 button-glow">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
