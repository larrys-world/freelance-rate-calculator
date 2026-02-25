'use client'

import { useState, useEffect } from 'react'
import { HeaderAd, FooterAd, InContentAd } from '../components/monetization/AdSense'
import BuyMeACoffee from '../components/BuyMeACoffee'
import FAQ from '../components/FAQ'
import Breadcrumbs from '../components/Breadcrumbs'
import PremiumResources from '../components/PremiumResources'
import RelatedTools from '../components/RelatedTools'
import EmailCapture from '../components/EmailCapture'

// AdSense configuration - replace with actual values when available
const ADSENSE_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX'
const ADSENSE_SLOTS = {
  header: 'XXXXXXXXXX',
  footer: 'XXXXXXXXXX',
  content: 'XXXXXXXXXX'
}

export default function FreelanceRateCalculator() {
  const [desiredSalary, setDesiredSalary] = useState(75000)
  const [vacationDays, setVacationDays] = useState(10)
  const [sickDays, setSickDays] = useState(5)
  const [holidayDays, setHolidayDays] = useState(10)
  const [adminHours, setAdminHours] = useState(8)
  const [marketingHours, setMarketingHours] = useState(8)
  const [businessExpenses, setBusinessExpenses] = useState(5000)
  const [taxRate, setTaxRate] = useState(30)
  const [utilizationRate, setUtilizationRate] = useState(80)

  // Add AdSense script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + ADSENSE_CLIENT
    script.async = true
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  // Calculate working days
  const totalWorkDays = 260 // 52 weeks * 5 days
  const unpaidDays = vacationDays + sickDays + holidayDays
  const workableDays = totalWorkDays - unpaidDays
  const workableHours = workableDays * 8
  
  // Calculate non-billable hours per week
  const nonBillableHoursPerWeek = adminHours + marketingHours
  const weeksWorked = workableDays / 5
  const totalNonBillableHours = nonBillableHoursPerWeek * weeksWorked
  
  // Calculate billable hours
  const potentialBillableHours = workableHours - totalNonBillableHours
  const actualBillableHours = potentialBillableHours * (utilizationRate / 100)
  
  // Calculate required revenue
  const afterTaxSalary = desiredSalary
  const beforeTaxSalary = afterTaxSalary / (1 - taxRate / 100)
  const totalRevenueNeeded = beforeTaxSalary + businessExpenses
  
  // Calculate hourly rate
  const hourlyRate = totalRevenueNeeded / actualBillableHours

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Top Ad */}
        <HeaderAd client={ADSENSE_CLIENT} slot={ADSENSE_SLOTS.header} />
        
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8">
            <h1 className="text-3xl font-bold text-white">Freelance Rate Calculator</h1>
            <p className="mt-2 text-blue-100">Calculate your ideal hourly rate based on your desired salary and expenses</p>
          </div>
          
          <div className="p-6 space-y-8">
            {/* Salary & Expenses */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Income Goals & Expenses</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Desired Annual Salary (after taxes)</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      value={desiredSalary}
                      onChange={(e) => setDesiredSalary(Number(e.target.value))}
                      className="pl-7 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Annual Business Expenses</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      value={businessExpenses}
                      onChange={(e) => setBusinessExpenses(Number(e.target.value))}
                      className="pl-7 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Software, equipment, insurance, etc.</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Estimated Tax Rate (%)</label>
                  <input
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(Number(e.target.value))}
                    min="0"
                    max="100"
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <p className="mt-1 text-xs text-gray-500">Your combined federal, state, and self-employment tax rate</p>
                </div>
              </div>
            </div>

            {/* Time Off */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Time Off</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Vacation Days</label>
                  <input
                    type="number"
                    value={vacationDays}
                    onChange={(e) => setVacationDays(Number(e.target.value))}
                    min="0"
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Sick Days</label>
                  <input
                    type="number"
                    value={sickDays}
                    onChange={(e) => setSickDays(Number(e.target.value))}
                    min="0"
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Holiday Days</label>
                  <input
                    type="number"
                    value={holidayDays}
                    onChange={(e) => setHolidayDays(Number(e.target.value))}
                    min="0"
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Non-Billable Hours */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Non-Billable Hours (per week)</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Admin Hours</label>
                  <input
                    type="number"
                    value={adminHours}
                    onChange={(e) => setAdminHours(Number(e.target.value))}
                    min="0"
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <p className="mt-1 text-xs text-gray-500">Bookkeeping, invoicing, etc.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Marketing Hours</label>
                  <input
                    type="number"
                    value={marketingHours}
                    onChange={(e) => setMarketingHours(Number(e.target.value))}
                    min="0"
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <p className="mt-1 text-xs text-gray-500">Networking, proposals, etc.</p>
                </div>
              </div>
            </div>

            {/* Utilization Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Utilization Rate (%)</label>
              <input
                type="number"
                value={utilizationRate}
                onChange={(e) => setUtilizationRate(Number(e.target.value))}
                min="0"
                max="100"
                className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <p className="mt-1 text-xs text-gray-500">Percentage of available hours you expect to bill</p>
            </div>

            {/* In-content Ad */}
            <InContentAd client={ADSENSE_CLIENT} slot={ADSENSE_SLOTS.content} />

            {/* Results */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Freelance Rate</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Workable Days per Year:</span>
                  <span className="font-medium">{workableDays} days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Billable Hours per Year:</span>
                  <span className="font-medium">{Math.round(actualBillableHours)} hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Revenue Needed:</span>
                  <span className="font-medium">${totalRevenueNeeded.toLocaleString()}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">Minimum Hourly Rate:</span>
                    <span className="text-2xl font-bold text-green-600">${hourlyRate.toFixed(2)}/hour</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy Me a Coffee */}
            <BuyMeACoffee />
            
            {/* Email Capture */}
            <EmailCapture />
          </div>
        </div>

        {/* Premium Resources */}
        <PremiumResources />

        {/* FAQ */}
        <FAQ />

        {/* Related Tools */}
        <RelatedTools />

        {/* Bottom Ad */}
        <FooterAd client={ADSENSE_CLIENT} slot={ADSENSE_SLOTS.footer} />
      </div>
    </div>
  )
}