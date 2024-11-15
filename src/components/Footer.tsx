import * as React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="w-full bg-lime-500 py-[5vh] text-white">
      <div className="m-auto flex w-[90%] flex-col items-center gap-6 md:w-[50%] md:items-start">
        <h1 className="rounded-md bg-white px-1 text-xl font-bold text-lime-500 md:w-fit">
          RSUD DR. Sam Ratulangi Tondano
        </h1>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="font-semibold underline underline-offset-2">
              Navigasi
            </h1>
            <ul className="flex flex-col">
              <li className="rounded-md px-2 hover:bg-white hover:text-lime-500 md:-translate-x-2">
                <a href="/tentangKami">Tentang Kami</a>
              </li>
              <li className="rounded-md px-2 hover:bg-white hover:text-lime-500 md:-translate-x-2">
                <a href="/layanan">Layanan</a>
              </li>
              <li className="rounded-md px-2 hover:bg-white hover:text-lime-500 md:-translate-x-2">
                <a href="/tim">Tim</a>
              </li>
              <li className="rounded-md px-2 hover:bg-white hover:text-lime-500 md:-translate-x-2">
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="px-2 font-semibold underline underline-offset-2">
              Ikuti Kami
            </h1>
            <ul className="flex flex-col">
              <a
                href="https://www.instagram.com/rsud_samrat_tondano/"
                target="_blank"
                className="rounded-md px-2 text-white hover:bg-white hover:text-lime-500"
              >
                <li className="flex flex-row items-center justify-center gap-1 md:justify-start">
                  <FaInstagram />
                  <p>rsud_samrat_tondano</p>
                </li>
              </a>
              <a
                href="https://web.facebook.com/Rsudsamrattondano"
                target="_blank"
                className="rounded-md px-2 text-white hover:bg-white hover:text-lime-500"
              >
                <li className="flex items-center justify-center gap-1 md:justify-start">
                  <FaFacebook />
                  <p>Rsud Samrat Tondano</p>
                </li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="font-semibold underline underline-offset-2">
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
    </div>
  );
};

export default FooterSection;
