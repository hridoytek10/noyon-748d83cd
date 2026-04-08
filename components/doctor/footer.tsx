import { Facebook, Twitter, Linkedin } from "lucide-react"

interface FooterLink {
  label: string
  href: string
}

interface SocialLink {
  platform: string
  url: string
  icon: string
}

interface FooterData {
  copyright: string
  links: FooterLink[]
  social: SocialLink[]
}

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
}

export default function DoctorFooter({ footer }: { footer: FooterData }) {
  return (
    <footer className="bg-dark-blue text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12 pb-8 border-b border-white/10">
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Professional Medical Care
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Dedicated to providing compassionate, expert healthcare with a patient-centered approach. Your health is our priority.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {footer.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-teal transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {footer.copyright}
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {footer.social.map((social) => {
              const Icon =
                socialIcons[
                  social.platform as keyof typeof socialIcons
                ]
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  className="text-gray-400 hover:text-teal transition-colors"
                  aria-label={social.platform}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
