"use client";

import { useEffect } from 'react';
import { trackWhatsAppClick } from '../../lib/analytics';

/** Observe contact intent without sending message contents or personal data. */
export default function ContactTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a[href]');
      if (!link) return;
      const url = new URL(link.getAttribute('href')!, window.location.origin);
      if (url.hostname !== 'wa.me' && url.hostname !== 'api.whatsapp.com') return;
      trackWhatsAppClick('site');
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
  return null;
}
