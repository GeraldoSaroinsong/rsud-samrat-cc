import HeroSection from "@/components/Hero";
import contentfulClient from "@/lib/contentfulClient";
import {
  TypeTipeLayananSkeleton,
  TypeMediaAsset,
} from "@/types/project-cc.type";
import Image from "next/image";

// retrieve portfolio items
const getServices = async () => {
  try {
    const layanan = await contentfulClient.getEntries<TypeTipeLayananSkeleton>({
      content_type: "tipeLayanan",
    });
    return layanan;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const layanan = await getServices();
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <section className="bg-slate-100 py-[15vh]">
        <div className="m-auto flex w-[90%] flex-col gap-24 md:w-[50%] md:flex-row md:items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://www.rsudsamrat.site/epasien/images/author-image.jpg"
              alt="direktur"
              className="h-[150px] w-[150px] rounded-full shadow-md"
            />
            <div className="text-center text-gray-600">
              <h1 className="font-semibold md:text-xl">
                Dr. Nancy Mongdong, MHSM, SpPD, FINASIM
              </h1>
              <p className="text-xs md:text-sm">Direktur Utama</p>
            </div>
          </div>
          <div className="m-auto flex flex-col items-center gap-2 text-center md:w-[50%] md:items-start md:text-left">
            <h1 className="text-3xl font-semibold text-lime-500 transition duration-150 hover:-translate-y-2 md:text-4xl">
              Sedikit Tentang Kami
            </h1>
            <p className="pt-3 text-sm">
              RSUD SAM RATULANGI TONDANO merupakan salah satu rumah sakit umum
              di wilayah TONDANO yang berkedudukan di JL. SUPRAPTO LUAAN TONDANO
              TIMUR. RSUD SAM RATULANGI TONDANO mendapat izin operasional dengan
              Kode PPK 7102014 sejak bulan November 2009 dan diresmikan tanggal
              21 februari 2010.
            </p>
            <a
              href="#"
              className="mt-3 rounded-md border-2 border-lime-500 px-4 py-2 text-lime-500 transition duration-150 hover:bg-lime-500 hover:text-white"
            >
              Lanjut Baca
            </a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-[15vh]">
        <div className="m-auto flex w-[90%] flex-col items-center justify-center md:w-[50%]">
          <h1 className="text-4xl font-semibold text-lime-500">Layanan</h1>
          <div className="flex flex-col flex-wrap gap-10 pb-10 pt-6 md:w-full md:flex-row md:items-end md:justify-between md:gap-0">
            {layanan &&
              layanan.items?.map((serviceItem: any, index: number) => {
                return (
                  <div
                    className="flex flex-col flex-wrap items-center text-center"
                    key={index}
                  >
                    <Image
                      src={`https:${
                        (serviceItem.fields.image as TypeMediaAsset)?.fields
                          .file.url
                      }`}
                      alt="service item"
                      className="w-[70vw] md:w-[30vh]"
                      width={300}
                      height={300}
                    />
                    <p className="font-sans text-base font-semibold text-lime-500 md:text-lg">
                      {serviceItem.fields.title}
                    </p>
                  </div>
                );
              })}
          </div>
          <a
            href="#"
            className="mt-3 rounded-md border-2 border-lime-500 px-4 py-2 text-lime-500 transition duration-150 hover:bg-lime-500 hover:text-white"
          >
            Lanjut Baca
          </a>
        </div>
      </section>
      {/* Map Section */}
      <section className="bg-slate-100 py-[15vh]">
        <div className="m-auto mb-5 flex w-[90%] flex-row justify-end md:w-[50%]">
          <h1 className="w-fit text-3xl font-semibold text-lime-500 transition duration-150 hover:-translate-y-2 md:text-4xl">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/RSUD+DR+SAM+RATULANGI+TONDANO/@1.3094742,124.9139868,17z/data=!3m1!4b1!4m6!3m5!1s0x32871525dad70799:0xe2b43fc8c1826f2a!8m2!3d1.3094688!4d124.9165617!16s%2Fg%2F11r_k76p92?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
            >
              Lokasi Kami
            </a>
          </h1>
        </div>
        <iframe
          height="400"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=rsud%20sam%20ratulangi&zoom=16&maptype=roadmap"
          className="w-full shadow-md"
        ></iframe>
      </section>
    </div>
  );
}
