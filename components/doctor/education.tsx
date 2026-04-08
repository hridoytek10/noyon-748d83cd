import { Award, BookOpen, Building2 } from "lucide-react"

interface EducationItem {
  year: string
  degree: string
  institution: string
  details: string
}

export default function DoctorEducation({
  education,
}: {
  education: EducationItem[]
}) {
  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education & Credentials
          </h2>
          <div className="h-1 w-20 bg-teal mx-auto"></div>
        </div>

        <div className="relative">
          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center button-pulse">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    {index < education.length - 1 && (
                      <div className="w-1 h-24 bg-teal/30 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-teal font-semibold text-sm">{item.year}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-2">
                      {item.institution}
                    </p>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
