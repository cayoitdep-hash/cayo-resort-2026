export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#1e1e1e] text-white">
      <div
        className="hero-overlay absolute inset-0"
        style={{
          backgroundImage:
            "url('https://www.cayoresort.com/wp-content/uploads/2022/04/Cayo-Exclusive-Resort-Spa-Elounda-Crete-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="container relative z-10 pb-20 pt-40">
        <div className="max-w-4xl">
          <div className="eyebrow text-white/80">Elounda, Crete</div>
          <h1 className="mt-5 text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.04em]">
            A new era
            <br />
            of luxury escape
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            We are reimagining Cayo Resort as a refined digital experience built
            around atmosphere, space, design, and the emotional rhythm of a stay.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#stay" className="cta-button">
              Explore Accommodation
            </a>
            <a
              href="#resort"
              className="inline-flex min-h-12 items-center justify-center px-6 text-white/88"
            >
              Discover the Resort
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}