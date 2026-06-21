export function formatWhatsAppUrl(phone: string, message?: string): string {
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : "";
  return `https://wa.me/${phone}${text}`;
}
