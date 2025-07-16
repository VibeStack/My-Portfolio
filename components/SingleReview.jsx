import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SingleReview({
  clientImg,
  clientReview,
  clientName,
  clientPosition,
}) {
  return (
    <div className="inset-0 flex flex-col md:flex-row max-w-[800px] items-center justify-center p-9 mx-15 my-[100px] lg:mx-auto shadow-[0_0_20px_rgba(224,170,255,1)] rounded-lg">
      <img
        className="shrink-0 w-[180px] h-[180px] rounded-full drop-shadow-[0_0_20px_rgba(224,170,255,1)] mt-3" 
        src={clientImg}
        alt=""
      />
      <div className="md:ml-6 text-left pt-16 relative">
        <p className="text-[12px] sm:text-[16px]">{clientReview}</p>
        <h2 className="text-right font-bold text-2xl md:text-4xl text-[rgb(157,78,221)]">
          {clientName}
        </h2>
        <h5 className="text-right text-base md:text-lg text-[#c77dff]">{clientPosition}</h5>
      </div>
    </div>
  );
}
