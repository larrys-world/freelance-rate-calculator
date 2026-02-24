'use client'

import { useState } from 'react'
import AdSense from '../components/AdSense'
import BuyMeACoffee from '../components/BuyMeACoffee'
import FAQ from '../components/FAQ'
import Breadcrumbs from '../components/Breadcrumbs'
import PremiumResources from '../components/PremiumResources'
import RelatedTools from '../components/RelatedTools'
import EmailCapture from '../components/EmailCapture'

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
        <AdSense slot="top-banner" format="horizontal" className="mb-6" />
        
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
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <p className="mt-1 text-xs text-gray-500">Typical ranges: 25-30% (single), 30-40% (self-employed)</p>
                </div>
              </div>
            </div>
            
            {/* Mid-content Ad */}
            <AdSense slot="mid-content" format="rectangle" />
            
            {/* Time Off */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Unpaid Time Off</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Vacation Days</label>
                  <input
                    type="number"
                    value={vacationDays}
                    onChange={(e) => setVacationDays(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Sick Days</label>
                  <input
                    type="number"
                    value={sickDays}
                    onChange={(e) => setSickDays(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Holiday Days</label>
                  <input
                    type="number"
                    value={holidayDays}
                    onChange={(e) => setHolidayDays(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            
            {/* Non-Billable Time */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Non-Billable Hours (per week)</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Admin/Accounting</label>
                  <input
                    type="number"
                    value={adminHours}
                    onChange={(e) => setAdminHours(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Marketing/Sales</label>
                  <input
                    type="number"
                    value={marketingHours}
                    onChange={(e) => setMarketingHours(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            
            {/* Utilization Rate */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Utilization Rate</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700">Expected Billable Utilization (%)</label>
                <input
                  type="number"
                  value={utilizationRate}
                  onChange={(e) => setUtilizationRate(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <p className="mt-1 text-xs text-gray-500">Percentage of available time you expect to have paying clients</p>
              </div>
            </div>
            
            {/* Results */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Calculated Rate</h2>
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-indigo-700">
                  ${Math.round(hourlyRate)}/hour
                </div>
                <p className="mt-2 text-gray-600">Minimum hourly rate to meet your goals</p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Working days per year:</span>
                  <span className="font-medium">{workableDays} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Billable hours per year:</span>
                  <span className="font-medium">{Math.round(actualBillableHours)} hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue needed (pre-tax):</span>
                  <span className="font-medium">${Math.round(totalRevenueNeeded).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Daily rate (8 hours):</span>
                  <span className="font-medium">${Math.round(hourlyRate * 8)}</span>
                </div>
              </div>
            </div>
            
            {/* Email Capture - Right after results when engagement is high */}
            <EmailCapture />
            
            {/* Premium Resources */}
            <PremiumResources />
            
            {/* Bottom Ad */}
            <AdSense slot="bottom-content" format="rectangle" />
            
            {/* Support Section */}
            <BuyMeACoffee />
            
            {/* Related Tools - NEW SECTION */}
            <RelatedTools />
            
            {/* FAQ Section */}
            <FAQ />
            
            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <p className="text-xs text-yellow-800">
                <strong>Disclaimer:</strong> This calculator provides estimates only. Tax rates vary significantly by location, filing status, and income level. 
                Consult with a tax professional for accurate tax planning. The calculator does not account for all possible deductions, credits, or business structures.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-8 py-4 text-center text-sm text-gray-600">
          <p>
            © 2026 Freelance Rate Calculator | 
            <a href="/privacy" className="ml-1 hover:text-gray-900 underline">Privacy Policy</a> |
            <a href="/terms" className="ml-1 hover:text-gray-900 underline">Terms</a>
          </p>
        </footer>
      </div>
    </div>
  )
}