import * as React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const FooterSection = () => {
  return (
    <section className="bg-lime-500 py-[5vh] text-white">
      <div className="m-auto flex w-[90%] flex-col items-center gap-6 md:w-[50%] md:items-start">
        <h1 className="rounded-md bg-white px-1 text-xl font-bold text-lime-500 md:w-fit">
          RSUD DR. Sam Ratulangi Tondano
        </h1>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="font-semibold underline underline-offset-4">
              Navigasi
            </h1>
            <ul className="flex flex-col">
              <li>Tentang Kami</li>
              <li>Layanan</li>
              <li>Tim</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="font-semibold underline underline-offset-4">
              Hubungi Kami
            </h1>
            <ul className="flex flex-col">
              <li className="flex flex-row items-center justify-center gap-1 md:justify-start">
                <FaPhone className="text-white" />
                <p className="text-white">: 0431321117</p>
              </li>
              <li className="flex items-center justify-center gap-1 md:justify-start">
                <FaEnvelope className="text-white" />
                <p className="text-white">: samratulangirsud@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
