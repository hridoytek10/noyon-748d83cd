import { Star } from "lucide-react"

interface Review {
  id: number
  name: string
  rating: number
  text: string
  verified: boolean
}

export default function DoctorReviews({ reviews }: { reviews: Review[] }) {
  return (
    <section id="reviews" className="py-20 px-4 bg-soft-gray">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Patient Reviews
          </h2>
          <div className="h-1 w-20 bg-teal mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground">
              ({reviews.length} verified reviews)
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {review.name}
                  </h3>
                  {review.verified && (
                    <p className="text-sm text-teal font-medium">
                      ✓ Verified Patient
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
