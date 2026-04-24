import { socialProofData } from "../../data/social-proof";

function splitTitle(title: string) {
  const lines = title.split("\n");

  return lines.map((line, index) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

export default function AwardsSection() {
  return (
    <section className="pb-28 md:pb-36">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <div className="eyebrow">{socialProofData.intro.eyebrow}</div>

            <h2 className="mt-5 text-[clamp(3rem,6vw,5.8rem)] font-light leading-[0.92] tracking-[-0.05em]">
              {splitTitle(socialProofData.intro.title)}
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-[1.05rem] leading-8 text-neutral-600">
              {socialProofData.intro.copy}
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[40px] bg-white p-6 md:p-8" style={{ border: "1px solid var(--border)" }}>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {socialProofData.recognitions.map((item) => {
              const card = (
                <div
                  className="group flex min-h-[13rem] flex-col justify-between rounded-[28px] bg-[#faf8f4] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="eyebrow">Recognition</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                      {item.year}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-1 items-center justify-center">
                    <img
                      src={item.image}
                      alt={`${item.title} ${item.year}`}
                      className="max-h-[78px] w-auto max-w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-[1rem] leading-7 text-neutral-700">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );

              if (item.href && item.href !== "#") {
                return (
                  <a
                    key={`${item.title}-${item.year}`}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                    aria-label={`${item.title} ${item.year}`}
                  >
                    {card}
                  </a>
                );
              }

              return (
                <div
                  key={`${item.title}-${item.year}`}
                  className="block"
                  aria-label={`${item.title} ${item.year}`}
                >
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}