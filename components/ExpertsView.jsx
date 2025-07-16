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
      clientName: "Saatvik Nagpal",
      clientPosition: "Founder, EazyGrad",
      clientImg: "/img/lion.png",
      clientReview:
        "Anurag is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!",
    },
    {
      clientName: "Saatvik Nagpal",
      clientPosition: "Founder, EazyGrad",
      clientImg: "/img/lion.png",
      clientReview:
        "Anurag is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!",
    },
    {
      clientName: "Saatvik Nagpal",
      clientPosition: "Founder, EazyGrad",
      clientImg: "/img/lion.png",
      clientReview:
        "Anurag is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!",
    },
  ];
  return (
    <>
      <section className="max-w-screen mx-auto px-10 bg-[#111] text-center">
        <h2 className="text-4xl sm:text-6xl relative z-10 font-extrabold px-4 py-2  mx-auto inline-block text-center text-[#5a189a] sm:border-b-2 sm:border-[rgb(157,78,221)] border-2 border-[#9d4edd] rounded-md shadow-2xl shadow-[#e0aaff] p-6 font-['Nunito'] transition-all opacity-100 sm:scale-100 sm:hover:scale-110 duration-500 ease-in-out bg-[#111]">
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
