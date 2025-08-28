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
    <div className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-12 sm:py-10 md:py-12 lg:mt-16 xl:mt-16">
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
        <SwiperSlide aria-label="Web App Development Service">
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
              rounded-2xl p-4 sm:p-5 md:p-6 
              h-[400px] sm:h-[420px] md:h-[450px] lg:h-[450px] xl:h-[450px]
              mx-2 sm:mx-3 md:mx-4 mb-8 
              shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
              flex flex-col items-center justify-start 
              transition duration-300 ease-in-out overflow-hidden scrollbox"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-[#ffdd55] text-center">
              Web App Development
            </h2>
            <div className="overflow-y-auto flex-1 w-full">
              <p className="text-left mt-2 md:mt-4 text-sm sm:text-base">
                I specialize in building modern, high-performance web
                applications that are scalable, secure, and tailored to your
                business needs. By leveraging cutting-edge technologies such as
                React, Next.js, and Tailwind CSS, I create apps that are not
                only fast and reliable but also responsive across all devices.
                My development process covers everything from planning and
                architecture to deployment and optimization, ensuring a smooth
                and future-proof digital solution. With a strong focus on
                usability, accessibility, and performance, I deliver web
                applications that provide seamless user experiences, boost
                engagement, and drive business growth.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide aria-label="UI/UX Implementation Service">
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
              rounded-2xl p-4 sm:p-5 md:p-6 
              h-[400px] sm:h-[420px] md:h-[450px] lg:h-[480px] xl:h-[450px]
              mx-2 sm:mx-3 md:mx-4 mb-8 
              shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
              flex flex-col items-center justify-start 
              transition duration-300 ease-in-out overflow-hidden scrollbox"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-[#ffdd55] text-center">
              UI/UX Implementation
            </h2>
            <div className="overflow-y-auto flex-1 w-full">
              <p className="text-left mt-2 md:mt-4 text-sm sm:text-base">
                I translate creative designs into fully functional, responsive
                interfaces that deliver seamless user experiences. By combining
                clean code with modern front-end frameworks, I ensure every
                element of the design is interactive, accessible, and optimized
                for performance. My focus is on creating intuitive user flows,
                pixel-perfect layouts, and responsive components that adapt
                smoothly across devices. With attention to detail and usability
                best practices, I bring design concepts to life in a way that
                engages users and elevates your digital product.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide aria-label="Performance Optimization Service">
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
              rounded-2xl p-4 sm:p-5 md:p-6 
              h-[400px] sm:h-[420px] md:h-[450px] lg:h-[480px] xl:h-[450px]
              mx-2 sm:mx-3 md:mx-4 mb-8 
              shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
              flex flex-col items-center justify-start 
              transition duration-300 ease-in-out overflow-hidden scrollbox"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-[#ffdd55] text-center">
              Performance Optimization
            </h2>
            <div className="overflow-y-auto flex-1 w-full">
              <p className="text-left mt-2 md:mt-4 text-sm sm:text-base">
                I specialize in front-end performance optimization to ensure
                your web applications are lightning-fast, responsive, and
                user-friendly. By streamlining code, reducing bundle size, and
                implementing best practices like lazy loading, code splitting,
                and image optimization, I significantly improve loading speed
                and responsiveness. I also focus enhancing Core Web Vitals, and
                ensuring smooth interactions across all devices. With a strong
                emphasis on usability, accessibility, and scalability, I make
                sure your front-end delivers an exceptional user experience that
                keeps visitors engaged and boosts overall website performance
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide aria-label="Responsive Web Design Service">
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
              rounded-2xl p-4 sm:p-5 md:p-6 
              h-[400px] sm:h-[420px] md:h-[450px] lg:h-[480px] xl:h-[450px]
              mx-2 sm:mx-3 md:mx-4 mb-8 
              shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
              flex flex-col items-center justify-start 
              transition duration-300 ease-in-out overflow-hidden scrollbox"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-[#ffdd55] text-center">
              Responsive Web Design
            </h2>
            <div className="overflow-y-auto flex-1 w-full">
              <p className="text-left mt-2 md:mt-4 text-sm sm:text-base">
                I create fully responsive web designs that adapt seamlessly to
                all devices, from desktops and tablets to smartphones. By using
                modern front-end frameworks and CSS techniques such as Flexbox,
                Grid, and Tailwind CSS, I ensure layouts are fluid, visually
                appealing, and highly functional across various screen sizes. I
                focus on delivering consistent user experiences, fast loading
                times, and intuitive navigation, while maintaining accessibility
                and usability best practices. The result is a polished,
                user-centric web interface that enhances engagement, boosts
                retention, and elevates your brands online presence.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide aria-label="API Integration Service">
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
              rounded-2xl p-4 sm:p-5 md:p-6 
              h-[400px] sm:h-[420px] md:h-[450px] lg:h-[480px] xl:h-[450px]
              mx-2 sm:mx-3 md:mx-4 mb-8 
              shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
              flex flex-col items-center justify-start 
              transition duration-300 ease-in-out overflow-hidden scrollbox"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-[#ffdd55] text-center">
              API Integration
            </h2>
            <div className="overflow-y-auto flex-1 w-full">
              <p className="text-left mt-2 md:mt-4 text-sm sm:text-base">
                I specialize in integrating third-party and custom APIs to
                enhance the functionality of your web applications. By
                connecting your front-end to reliable data sources, services, or
                backend systems, I ensure smooth data flow, real-time updates,
                and seamless interactivity. I focus on using efficient,
                maintainable code and modern front-end frameworks to handle API
                requests, manage state, and display dynamic content flawlessly.
                With attention to performance, error handling, and security, I
                deliver robust API integrations that enhance user experience,
                streamline workflows, and make your web application more
                powerful and responsive.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide aria-label="Maintenance & Support Service">
          <div
            className="bg-black hover:bg-white text-white hover:text-black 
              rounded-2xl p-4 sm:p-5 md:p-6 
              h-[400px] sm:h-[420px] md:h-[450px] lg:h-[480px] xl:h-[450px]
              mx-2 sm:mx-3 md:mx-4 mb-8 
              shadow-[6px_6px_0px_white] hover:shadow-[6px_6px_0px_black]
              flex flex-col items-center justify-start 
              transition-colors duration-300 overflow-hidden scrollbox"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-[#ffdd55] text-center">
              Maintenance & Support
            </h2>
            <div className="overflow-y-auto flex-1 w-full">
              <p className="text-left mt-2 md:mt-4 text-sm sm:text-base">
                I provide ongoing front-end maintenance and support to ensure
                your web applications remain fast, reliable, and up-to-date.
                This includes bug fixing, code updates, compatibility checks
                across browsers and devices, and performance monitoring to
                maintain optimal user experience. I also implement best
                practices for security, accessibility, and usability, ensuring
                your application continues to function smoothly as technologies
                evolve. By offering proactive support and quick issue
                resolution, I help your web application stay efficient,
                responsive, and ready to meet your users needs at all times.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
