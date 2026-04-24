import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Link from "next/link";

export default function VillasPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <section className="py-32 md:py-40">
        <div className="container text-center">
          <div className="eyebrow">Accommodation</div>
          <h1 className="section-title mt-4">Villas are not currently listed.</h1>
          <p className="section-copy mx-auto mt-6 max-w-2xl">
            Based on the current public site structure, the accommodation
            collection includes Rooms and Suites. If villa inventory is added
            later, this section can be restored.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/accommodation" className="outline-button">
              Back to Accommodation
            </Link>
            <Link href="/contact" className="outline-button">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}