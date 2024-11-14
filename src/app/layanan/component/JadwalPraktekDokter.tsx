import { TypeMediaAsset } from "@/types/project-cc.type";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getTeam } from "../lib/fetchData";

const JadwalPraktekDokter = async () => {
  const team = await getTeam();
  return (
    <div className="bg-slate-100 py-10 md:py-20">
      <div className="m-auto flex w-[90%] flex-col gap-8">
        <div>
          <h1 className="text-center text-3xl text-lime-500">
            Jadwal Praktek Dokter
          </h1>
          <p className="text-center">
            Lihat jadwal praktik dokter selengkapnya di{" "}
            <span className="text-nowrap text-lime-500">
              <a href="https://web.facebook.com/Rsudsamrattondano">facebook</a>
            </span>{" "}
            atau{" "}
            <span className="text-nowrap text-lime-500">
              <a href="https://www.instagram.com/rsud_samrat_tondano/">
                instagram
              </a>
            </span>{" "}
            kami
          </p>
        </div>
        <Carousel className="m-auto w-[80%] md:w-[90%]">
          <CarouselContent className="px-1">
            {team &&
              team.items[0]?.fields.image.map((teamItem: any, idx: number) => {
                return (
                  <CarouselItem key={idx} className="basis-full md:basis-1/3">
                    <div className="overflow-hidden rounded-xl border-4 border-lime-500 shadow-md">
                      <Image
                        src={`https:${
                          (teamItem as TypeMediaAsset)?.fields.file.url
                        }`}
                        alt="project item"
                        className="w-full object-contain transition duration-150 hover:scale-110"
                        width={300}
                        height={300}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default JadwalPraktekDokter;
