import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Logo and description */}
          <div className="md:max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
              >
                <rect x="4" y="4" width="16" height="16" rx="8" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-xl font-medium">manus</span>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              Manus, derived from the Latin word for "hand",
              <br />
              is a general AI agent that turns your thoughts into actions.
            </p>
            <p className="text-sm text-gray-500">© 2025 Manus AI</p>
          </div>

          {/* Links sections */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-24">
            {/* Follow us */}
            <div>
              <h3 className="font-medium mb-4">Follow us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
                    X (Twitter) <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
                    LinkedIn <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-gray-900">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-gray-900">
                    Media inquiries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-gray-900">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-gray-900">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-gray-900">
                    Terms of service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Border and Quote */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400 italic">"Less structure, more intelligence."</p>
        </div>
      </div>
    </footer>
  )
}

