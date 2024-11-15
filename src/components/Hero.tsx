import Marquee from "react-fast-marquee";
import contentfulClient from "@/lib/contentfulClient";
import {
  TypeJadwalPraktekDokterSkeleton,
  TypeMediaAsset,
} from "@/types/project-cc.type";
import Image from "next/image";

const getHero = async () => {
  try {
    const hero =
      await contentfulClient.getEntries<TypeJadwalPraktekDokterSkeleton>({
        content_type: "jadwalPraktekDokter",
      });
    return hero;
  } catch (error) {
    console.log(error);
  }
};

const HeroSection = async () => {
  const hero = await getHero();
  return (
    <div className="flex flex-col justify-center gap-6 pb-32 pt-44 md:items-center md:pb-40 md:pt-60">
      <Marquee className="flex gap-6">
        <div className="flex gap-6">
          {hero &&
            hero.items[0]?.fields.image.map((heroItem: any, idx: number) => {
              return (
                <Image
                  key={idx}
                  src={`https:${(heroItem as TypeMediaAsset)?.fields.file.url}`}
                  alt="hero"
                  className="h-[200px] shadow-md md:h-[300px]"
                  width={500}
                  height={500}
                />
              );
            })}
        </div>
      </Marquee>
      <div className="md::w-[50%] m-auto flex w-[90%] flex-col text-lime-500 md:items-center md:text-left">
        <p className="md:text-center md:font-semibold">Selamat Datang Di</p>
        <div className="text-4xl font-bold md:flex md:gap-2 md:text-5xl">
          <h1>RSUD</h1>
          <h1>DR. SAM RATULANGI</h1>
          <h1>TONDANO</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
