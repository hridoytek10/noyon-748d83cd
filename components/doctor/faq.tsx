"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  id: number
  question: string
  answer: string
}

export default function DoctorFAQ({ faq }: { faq: FAQItem[] }) {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4 bg-soft-gray">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-teal mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-md animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-light-blue transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-teal flex-shrink-0 transition-transform duration-300 ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === item.id && (
                <div className="px-6 py-4 bg-light-blue border-t border-border animate-slide-in">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
