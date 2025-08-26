// components/TeamCarousel.tsx
"use client";

import type React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel: React.FC = () => {
  return (
    <div className="w-full px-12 py-12 xl:mt-32">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={false}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !bg-black !w-2 !h-2 rounded-2xl"></span>`;
          },
        }}
        navigation={false}
        breakpoints={{
          320: { slidesPerView: 1, slidesPerGroup: 1 },
          640: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
        className="w-[100%] max-w-[1600px] cursor-grab"
      >
        <SwiperSlide>
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
            rounded-2xl p-6 h-96 mx-4 mb-8 
            shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
            flex flex-col items-center justify-start 
            transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#ffdd55] text-center">
              Web App Development
            </h2>
            <p className="text-left">
              Build modern, scalable, and responsive web applications using
              Next.js and React.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
            rounded-2xl p-6 h-96 mx-4 mb-8 
            shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
            flex flex-col items-center justify-start 
            transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#ffdd55] text-center">
              UI/UX Implementation
            </h2>
            <p className="text-left">
              Transform Figma or design prototypes into functional,
              pixel-perfect web pages.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
            rounded-2xl p-6 h-96 mx-4 mb-8 
            shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
            flex flex-col items-center justify-start 
            transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#ffdd55] text-center">
              Performance Optimization
            </h2>
            <p className="text-left">
              Improve site speed, Core Web Vitals, and SEO to ensure seamless
              performance.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
            rounded-2xl p-6 h-96 mx-4 mb-8 
            shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
            flex flex-col items-center justify-start 
            transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#ffdd55] text-center">
              Responsive Web Design
            </h2>
            <p className="text-left">
              Create mobile-first designs that look and work perfectly across
              all devices.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
            rounded-2xl p-6 h-96 mx-4 mb-8 
            shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
            flex flex-col items-center justify-start 
            transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#ffdd55] text-center">
              API Integration
            </h2>
            <p className="text-left">
              Connect applications with RESTful APIs and GraphQL for dynamic
              data handling.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
            rounded-2xl p-6 h-96 mx-4 mb-8 
            shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
            flex flex-col items-center justify-start 
            transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#ffdd55] text-center">
              Maintenance & Support
            </h2>
            <p className="text-left">
              Provide ongoing support, bug fixes, and updates to keep apps
              secure and stable.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
