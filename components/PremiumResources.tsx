'use client';

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
  }
}

export default function PremiumResources() {
  const resources = [
    {
      title: "The Freelancer's Bible",
      description: "Everything you need to know about freelancing successfully",
      link: "https://amzn.to/freelancerbible", // Replace with actual affiliate link
      price: "$24.99",
      tag: "Recommended"
    },
    {
      title: "FreshBooks Accounting",
      description: "Professional accounting software for freelancers - 30 day free trial",
      link: "https://www.freshbooks.com/ref/larrysworld", // Replace with actual affiliate link
      price: "Free Trial",
      tag: "Save Time"
    },
    {
      title: "Freelancer Insurance Guide",
      description: "Compare health insurance options for self-employed professionals",
      link: "https://www.healthinsurance.org/self-employed/", 
      price: "Free Guide",
      tag: "Essential"
    }
  ];

  return (
    <div className="mt-12 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        📚 Premium Resources for Freelancers
      </h3>
      <p className="text-gray-700 mb-6">
        Take your freelancing to the next level with these carefully selected resources:
      </p>
      
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                    {resource.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
              </div>
              <div className="ml-4 text-right">
                <p className="text-lg font-bold text-green-600">{resource.price}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                  onClick={() => {
                    // Track affiliate click
                    if (typeof window !== 'undefined' && window.plausible) {
                      window.plausible('Affiliate Click', { 
                        props: { resource: resource.title } 
                      });
                    }
                  }}
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-xs text-gray-500 mt-4 italic">
        * Some links are affiliate links. We may earn a commission at no extra cost to you.
      </p>
    </div>
  );
}