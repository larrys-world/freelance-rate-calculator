'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How do I calculate my freelance hourly rate?",
    answer: "To calculate your freelance hourly rate, start with your desired annual salary, add business expenses and taxes, then divide by your billable hours per year. Our calculator factors in vacation time, sick days, holidays, and non-billable work like admin and marketing."
  },
  {
    question: "What is a good hourly rate for freelancers?",
    answer: "A good freelance hourly rate typically ranges from $50-$150+ depending on your expertise, industry, and location. Junior freelancers might charge $25-50/hour, mid-level $50-100/hour, and senior experts $100-250+/hour. Use our calculator to find the minimum rate you need to meet your financial goals."
  },
  {
    question: "Should I charge by hour or project?",
    answer: "Both hourly and project-based pricing have advantages. Hourly billing works well for ongoing or undefined work, while project pricing is better for clearly scoped deliverables. Many freelancers use both: hourly for consultations and maintenance, fixed-price for defined projects. Calculate your hourly rate first, then use it to estimate project prices."
  },
  {
    question: "How many billable hours can I realistically work?",
    answer: "Most freelancers bill 20-30 hours per week (1,000-1,500 hours/year) due to time spent on admin, marketing, and finding clients. Full-time employees work ~2,080 hours/year, but freelancers typically achieve 50-75% billability. Our calculator uses an 80% utilization rate as a starting point."
  },
  {
    question: "What expenses should I include in my rate calculation?",
    answer: "Include all business expenses: software subscriptions, equipment, insurance, coworking space, professional development, accounting fees, and marketing costs. Don't forget employer-paid benefits you're replacing: health insurance, retirement contributions, and paid time off. A typical freelancer needs 25-50% above their target salary to cover expenses and taxes."
  },
  {
    question: "How do taxes affect my freelance rate?",
    answer: "Self-employed freelancers pay both employee and employer portions of Social Security and Medicare (15.3% total), plus income tax. Your effective tax rate might be 25-40% depending on income and deductions. Set aside 30-35% of revenue for taxes and adjust your hourly rate accordingly."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}