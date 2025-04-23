export function getFormattedTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  })
}

export function getFormattedDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function getFormattedArabicDate(date: Date): string {
  return date.toLocaleDateString("ar-SA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    calendar: "islamic",
  })
}
