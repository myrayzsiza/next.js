"use client";

import { useEffect } from 'react';

export default function RemoveLargeImages() {
  useEffect(() => {
    function hideLarge() {
      try {
        const imgs = Array.from(document.images || []);
        const threshold = Math.max(window.innerWidth * 0.6, 600);
        imgs.forEach((img) => {
          const w = img.naturalWidth || img.width || 0;
          if (w > threshold) {
            img.style.display = 'none';
          }
        });
      } catch (e) {
        // ignore
      }
    }

    // run after load
    if (document.readyState === 'complete') hideLarge();
    else window.addEventListener('load', hideLarge);

    // also observe for dynamically added images
    const obs = new MutationObserver(() => hideLarge());
    obs.observe(document.body || document.documentElement, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('load', hideLarge);
      obs.disconnect();
    };
  }, []);

  return null;
}
