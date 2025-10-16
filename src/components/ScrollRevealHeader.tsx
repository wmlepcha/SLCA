'use client';

import { useEffect, useState } from 'react';

export default function ScrollRevealHeader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Always keep header visible
    setIsVisible(true);
    
    // No need for scroll event listener since we always want the header visible
  }, []);

  // Apply this class to the header in Navbar.tsx
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      if (isVisible) {
        header.classList.remove('translate-y-[-100%]');
      } else {
        header.classList.add('translate-y-[-100%]');
      }
    }
  }, [isVisible]);

  return null;
}