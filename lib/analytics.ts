/** Contact intent only: a click is not proof of a sent message or a sale. */
function trackEvent(name: string, parameters: Record<string, string | number>) {
  if (typeof window === 'undefined') return;
  const analyticsWindow = window as Window & { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
  const safeParameters = { ...parameters, page_path: window.location.pathname };
  if (typeof analyticsWindow.gtag === 'function') {
    analyticsWindow.gtag('event', name, safeParameters);
  } else {
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    // GA4 processes argument objects; queue until its script has loaded.
    function queue(...args: unknown[]) { analyticsWindow.dataLayer!.push(arguments); }
    queue('event', name, safeParameters);
  }
}

export function trackWhatsAppClick(label = 'site') {
  trackEvent('click_whatsapp', { event_category: 'contact', event_label: label });
}

export function trackContactFormSubmit() {
  trackEvent('quote_prepared', { event_category: 'contact' });
}
