import Link from "next/link";

type PremiumStayCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  href: string;
  ctaLabel: string;
};

export default function PremiumStayCard({
  eyebrow,
  title,
  description,
  image,
  href,
  ctaLabel,
}: PremiumStayCardProps) {
  return (
    <article
      className="group overflow-hidden rounded-[34px] bg-white"
      style={{ border: "1px solid var(--border)" }}
    >
      <Link href={href} className="block">
        <div className="relative h-[25rem] overflow-hidden bg-[#d8d1c6]">
          <div
            className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-black/0 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>
      </Link>

      <div className="p-8 md:p-9">
        <div className="eyebrow">{eyebrow}</div>

        <h3 className="mt-4 text-[2rem] font-light leading-[1.02] tracking-[-0.035em]">
          {title}
        </h3>

        <p className="mt-5 text-[0.98rem] leading-8 text-neutral-500">
          {description}
        </p>

        <div className="mt-8">
          <Link href={href} className="outline-button">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}