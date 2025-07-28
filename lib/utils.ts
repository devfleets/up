import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const DEFAULT_WHATSAPP_NUMBER = "+91 90113 65766"

/**
 * Opens WhatsApp chat with the given number in a new tab.
 * @param phoneNumber The phone number in international format (e.g., +919011365766)
 */
export function openWhatsAppChat(phoneNumber: string = DEFAULT_WHATSAPP_NUMBER) {
  if (typeof window !== "undefined") {
    const url = `https://wa.me/${phoneNumber.replace(/[^\d]/g, "")}`;
    window.open(url, "_blank");
  }
}

export const DEFAULT_WHATSAPP_MESSAGE = "Hi I want to book your Dhol Tasha Pathak for my event"

/**
 * Opens WhatsApp chat with the given number and a pre-filled message in a new tab.
 * @param message The message to pre-fill in the chat
 * @param phoneNumber The phone number in international format (e.g., +919011365766)
 */
export function openWhatsAppChatWithMessage(message: string = DEFAULT_WHATSAPP_MESSAGE, phoneNumber: string = DEFAULT_WHATSAPP_NUMBER) {
  if (typeof window !== "undefined") {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber.replace(/[^\d]/g, "")}&text=${encodedMessage}&type=phone_number&app_absent=0`;
    console.log("WhatsApp URL:", url);
    window.open(url, "_blank");
  }
}

export function buildWhatsAppContactMessage({
  firstName,
  lastName,
  email,
  phone,
  subject,
  message,
}: {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}): string {
  return `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
}
