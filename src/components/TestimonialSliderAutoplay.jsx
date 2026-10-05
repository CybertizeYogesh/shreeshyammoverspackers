"use client";

import { useEffect } from "react";

export default function TestimonialSliderAutoplay() {
  useEffect(() => {
    let fallbackInterval = null;

    const initSlider = () => {
      const sliderEl = document.getElementById("testiSlide1");
      if (!sliderEl) return false;

      if (typeof window !== "undefined" && window.Swiper) {
        if (sliderEl.swiper) {
          const swiper = sliderEl.swiper;
          if (swiper.autoplay) {
            swiper.params.autoplay = {
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            };
            if (!swiper.autoplay.running) {
              swiper.autoplay.start();
            }
          }
          return true;
        }

        try {
          new window.Swiper(sliderEl, {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            speed: 900,
            autoplay: {
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            },
            breakpoints: {
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            },
          });
          return true;
        } catch (err) {
          console.error("Swiper init error:", err);
        }
      }
      return false;
    };

    // Attempt immediately
    initSlider();

    // Poll until Swiper is initialized
    const pollInterval = setInterval(() => {
      if (initSlider()) {
        clearInterval(pollInterval);
      }
    }, 400);

    const maxPollTimeout = setTimeout(() => {
      clearInterval(pollInterval);
    }, 10000);

    // Guaranteed fallback interval to ensure slides continue scrolling automatically
    fallbackInterval = setInterval(() => {
      const sliderEl = document.getElementById("testiSlide1");
      if (sliderEl && sliderEl.swiper) {
        sliderEl.swiper.slideNext();
      }
    }, 4000);

    return () => {
      clearInterval(pollInterval);
      clearTimeout(maxPollTimeout);
      if (fallbackInterval) clearInterval(fallbackInterval);
    };
  }, []);

  return null;
}
