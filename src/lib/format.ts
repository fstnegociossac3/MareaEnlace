import { regional } from "@/config/regional";

const currencyFormatter = new Intl.NumberFormat(regional.locale, {
  style: "currency",
  currency: regional.currency,
});

const dateFormatter = new Intl.DateTimeFormat(regional.locale, {
  timeZone: regional.timeZone,
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const dateTimeFormatter = new Intl.DateTimeFormat(regional.locale, {
  timeZone: regional.timeZone,
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

function toDate(value: Date | string | number): Date {
  return value instanceof Date ? value : new Date(value);
}

export function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}

export function formatDate(value: Date | string | number): string {
  return dateFormatter.format(toDate(value));
}

export function formatDateTime(value: Date | string | number): string {
  return dateTimeFormatter.format(toDate(value));
}
