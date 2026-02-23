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
          <p className="text-gray-600 mb-6">Last updated: February 23, 2026</p>
          
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
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Advertising</h2>
          <p>We use Google AdSense to display advertisements on our site. Google AdSense uses cookies and web beacons to display ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a>.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Don't Collect</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal information (names, emails, etc.)</li>
            <li>Your calculation inputs or results</li>
            <li>IP addresses (except temporarily for geographic analytics)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Google AdSense:</strong> For serving relevant advertisements</li>
            <li><strong>Analytics:</strong> To understand site usage patterns</li>
          </ul>
          <p>You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of advertisements on our site.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Plausible Analytics:</strong> Privacy-focused analytics that doesn't use cookies or collect personal data. Learn more at <a href="https://plausible.io/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">plausible.io/privacy</a>.</li>
            <li><strong>Google AdSense:</strong> For displaying advertisements. View Google's privacy policy at <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p>Since all calculations happen in your browser and we don't collect personal information, there's no sensitive data to secure on our servers. The anonymous analytics data is secured by our third-party providers.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Opt out of personalized advertising through Google's Ads Settings</li>
            <li>Use ad blockers or privacy-focused browsers to prevent tracking</li>
            <li>Clear cookies from your browser at any time</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
          <p>Our service is not directed to children under 13. We do not knowingly collect information from children under 13.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
          <p>If you have questions about this privacy policy, please open an issue on our <a href="https://github.com/larrys-world/freelance-rate-calculator" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>
        </div>
      </div>
    </div>
  );
}