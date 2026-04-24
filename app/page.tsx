import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import VideoHero from "../components/ui/VideoHero";
import ResortIntro from "../components/sections/ResortIntro";
import AccommodationPreview from "../components/sections/AccommodationPreview";
import DiningPreview from "../components/sections/DiningPreview";
import WellnessPreview from "../components/sections/WellnessPreview";
import ActivitiesPreview from "../components/sections/ActivitiesPreview";
import BookingCTA from "../components/sections/BookingCTA";
import AwardsSection from "../components/sections/AwardsSection";
import HomeHeroBookingBar from "../components/ui/HomeHeroBookingBar";
import { pageMedia } from "../data/page-media";

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video={pageMedia.home.heroVideo}
        image={pageMedia.home.heroImage}
      >
        <HomeHeroBookingBar />

        <div className="max-w-5xl pt-[15.5rem] md:pt-[18.5rem]">
          <div className="eyebrow text-white/70">
            Cayo Exclusive Resort &amp; Spa
          </div>

          <h1 className="mt-5 max-w-5xl text-[clamp(3.4rem,7vw,7.2rem)] font-light leading-[0.88] tracking-[-0.055em] text-white">
            A new expression
            <br />
            of luxury in Crete.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-[1.05rem] md:leading-8">
            Architecture, privacy, gastronomy, wellness, and immersive
            destination experience come together in a refined resort setting
            overlooking the island of Spinalonga.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://cayoresort.reserve-online.net/"
              target="_blank"
              rel="noreferrer"
              className="cta-button"
            >
              Book Your Stay
            </a>

            <a
              href="#home-overview"
              className="outline-button !border-white/35 !text-white"
            >
              Explore More
            </a>
          </div>
        </div>
      </VideoHero>

      <section
        id="home-overview"
        className="relative z-[2] -mt-10 rounded-t-[34px] bg-[var(--background)] pt-10 md:-mt-14 md:rounded-t-[44px] md:pt-14"
      >
        <ResortIntro />
        <AccommodationPreview />
        <DiningPreview />
        <WellnessPreview />
        <ActivitiesPreview />
        <AwardsSection />
        <BookingCTA />
      </section>

      <Footer />
    </main>
  );
}