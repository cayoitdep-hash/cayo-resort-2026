export const bookingLinks = {
  general: "https://cayoresort.reserve-online.net/",
  contact: "/contact",
};

export function getRoomBookingLink(_slug: string) {
  return bookingLinks.general;
}

export function getSuiteBookingLink(_slug: string) {
  return bookingLinks.general;
}