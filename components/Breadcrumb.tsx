import React from 'react';

interface BreadcrumbProps {
  toolName: string;
  toolUrl?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ toolName, toolUrl }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://larrys-world.github.io"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Free Tools",
        "item": "https://larrys-world.github.io/tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": toolName,
        "item": toolUrl || (typeof window !== 'undefined' ? window.location.href : '')
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-gray-600">
          <li>
            <a href="https://larrys-world.github.io" className="hover:text-indigo-600">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <a href="https://larrys-world.github.io/tools" className="hover:text-indigo-600">
              Free Tools
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <span className="text-gray-900 font-medium">{toolName}</span>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;