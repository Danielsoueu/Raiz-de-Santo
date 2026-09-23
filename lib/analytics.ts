/**
 * Google Analytics 4 Helper for tracking key conversion events
 */
export function trackWhatsAppClick(label: string = "geral") {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "click_whatsapp", {
      event_category: "conversion",
      event_label: label,
      value: 1,
    });
  }
}

export function trackContactFormSubmit(serviceType: string = "sob_medida") {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "generate_lead", {
      event_category: "conversion",
      event_label: serviceType,
    });
  }
}
