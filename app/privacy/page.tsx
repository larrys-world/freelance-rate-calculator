import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Freelance Rate Calculator",
  description: "Privacy policy for the Freelance Rate Calculator tool",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">Last updated: February 22, 2026</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Overview</h2>
          <p>The Freelance Rate Calculator is a free web tool that helps freelancers calculate their ideal hourly rate. We respect your privacy and are committed to protecting any data you might share while using our tool.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Collection</h2>
          <p>We collect minimal data to improve our service:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Calculator inputs:</strong> All calculations happen in your browser. We do not store or transmit your salary, expenses, or rate calculations.</li>
            <li><strong>Analytics data:</strong> We use Plausible Analytics, a privacy-friendly analytics tool, to understand how people use our calculator. This includes:
              <ul className="list-disc pl-6 mt-2">
                <li>Page views and visitor counts</li>
                <li>Referrer information (how you found us)</li>
                <li>Country (determined from IP address, but IP is not stored)</li>
                <li>Device type (mobile/desktop)</li>
              </ul>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Don't Collect</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal information (names, emails, etc.)</li>
            <li>Your calculation inputs or results</li>
            <li>IP addresses</li>
            <li>Cookies or tracking identifiers</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
          <p>We use Plausible Analytics for visitor statistics. Plausible is GDPR-compliant and does not use cookies or collect personal data. Learn more at <a href="https://plausible.io/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">plausible.io/privacy</a>.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p>Since all calculations happen in your browser and we don't collect personal information, there's no sensitive data to secure on our servers. The anonymous analytics data is secured by Plausible.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p>Since we don't collect personal information, there's no personal data to access, modify, or delete. If you prefer not to be included in our anonymous statistics, you can use browser extensions that block analytics scripts.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
          <p>If you have questions about this privacy policy, please open an issue on our <a href="https://github.com/larrys-world/freelance-rate-calculator" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>
        </div>
        
        <div className="mt-12">
          <a href="/" className="text-blue-600 hover:underline">← Back to Calculator</a>
        </div>
      </div>
    </div>
  );
}