/**
 * Polish plural helper.
 * File path: /lib/plural.ts
 *
 *   pluralPl(1, ["miasto", "miasta", "miast"]) → "miasto"
 *   pluralPl(3, …) → "miasta"   pluralPl(26, …) → "miast"
 */
export function pluralPl(
  n: number,
  forms: [one: string, few: string, many: string]
): string {
  const abs = Math.abs(n);
  if (abs === 1) return forms[0];
  const lastTwo = abs % 100;
  const last = abs % 10;
  if (last >= 2 && last <= 4 && !(lastTwo >= 12 && lastTwo <= 14)) {
    return forms[1];
  }
  return forms[2];
}

/** Ukrainian: "26 міст", "3 міста", "1 місто". */
export function mistCountUk(n: number): string {
  return `${n} ${pluralPl(n, ["місто", "міста", "міст"])}`;
}

/** "26 miast", "3 miasta", "1 miasto". */
export function miastaCount(n: number): string {
  return `${n} ${pluralPl(n, ["miasto", "miasta", "miast"])}`;
}
