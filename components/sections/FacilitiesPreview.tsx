export default function FacilitiesPreview() {
  const facilities = [
    "3 outdoor pools",
    "5 restaurants",
    "3 bars",
    "Armonia Spa",
    "Conference center",
    "Open-air amphitheater",
    "Fitness suite",
    "Yoga studio",
    "Children’s play area",
    "Cayo’s spot on the beach of Plaka",
    "Elegant boutique",
    "2 cable railways (funiculars)",
    "Private parking with EV charging stations",
  ];

  return (
    <section className="pb-24 md:pb-32">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <div className="eyebrow">Facilities</div>
            <h2 className="section-title mt-4">
              A complete resort
              <br />
              infrastructure,
              <br />
              clearly defined.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              The resort brings together pools, gastronomy, wellness, fitness,
              beach access, and event infrastructure into a fully integrated
              destination experience.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {facilities.map((item) => (
            <div
              key={item}
              className="rounded-[20px] border bg-white px-5 py-5 text-base text-neutral-700"
              style={{ borderColor: "var(--border)" }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}