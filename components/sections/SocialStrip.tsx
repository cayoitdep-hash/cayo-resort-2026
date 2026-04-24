const socialLinks = [
  {
    href: "https://www.facebook.com/cayoresort/",
    label: "Facebook",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[20px] w-[20px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 8h2.5V4.5H14c-2.6 0-4.5 1.8-4.5 4.7V11H7v3.3h2.5V20H13v-5.7h3.1L16.6 11H13V9.5c0-1 .6-1.5 1-1.5Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/cayoresort/",
    label: "Instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[20px] w-[20px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/channel/UCNyEo54LO2FV1HUYEp7c_pA",
    label: "YouTube",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[20px] w-[20px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.2c0 2.1-.2 3.5-.6 4.2-.3.6-.8 1-1.4 1.2-1.4.4-4.2.4-7 .4s-5.6 0-7-.4c-.6-.2-1.1-.6-1.4-1.2C3.2 15.7 3 14.3 3 12.2s.2-3.5.6-4.2c.3-.6.8-1 1.4-1.2C6.4 6.4 9.2 6.4 12 6.4s5.6 0 7 .4c.6.2 1.1.6 1.4 1.2.4.7.6 2.1.6 4.2Z" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/80068982/",
    label: "LinkedIn",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[20px] w-[20px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.2 9.3V18" />
        <path d="M7.2 6.4h.01" />
        <path d="M11.2 18v-4.9c0-1.9 1-3.1 2.8-3.1 1.7 0 2.5 1.1 2.5 3V18" />
        <path d="M11.2 11v-1.7" />
      </svg>
    ),
  },
];

type SocialStripProps = {
  className?: string;
};

export default function SocialStrip({ className = "" }: SocialStripProps) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-6 md:gap-7">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="group relative inline-flex h-[72px] w-[72px] items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-[1px]"
            style={{
              borderColor: "rgba(186, 164, 149, 0.72)",
              color: "rgba(186, 164, 149, 0.92)",
            }}
          >
            <span className="relative z-[1] transition-transform duration-300 group-hover:scale-[1.06]">
              {item.icon}
            </span>

            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
              style={{
                boxShadow: "0 0 0 1px rgba(186, 164, 149, 0.95)",
              }}
            />

            <span
              className="pointer-events-none absolute inset-[7px] rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
              style={{
                border: "1px solid rgba(186, 164, 149, 0.22)",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}