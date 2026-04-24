import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";

const careerValues = [
  "Warm Cretan hospitality",
  "Discreet luxury service",
  "Respect for place, people, and detail",
  "Professional growth within a refined resort environment",
];

const departments = [
  "Front Office & Guest Relations",
  "Food & Beverage",
  "Housekeeping",
  "Wellness & Spa",
  "Kitchen & Culinary",
  "Maintenance & Technical",
  "Sales, Reservations & Administration",
];

export default function CareersPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <section
        className="relative flex min-h-[72vh] items-end overflow-hidden bg-[#151515] text-white"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/careers/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/34 to-black/10" />

        <div className="container relative z-10 pb-16 pt-40 md:pb-24">
          <div className="max-w-5xl">
            <div className="eyebrow text-white/70">Career Opportunities</div>

            <h1 className="mt-5 text-[clamp(3.2rem,7vw,6.8rem)] font-light leading-[0.9] tracking-[-0.055em]">
              Join a world
              <br />
              shaped by care,
              <br />
              detail, and place.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
              Cayo Exclusive Resort &amp; Spa welcomes professionals who value
              refined hospitality, thoughtful service, and the quiet discipline
              behind a memorable guest experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <div className="eyebrow">Careers at Cayo</div>
            <h2 className="section-title mt-4">
              Hospitality begins
              <br />
              with people.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              Every role contributes to the atmosphere of the resort. From the
              first welcome to the smallest detail of a guest’s stay, our team
              carries the identity of Cayo with professionalism, warmth, and
              discretion.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container grid gap-6 md:grid-cols-2">
          <div
            className="rounded-[36px] bg-white p-8 md:p-10"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="eyebrow">What We Value</div>

            <div className="mt-8 space-y-4">
              {careerValues.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b pb-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">{item}</span>
                  <span className="text-sm text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[36px] bg-[#171717] p-8 text-white md:p-10"
          >
            <div className="eyebrow text-white/55">Departments</div>

            <div className="mt-8 grid gap-3">
              {departments.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-white/12 px-4 py-4 text-white/78"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div
            className="min-h-[34rem] rounded-[36px] bg-[#d8d1c6]"
            style={{
              backgroundImage: "url('/images/careers/team.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div>
            <div className="eyebrow">Applications</div>

            <h2 className="section-title mt-4">
              Share your
              <br />
              interest with us.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              For career opportunities, applicants may contact the resort team
              directly and share their CV for consideration. Suitable candidates
              will be contacted according to current operational needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@cayoresort.com?subject=Career%20Application%20-%20Cayo%20Exclusive%20Resort%20%26%20Spa"
                className="cta-button"
              >
                Send CV
              </a>

              <Link href="/contact" className="outline-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}