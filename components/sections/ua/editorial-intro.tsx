/**
 * Editorial intro — Ukrainian.
 * File path: /components/sections/ua/editorial-intro.tsx
 */

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";

const benefits = [
  "Ідеально гладко — без оздоблювальних робіт",
  "Без пилу — можна жити в кімнаті під час монтажу",
  "Акустика, LED-підсвічування, фотодрук в одній мембрані",
  "Демонтовна й 100% переробна (система ПВХ)",
];

export function EditorialIntro() {
  return (
    <section className="bg-paper py-24 text-bg md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <figure className="relative isolate aspect-[4/5] overflow-hidden rounded">
              <span className="absolute left-5 top-5 z-10 inline-flex items-center rounded-full bg-bg px-3 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.15em] text-paper">
                Що це
              </span>
              <Image
                src="/images/details/detal-sufitu-poliestrowego.jpg"
                alt="Деталь натяжної стелі — гладка безшовна поверхня"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </figure>
          </FadeIn>

          <FadeIn delay={100}>
            <Eyebrow tone="on-paper">Натяжна стеля</Eyebrow>
            <SectionTitle className="mt-5 text-bg">
              Це не звичайна стеля.
              <br />
              <span className="it">Це поверхня,</span>
              <br />
              яка <span className="text-red">змінює</span> все.
            </SectionTitle>

            <p className="mt-8 text-[17px] leading-[1.6] text-bg/80">
              <strong className="font-semibold text-bg">
                Натяжна стеля
              </strong>{" "}
              — це еластична мембрана з ПВХ-плівки або поліестрової тканини, натягнута на алюмінієвий профіль під монтажною планкою. Створюється ідеально гладка поверхня — без швів, без тріщин, без обмежень кольору.
            </p>

            <p className="mt-5 text-[16px] leading-[1.6] text-bg/65">
              На відміну від підвісної стелі з гіпсокартону,{" "}
              <strong className="font-semibold text-bg">Stretch</strong>{" "}
              встановлюється за один день, не потребує штукатурки чи фарбування й може бути знятий та повторно встановлений без сліду.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-[15px] leading-[1.5] text-bg/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-red"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
