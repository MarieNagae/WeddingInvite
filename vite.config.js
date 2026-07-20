import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        rsvp: "rsvp.html",
        complete: "rsvpComplete.html",
        rsvpList: "rsvpList.html",
        access:"access.html",
        facility:"facility.html"
      }
    }
  }
});