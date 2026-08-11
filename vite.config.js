import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        pMain: "index_default.html",
        pLetter: "/prototype/letter/index_letter.html",
        pPanorama: "/prototype/panorama/index_panorama.html",
        pSlide: "/prototype/slide/index_slide.html",
        pPage: "/prototype/page/index_page.html",
        pPage2: "/prototype/page2/index_page.html",
        rsvp: "rsvp.html",
        confirm: "confirm.html",
        complete: "rsvpComplete.html",
        rsvpList: "rsvpList.html",
        access:"access.html",
        facility:"facility.html"
      }
    }
  }
});