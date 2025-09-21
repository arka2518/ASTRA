import DocumentAnalyzer from "@/components/document-analyzer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-background manga-pattern">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-black hover:text-red-600 transition-colors font-black text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            BACK TO HOME
          </Link>
        </div>

        <div className="relative border-8 border-black bg-gradient-to-br from-cyan-300 via-blue-200 to-purple-300 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="p-8">
            <h1 className="text-4xl font-black text-black mb-6 transform -skew-x-6 text-center">DOCUMENT ANALYZER!</h1>
            <DocumentAnalyzer />
          </div>

          <div className="absolute top-2 right-2 bg-yellow-400 border-2 border-black px-2 py-1 text-xs font-black transform rotate-12">
            SMART!
          </div>
          <div className="absolute bottom-2 left-2 bg-green-400 border-2 border-black px-2 py-1 text-xs font-black transform -rotate-12">
            FAST!
          </div>
        </div>
      </div>
    </div>
  )
}
