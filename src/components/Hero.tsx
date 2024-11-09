import * as React from "react";
import Marquee from "react-fast-marquee";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center gap-6 pb-32 pt-44 md:items-center md:pb-40 md:pt-60">
      <Marquee className="flex gap-6">
        <div className="flex gap-6">
          <img
            src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/28/2024/04/22/Screenshot_2024-04-22-17-07-17-41_6012fa4d4ddec268fc5c7112cbb265e7-1908251596.jpg"
            alt="hero"
            className="h-[200px] shadow-md md:h-[300px]"
          />
          <img
            src="https://www.topiksulut.com/wp-content/uploads/2024/03/1000144166-scaled.jpg"
            alt="hero"
            className="h-[200px] shadow-md md:h-[300px]"
          />
          <img
            src="https://asset-2.tstatic.net/manado/foto/bank/images/rsud-sam-ratulangi-tondano.jpg"
            alt="hero"
            className="h-[200px] shadow-md md:h-[300px]"
          />
          <img
            src="https://kanalmetro.com/wp-content/uploads/2021/03/RSUD-Sam-Ratulangi-Tondano.jpg"
            alt="hero"
            className="h-[200px] shadow-md md:h-[300px]"
          />
        </div>
      </Marquee>
      <div className="md::w-[50%] m-auto flex w-[90%] flex-col text-lime-500 md:items-center md:text-left">
        <p className="md:text-center md:font-semibold">Selamat Datang Di</p>
        <div className="text-4xl font-bold md:flex md:gap-2 md:text-5xl">
          <h1>RSUD</h1>
          <h1>SAM RATULANGI</h1>
          <h1>TONDANO</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
