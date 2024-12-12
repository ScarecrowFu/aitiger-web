"use client";

import { useEffect, useState } from 'react';

interface FooterContent {
  copyright: {
    text: string;
    icp: {
      text: string;
      link: string;
    };
  };
}

export const Footer = () => {
  const [content, setContent] = useState<FooterContent | null>(null);

  useEffect(() => {
    fetch('/content/site/footer.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Error loading footer content:', err));
  }, []);

  if (!content) return null;

  return (
    <div className="border-t border-gray-100 py-8 mt-auto">
      <div className="text-center text-gray-500 text-sm">
        <p className="mb-2">{content.copyright.text}</p>
        <p>
          <a 
            href={content.copyright.icp.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            {content.copyright.icp.text}
          </a>
        </p>
      </div>
    </div>
  );
}; 