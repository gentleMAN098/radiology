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

  return translate?.(`subscription.statuses.${value}`) ??
    value.charAt(0).toUpperCase() + value.slice(1);
};
