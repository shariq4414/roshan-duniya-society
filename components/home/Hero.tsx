"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = [
  "/images/hero/newhero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
  "/images/hero/hero4.jpg",
  "/images/hero/hero5.jpg",
];

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-slate-50">
      <div className="container-custom py-12 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-600 sm:text-sm">
              समाज सेवा • शिक्षा • महिला सशक्तिकरण • स्वास्थ्य जागरूकता
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              रोशन दुनिया सोसाइटी
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              महिलाओं के सशक्तिकरण, शिक्षा, कौशल विकास,
              स्वास्थ्य जागरूकता एवं सामाजिक उत्थान के लिए
              समर्पित संस्था।
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/donate"
                className="rounded-xl bg-orange-500 px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
              >
                दान करें
              </a>

              <a
                href="/volunteer"
                className="rounded-xl border border-slate-300 px-6 py-3 text-center font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100"
              >
                स्वयंसेवक बनें
              </a>
            </div>

            {/* Quote */}
            <p className="mt-6 italic text-slate-500">
              "आपका छोटा सा सहयोग किसी परिवार के जीवन में बड़ा बदलाव ला सकता है।"
            </p>

            {/* Trust Points */}
            <div className="mt-8 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
              <span>✓ महिला सशक्तिकरण</span>
              <span>✓ शिक्षा एवं प्रशिक्षण</span>
              <span>✓ सामाजिक कल्याण</span>
            </div>
          </div>

          {/* Right Slider */}
          <div className="mt-6 lg:mt-0">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full"
            >
              {images.map((image) => (
                <SwiperSlide key={image}>
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl">
                    <Image
                      src={image}
                      alt="Roshan Duniya Society"
                      width={700}
                      height={500}
                      priority
                      className="h-[260px] w-full rounded-[20px] object-cover sm:h-[350px] md:h-[450px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}