import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SingleReview from "./SingleReview";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ExpertsView() {
  const clientReviewData = [
    {
      clientName: "Dr. Kapil Sharma",
      clientPosition: "Assistant Professor, GNDEC",
      clientImg: "/img/kapilSirPic.jpeg",
      clientReview:
        `Arshdeep Anand is an extremely dedicated student who consistently excels in all tasks. His ability to quickly understand complex concepts and his willingness to assist others set him apart. Arshdeep is also an accomplished coder, often referred to as an "Einstein coder," showcasing strong technical skills. He is reliable, always available to support his peers, and demonstrates a deep knowledge of his subjects. Beyond his academic and technical strengths, Arshdeep is a humble and respectful individual. His positive attitude and strong work ethic ensure continued success in all his endeavors.`,
    },
  ];
  return (
    <>
      <section className="max-w-screen mx-auto px-10 bg-[#111] text-center">
        <h2 className="text-[24px] sm:text-6xl relative z-10 font-extrabold px-4 py-4  mx-auto inline-block text-center text-[#5a189a] sm:border-b-2 sm:border-[rgb(157,78,221)] border-2 border-[#9d4edd] rounded-md shadow-2xl shadow-[#e0aaff] p-6 font-['Nunito'] transition-all opacity-100 sm:scale-100 sm:hover:scale-110 duration-500 ease-in-out bg-[#111]">
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
