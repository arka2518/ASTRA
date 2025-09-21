"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, Brain, FileText, Lightbulb, BookOpen } from "lucide-react"

export default function DocumentAnalyzer() {
  const [file, setFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setResults(null)
    }
  }

  const simulateAIAnalysis = async (fileName: string) => {
    // Simulate AI processing with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock AI analysis results based on file type
    const mockResults = {
      summary: `This document appears to be about ${fileName.includes("math") ? "mathematical concepts" : fileName.includes("history") ? "historical events" : "academic content"}. The AI has identified key concepts and generated study materials.`,
      keyPoints: [
        "Main concept: Core principles and definitions",
        "Important formulas or facts highlighted",
        "Critical thinking questions identified",
        "Practice problems or examples noted",
      ],
      studyNotes: [
        "📚 **Key Term 1**: Essential definition and context",
        "🔍 **Important Concept**: Detailed explanation with examples",
        "💡 **Study Tip**: Memory technique or learning strategy",
        "⚡ **Quick Review**: Summary of main points",
      ],
      questions: [
        "What are the main principles discussed in this document?",
        "How do these concepts relate to previous topics?",
        "What are some practical applications?",
        "What questions might appear on an exam?",
      ],
    }

    return mockResults
  }

  const handleAnalyze = async () => {
    if (!file) return

    setIsAnalyzing(true)
    try {
      const analysisResults = await simulateAIAnalysis(file.name)
      setResults(analysisResults)
    } catch (error) {
      console.error("Analysis failed:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* File Upload Area */}
      <div className="relative bg-white border-4 border-black rounded-lg p-6 shadow-lg">
        <div
          className="border-4 border-dashed border-gray-400 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-black text-black mb-2">
            {file ? `SELECTED: ${file.name}` : "DRAG & DROP YOUR DOCUMENT!"}
          </p>
          <p className="text-sm text-gray-600 font-bold">Or click to browse files</p>
          <p className="text-xs text-gray-500 mt-2">Supports PDF, TXT, DOCX files</p>
        </div>
        <input type="file" id="file-input" className="hidden" accept=".pdf,.txt,.docx" onChange={handleFileUpload} />
      </div>

      {/* Analyze Button */}
      <Button
        className="w-full bg-red-500 text-white border-4 border-black font-black text-lg transform hover:scale-105 shadow-lg disabled:opacity-50"
        onClick={handleAnalyze}
        disabled={!file || isAnalyzing}
      >
        <Brain className="w-5 h-5 mr-2" />
        {isAnalyzing ? "ANALYZING..." : "ANALYZE DOCUMENT!"}
      </Button>

      {/* Results Panel */}
      {results && (
        <div className="relative bg-white border-4 border-black rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-black text-black mb-4 transform -skew-x-6">AI ANALYSIS RESULTS!</h3>

          <div className="space-y-6">
            {/* Summary */}
            <div className="relative bg-blue-100 border-4 border-black rounded-lg p-4">
              <h4 className="text-lg font-black text-black mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                DOCUMENT SUMMARY
              </h4>
              <p className="text-black font-bold text-sm">{results.summary}</p>
            </div>

            {/* Key Points */}
            <div className="relative bg-green-100 border-4 border-black rounded-lg p-4">
              <h4 className="text-lg font-black text-black mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                KEY POINTS
              </h4>
              <ul className="space-y-2">
                {results.keyPoints.map((point: string, index: number) => (
                  <li key={index} className="text-black font-bold text-sm flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Notes */}
            <div className="relative bg-yellow-100 border-4 border-black rounded-lg p-4">
              <h4 className="text-lg font-black text-black mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                STUDY NOTES
              </h4>
              <div className="space-y-2">
                {results.studyNotes.map((note: string, index: number) => (
                  <div key={index} className="text-black font-bold text-sm bg-white border-2 border-black rounded p-2">
                    {note}
                  </div>
                ))}
              </div>
            </div>

            {/* Study Questions */}
            <div className="relative bg-purple-100 border-4 border-black rounded-lg p-4">
              <h4 className="text-lg font-black text-black mb-2 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                STUDY QUESTIONS
              </h4>
              <div className="space-y-2">
                {results.questions.map((question: string, index: number) => (
                  <div key={index} className="text-black font-bold text-sm bg-white border-2 border-black rounded p-2">
                    <span className="text-purple-600 font-black">Q{index + 1}:</span> {question}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
