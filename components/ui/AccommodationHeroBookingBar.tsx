"use client";

import { useMemo, useState } from "react";
import { bookingLinks } from "../../data/booking";

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

export default function AccommodationHeroBookingBar() {
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
      <div className="pointer-events-none absolute inset-x-0 top-[7.1rem] z-[4] hidden justify-center px-6 lg:flex">
        <div className="pointer-events-auto w-full max-w-[960px]">
          <div className="overflow-hidden rounded-[18px] border border-white/12 bg-[rgba(20,24,27,0.34)] shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur-xl">
            <div className="grid grid-cols-[1.06fr_0.72fr_0.72fr_0.58fr_0.68fr_auto] items-stretch">
              <div className="flex min-h-[68px] flex-col justify-center px-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/48">
                  Stay
                </div>
                <div className="mt-1.5 text-[0.95rem] font-light text-white/88">
                  Plan your stay
                </div>
              </div>

              <div className="border-l border-white/10 px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/48">
                  Check In
                </div>
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
                  className="mt-1.5 w-full bg-transparent text-[0.95rem] font-light text-white/88 outline-none [color-scheme:dark]"
                  aria-label="Check in"
                />
              </div>

              <div className="border-l border-white/10 px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/48">
                  Check Out
                </div>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || new Date().toISOString().split("T")[0]}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="mt-1.5 w-full bg-transparent text-[0.95rem] font-light text-white/88 outline-none [color-scheme:dark]"
                  aria-label="Check out"
                />
              </div>

              <div className="border-l border-white/10 px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/48">
                  Rooms
                </div>
                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="mt-1.5 w-full appearance-none bg-transparent text-[0.95rem] font-light text-white/88 outline-none"
                  aria-label="Rooms"
                >
                  {[1, 2, 3, 4].map((count) => (
                    <option
                      key={count}
                      value={String(count)}
                      className="bg-[#1b1f22] text-white"
                    >
                      {count} {count === 1 ? "Room" : "Rooms"}
                    </option>
                  ))}
                </select>
              </div>

              <div className="border-l border-white/10 px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/48">
                  Guests
                </div>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="mt-1.5 w-full appearance-none bg-transparent text-[0.95rem] font-light text-white/88 outline-none"
                  aria-label="Guests"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                    <option
                      key={count}
                      value={String(count)}
                      className="bg-[#1b1f22] text-white"
                    >
                      {count} {count === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[150px] items-center justify-center bg-[rgba(209,173,47,0.92)] px-6 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-black transition duration-300 hover:bg-[rgba(209,173,47,1)]"
              >
                Search
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[6.4rem] z-[4] px-4 lg:hidden">
        <div className="mx-auto max-w-[560px] overflow-hidden rounded-[16px] border border-white/12 bg-[rgba(20,24,27,0.32)] shadow-[0_14px_36px_rgba(0,0,0,0.16)] backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-0">
            <div className="px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/48">
                Check In
              </div>
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
                className="mt-1.5 w-full bg-transparent text-sm font-medium text-white/90 outline-none [color-scheme:dark]"
                aria-label="Check in"
              />
            </div>

            <div className="border-l border-white/10 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/48">
                Check Out
              </div>
              <input
                type="date"
                value={checkOut}
                min={checkIn || new Date().toISOString().split("T")[0]}
                onChange={(e) => setCheckOut(e.target.value)}
                className="mt-1.5 w-full bg-transparent text-sm font-medium text-white/90 outline-none [color-scheme:dark]"
                aria-label="Check out"
              />
            </div>

            <div className="border-t border-white/10 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/48">
                Rooms
              </div>
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="mt-1.5 w-full appearance-none bg-transparent text-sm font-medium text-white/90 outline-none"
                aria-label="Rooms"
              >
                {[1, 2, 3, 4].map((count) => (
                  <option
                    key={count}
                    value={String(count)}
                    className="bg-[#1b1f22] text-white"
                  >
                    {count} {count === 1 ? "Room" : "Rooms"}
                  </option>
                ))}
              </select>
            </div>

            <div className="border-l border-t border-white/10 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/48">
                Guests
              </div>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="mt-1.5 w-full appearance-none bg-transparent text-sm font-medium text-white/90 outline-none"
                aria-label="Guests"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                  <option
                    key={count}
                    value={String(count)}
                    className="bg-[#1b1f22] text-white"
                  >
                    {count} {count === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

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