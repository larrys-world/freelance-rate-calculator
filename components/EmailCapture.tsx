'use client';

import { useState } from 'react';

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
  }
}

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // For now, we'll use a simple form submission
      // In production, this would connect to ConvertKit, Mailchimp, etc.
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Success! Check your email for the guide.');
        setEmail('');
        
        // Track conversion
        if (typeof window !== 'undefined' && window.plausible) {
          window.plausible('Email Signup', { props: { tool: 'freelance-calculator' } });
        }
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg text-white">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">
          🎁 Free: Freelance Pricing Mastery Guide
        </h3>
        <p className="mb-6 opacity-90">
          Get our comprehensive 25-page guide on setting profitable freelance rates, 
          negotiating with clients, and scaling your business.
        </p>
        
        {status === 'success' ? (
          <div className="bg-green-500 bg-opacity-20 border border-green-300 rounded-lg p-4">
            <p className="font-medium">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Get Free Guide'}
            </button>
          </form>
        )}
        
        {status === 'error' && (
          <p className="mt-2 text-red-200 text-sm">{message}</p>
        )}
        
        <p className="mt-3 text-xs opacity-75">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}