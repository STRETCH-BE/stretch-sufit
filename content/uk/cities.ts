/**
 * Cities homepage list — Ukrainian.
 * File path: /content/uk/cities.ts
 */

export type CityListItem = {
  slug: string;
  name: string;
  region: string;
};

export const cities: CityListItem[] = [
  { slug: "varshava", name: "Варшава", region: "Мазовецьке" },
  { slug: "krakiv", name: "Краків", region: "Малопольське" },
  { slug: "vrotslav", name: "Вроцлав", region: "Нижньосілезьке" },
  { slug: "poznan", name: "Познань", region: "Великопольське" },
  { slug: "gdansk", name: "Ґданськ", region: "Поморське" },
  { slug: "lodz", name: "Лодзь", region: "Лодзинське" },
  { slug: "katovitse", name: "Катовіце", region: "Сілезьке" },
  { slug: "chenstokhova", name: "Ченстохова", region: "Сілезьке · центр" },
  { slug: "bielsko-byala", name: "Бєльсько-Бяла", region: "Сілезьке" },
  { slug: "hlivitse", name: "Глівіце", region: "Сілезьке" },
  { slug: "opole", name: "Ополе", region: "Опольське" },
  { slug: "keltse", name: "Кельце", region: "Свентокшиське" },
  { slug: "plotsk", name: "Плоцьк", region: "Мазовецьке" },
  { slug: "piotrkuv-trybunalskyi", name: "Пьотркув-Трибунальський", region: "Лодзинське" },
  { slug: "radomsko", name: "Радомсько", region: "Лодзинське" },
  { slug: "bzheh", name: "Бжег", region: "Опольське" },
  { slug: "yastshembe-zdruy", name: "Ястшембе-Здруй", region: "Сілезьке" },
  { slug: "sosnovets", name: "Сосновець", region: "Сілезьке" },
  { slug: "tykhy", name: "Тихи", region: "Сілезьке" },
  { slug: "myslovitse", name: "Мисловіце", region: "Сілезьке" },
  { slug: "rybnik", name: "Рибнік", region: "Сілезьке" },
  { slug: "zabzhe", name: "Забже", region: "Сілезьке" },
  { slug: "bytom", name: "Битом", region: "Сілезьке" },
  { slug: "ruda-slonska", name: "Руда-Шльонська", region: "Сілезьке" },
  { slug: "dombrova-hurnicha", name: "Домброва-Гурнича", region: "Сілезьке" },
  { slug: "khozhuv", name: "Хожув", region: "Сілезьке" },
];
