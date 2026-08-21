import dayjs from "dayjs";

export const formatCurrency = (
  value: number,
  currency = "USD",
  locale = "en-US",
): string => {
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return value.toFixed(2);
  }
};

export const formatSubscriptionDateTime = (
  value?: string,
  locale = "en-US",
  fallback = "Not provided",
): string => {
  if (!value) return fallback;
  const parsedDate = dayjs(value);
  if (!parsedDate.isValid()) return fallback;

  try {
    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(parsedDate.toDate());
  } catch {
    return parsedDate.format("MM/DD/YYYY");
  }
};

export const formatStatusLabel = (
  value: string | undefined,
  translate?: (key: string) => string,
): string => {
  if (!value) return translate?.("common.unknown") ?? "Unknown";

  return (
    translate?.(`subscription.statuses.${value}`) ??
    value.charAt(0).toUpperCase() + value.slice(1)
  );
};
export function getDurationParts(totalYears: number) {
  const totalDays = Math.round(totalYears * 365);

  const years = Math.floor(totalDays / 365);
  const remainingAfterYears = totalDays % 365;

  const months = Math.floor(remainingAfterYears / 30);
  const days = remainingAfterYears % 30;

  return { years, months, days };
}

const UNIT_LABELS = {
  en: {
    years: "years",
    year: "year",
    months: "months",
    month: "month",
    days: "days",
    day: "day",
    and: "and",
  },
  fa: {
    years: "سال",
    year: "سال",
    months: "ماه",
    month: "ماه",
    days: "روز",
    day: "روز",
    and: "و",
  },
} as const;

/**
 * Formats a duration in years into a localized "Y years, M months, D days"
 * style string (word order/units match `language`; digits are localized
 * via Intl using `locale`, e.g. Persian digits for "fa-IR").
 */
export function formatBackgroundRadiation(
  totalYears: number,
  language: "en" | "fa",
  locale: string,
): string {
  const { years, months, days } = getDurationParts(totalYears);
  const fmt = (n: number) => new Intl.NumberFormat(locale).format(n);
  const u = UNIT_LABELS[language];

  const parts: string[] = [];
  if (years > 0) parts.push(`${fmt(years)} ${years === 1 ? u.year : u.years}`);
  if (months > 0)
    parts.push(`${fmt(months)} ${months === 1 ? u.month : u.months}`);
  if (days > 0 || parts.length === 0) {
    parts.push(`${fmt(days)} ${days === 1 ? u.day : u.days}`);
  }

  return parts.join(` ${u.and} `);
}
