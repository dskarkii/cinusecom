'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // Hide preloader after page loads
    const timer = setTimeout(() => {
      const loader = document.querySelector('.loader-wrap');
      if (loader) {
        (loader as HTMLElement).style.display = 'none';
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
