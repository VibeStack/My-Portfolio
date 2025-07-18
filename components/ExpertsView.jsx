import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SingleReview from "./SingleReview";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { clientReviewData } from "../data";

export default function ExpertsView() {
  return (
    <>
      <section className="max-w-screen mx-auto px-10 bg-[#111] text-center">
        <h2 className="text-[24px] sm:text-6xl relative z-10 font-extrabold px-4 py-4 w-max mx-auto text-center text-[#5a189a] sm:border-b-2 sm:border-[#9d4edd] border-2 border-[#9d4edd] rounded-md shadow-md shadow-[#e0aaff] font-['Nunito'] transition-all duration-500 ease-in-out bg-[#111]">
          What Experts Say About My Work
        </h2>
      </section>
      <Swiper
        navigation={true}
        pagination={{clickable:true}}
        modules={[Navigation,Pagination]}
        className="my-swiper-section bg-[#111] text-white pb-[200px] inset-0 m-auto"
      >
        {clientReviewData.map(
          ({ clientImg, clientReview, clientName, clientPosition }, i) => {
            return (
              <SwiperSlide key={i}>
                <SingleReview
                  clientName={clientName}
                  clientPosition={clientPosition}
                  clientImg={clientImg}
                  clientReview={clientReview}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </>
  );
}
