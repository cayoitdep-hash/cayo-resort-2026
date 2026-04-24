"use client";

import { useMemo, useState } from "react";
import { bookingLinks } from "../../data/booking";

function formatDateForDisplay(value: string) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
  }).format(date);
}

function getTomorrowISO() {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  return now.toISOString().split("T")[0];
}

function getDayAfterTomorrowISO() {
  const now = new Date();
  now.setDate(now.getDate() + 2);
  return now.toISOString().split("T")[0];
}

type DesktopFieldProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

function DesktopField({ label, children, className = "" }: DesktopFieldProps) {
  return (
    <div className={`flex min-h-[76px] flex-col justify-center px-5 ${className}`}>
      <div className="text-[10px] uppercase tracking-[0.22em] text-white/48">
        {label}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

type MobileFieldProps = {
  label: string;
  children: React.ReactNode;
};

function MobileField({ label, children }: MobileFieldProps) {
  return (
    <div className="rounded-[16px] border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-md">
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/48">
        {label}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default function HomeHeroBookingBar() {
  const [checkIn, setCheckIn] = useState(getTomorrowISO());
  const [checkOut, setCheckOut] = useState(getDayAfterTomorrowISO());
  const [rooms, setRooms] = useState("1");
  const [guests, setGuests] = useState("2");

  const bookingUrl = useMemo(() => {
    const url = new URL(bookingLinks.general);

    if (checkIn) url.searchParams.set("checkin", checkIn);
    if (checkOut) url.searchParams.set("checkout", checkOut);
    if (rooms) url.searchParams.set("rooms", rooms);
    if (guests) url.searchParams.set("guests", guests);

    return url.toString();
  }, [checkIn, checkOut, rooms, guests]);

  return (
    <>
      {/* Desktop / laptop */}
      <div className="pointer-events-none absolute inset-x-0 top-[7.3rem] z-[4] hidden justify-center px-6 lg:flex">
        <div className="pointer-events-auto w-full max-w-[1040px]">
          <div className="overflow-hidden rounded-[20px] border border-white/14 bg-[rgba(20,24,27,0.38)] shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl">
            <div className="grid grid-cols-[1.05fr_0.72fr_0.72fr_0.62fr_0.72fr_auto] items-stretch">
              <DesktopField label="Stay">
                <div className="text-[0.98rem] font-light text-white/88">
                  Plan your Cayo stay
                </div>
              </DesktopField>

              <DesktopField label="Check In" className="border-l border-white/10">
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCheckIn(value);

                      if (checkOut && value && checkOut <= value) {
                        const next = new Date(value);
                        next.setDate(next.getDate() + 1);
                        setCheckOut(next.toISOString().split("T")[0]);
                      }
                    }}
                    className="w-full bg-transparent text-[0.98rem] font-light text-white/88 outline-none [color-scheme:dark]"
                    aria-label="Check in"
                  />
                  {!checkIn ? (
                    <span className="pointer-events-none absolute left-0 top-0 text-[0.98rem] font-light text-white/50">
                      Add date
                    </span>
                  ) : null}
                </div>
              </DesktopField>

              <DesktopField label="Check Out" className="border-l border-white/10">
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn || new Date().toISOString().split("T")[0]}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent text-[0.98rem] font-light text-white/88 outline-none [color-scheme:dark]"
                    aria-label="Check out"
                  />
                  {!checkOut ? (
                    <span className="pointer-events-none absolute left-0 top-0 text-[0.98rem] font-light text-white/50">
                      Add date
                    </span>
                  ) : null}
                </div>
              </DesktopField>

              <DesktopField label="Rooms" className="border-l border-white/10">
                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="w-full cursor-pointer appearance-none bg-transparent text-[0.98rem] font-light text-white/88 outline-none"
                  aria-label="Rooms"
                >
                  {[1, 2, 3, 4].map((count) => (
                    <option key={count} value={String(count)} className="bg-[#1b1f22] text-white">
                      {count} {count === 1 ? "Room" : "Rooms"}
                    </option>
                  ))}
                </select>
              </DesktopField>

              <DesktopField label="Guests" className="border-l border-white/10">
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full cursor-pointer appearance-none bg-transparent text-[0.98rem] font-light text-white/88 outline-none"
                  aria-label="Guests"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                    <option key={count} value={String(count)} className="bg-[#1b1f22] text-white">
                      {count} {count === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </DesktopField>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[170px] items-center justify-center bg-[rgba(209,173,47,0.92)] px-7 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-black transition duration-300 hover:bg-[rgba(209,173,47,1)]"
              >
                Search
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="absolute inset-x-0 top-[6.6rem] z-[4] px-4 lg:hidden">
        <div className="mx-auto max-w-[560px] overflow-hidden rounded-[18px] border border-white/12 bg-[rgba(20,24,27,0.34)] shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-0">
            <MobileField label="Check In">
              <input
                type="date"
                value={checkIn}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => {
                  const value = e.target.value;
                  setCheckIn(value);

                  if (checkOut && value && checkOut <= value) {
                    const next = new Date(value);
                    next.setDate(next.getDate() + 1);
                    setCheckOut(next.toISOString().split("T")[0]);
                  }
                }}
                className="w-full bg-transparent text-sm font-medium text-white/90 outline-none [color-scheme:dark]"
                aria-label="Check in"
              />
            </MobileField>

            <MobileField label="Check Out">
              <input
                type="date"
                value={checkOut}
                min={checkIn || new Date().toISOString().split("T")[0]}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-white/90 outline-none [color-scheme:dark]"
                aria-label="Check out"
              />
            </MobileField>

            <MobileField label="Rooms">
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full appearance-none bg-transparent text-sm font-medium text-white/90 outline-none"
                aria-label="Rooms"
              >
                {[1, 2, 3, 4].map((count) => (
                  <option key={count} value={String(count)} className="bg-[#1b1f22] text-white">
                    {count} {count === 1 ? "Room" : "Rooms"}
                  </option>
                ))}
              </select>
            </MobileField>

            <MobileField label="Guests">
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full appearance-none bg-transparent text-sm font-medium text-white/90 outline-none"
                aria-label="Guests"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                  <option key={count} value={String(count)} className="bg-[#1b1f22] text-white">
                    {count} {count === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </MobileField>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="col-span-2 inline-flex items-center justify-center bg-[rgba(209,173,47,0.92)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition duration-300 hover:bg-[rgba(209,173,47,1)]"
            >
              Search
            </a>
          </div>
        </div>
      </div>
    </>
  );
}