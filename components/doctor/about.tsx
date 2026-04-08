interface AboutData {
  title: string
  description: string
  highlights: string[]
}

export default function DoctorAbout({ data }: { data: AboutData }) {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{data.title}</h2>
          <div className="h-1 w-20 bg-teal mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {data.description}
            </p>
          </div>

          <div className="bg-gradient-to-br from-light-blue to-teal/5 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Highlights</h3>
            <ul className="space-y-4">
              {data.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <span className="text-teal font-bold text-xl mt-1">✓</span>
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
