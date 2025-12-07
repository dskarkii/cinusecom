'use client';

import { useEffect } from 'react';

export default function PreloaderHandler() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.querySelector('.loader-wrap');
      if (loader) {
        (loader as HTMLElement).style.display = 'none';
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
