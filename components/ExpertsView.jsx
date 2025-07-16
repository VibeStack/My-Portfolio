import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../src/App.css';

export default function ExpertsView() {
  return (
    <>
      <section className="max-w-screen mx-auto px-10 bg-[#111] text-center">
        <h2 className="text-4xl sm:text-6xl relative z-10 font-extrabold px-4 py-2  mx-auto inline-block text-center text-[#5a189a] sm:border-b-2 sm:border-[#9d4edd] border-2 border-[#9d4edd] rounded-md shadow-2xl shadow-[#e0aaff] p-6 font-['Nunito'] opacity-75 transition-all hover:opacity-100 sm:scale-100 sm:hover:scale-110 duration-500 ease-in-out">
          What Experts Say About My Work
        </h2>
      </section>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper> */}
    </>
  );
}
