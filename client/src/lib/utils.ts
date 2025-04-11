import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Image mapping to ensure we're using the exact images from the design
export const IMAGES = {
  profile: "https://i.imgur.com/6VBx3io.png",
  profileFull: "https://i.imgur.com/WMDNtRZ.jpg",
  community: "https://i.imgur.com/7tD7BzH.png",
  qrCode: "https://i.imgur.com/7vEwFGH.png",
  organizer: "https://i.imgur.com/zLCYDZ9.jpg",
  events: {
    musicFestival: "https://i.imgur.com/T9qJBUP.jpg",
    foodFestival: "https://i.imgur.com/fxCH5UZ.jpg",
    techConference: "https://i.imgur.com/YK0bOmS.jpg",
    artExhibition: "https://i.imgur.com/KLnx8dE.jpg",
    comedyNight: "https://i.imgur.com/8RKXAQS.jpg",
    yogaWorkshop: "https://i.imgur.com/V3ocJSZ.jpg"
  }
};
