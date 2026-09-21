import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SingleReview from "./SingleReview";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { clientReviewData } from "../data";

export default function ExpertsView() {
  return (
    <section className="relative w-full bg-[#0d0d11] text-white pt-20 pb-28 font-['Nunito'] overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-900/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
        {/* Section Header */}
        <div className="relative z-10 max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/4 border border-purple-500/30 backdrop-blur-md mb-4 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest uppercase text-purple-200/90 font-medium">
              Endorsements & Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-['League_Spartan'] mb-4">
            <span className="bg-linear-to-r from-white via-purple-100 to-[#c77dff] bg-clip-text text-transparent">
              What Experts Say
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Feedback and commendations from professors, mentors, and collaborators on my work ethic and software engineering abilities.
          </p>
        </div>

        {/* Testimonials Swiper */}
        <div className="relative max-w-5xl mx-auto pb-10">
          <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="w-full text-white pb-14 [--swiper-theme-color:#9d4edd] [&_.swiper-pagination-bullet]:bg-purple-300! [&_.swiper-button-next]:text-purple-300 [&_.swiper-button-prev]:text-purple-300 [&_.swiper-button-next]:after:text-2xl [&_.swiper-button-prev]:after:text-2xl"
          >
            {clientReviewData.map(
              ({ clientImg, clientReview, clientName, clientPosition }, i) => (
                <SwiperSlide key={i} className="flex justify-center items-center">
                  <SingleReview
                    clientName={clientName}
                    clientPosition={clientPosition}
                    clientImg={clientImg}
                    clientReview={clientReview}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
