import { TypeMediaAsset } from "@/types/project-cc.type";
import Image from "next/image";
import { getFasilitas } from "./lib/fetchData";
import JadwalPraktekDokter from "./component/JadwalPraktekDokter";

const ServicePage = async () => {
  const fasilitas = await getFasilitas();
  return (
    <section className="flex flex-col gap-6 py-[15vh]">
      <div className="m-auto flex w-[90%] flex-col gap-4 md:w-[50%]">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-lime-500">Layanan</h1>
          <p className="text-sm text-gray-600">
            Lihat <span className="text-lime-500">layanan</span> apa saja yang
            kami sediakan
          </p>
        </div>
        <hr className="h-2 rounded-full border-none bg-lime-500" />
      </div>
      <div className="m-auto flex w-[90%] flex-col gap-6 md:w-[50%]">
        <p>
          Berikut merupakan tipe layanan yang tersedia di{" "}
          <span className="font-semibold capitalize text-lime-500">
            rsud sam ratulangi tondano
          </span>
        </p>
      </div>
      <div className="flex flex-col py-10">
        <div className="m-auto flex w-[90%] flex-col gap-4 md:w-[50%] md:flex-row md:justify-around">
          <Image
            src={`https:${(fasilitas?.items[0].fields.image as TypeMediaAsset)?.fields.file.url}`}
            alt="tipe layanan"
            className="w-[300px] place-self-center transition md:hover:-translate-y-4"
            width={500}
            height={500}
          />
          <div className="flex flex-col">
            <h1 className="mb-3 text-3xl text-lime-500">
              {fasilitas?.items[0].fields.title}
            </h1>
            <ul>
              {fasilitas?.items[0].fields.fasilitasList.map(
                (e: any, idx: number) => {
                  return <li key={idx}>- {e}</li>;
                },
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-slate-100 py-10">
        <div className="m-auto flex w-[90%] flex-col gap-6 md:w-[50%] md:flex-row-reverse md:justify-around">
          <Image
            src={`https:${(fasilitas?.items[1].fields.image as TypeMediaAsset)?.fields.file.url}`}
            alt="tipe layanan"
            className="w-[250px] place-self-center transition duration-200 md:hover:-translate-y-4"
            width={500}
            height={500}
          />
          <div className="flex flex-col text-right">
            <h1 className="mb-3 text-3xl text-lime-500">
              {fasilitas?.items[1].fields.title}
            </h1>
            <ul>
              {fasilitas?.items[1].fields.fasilitasList.map(
                (e: any, idx: number) => {
                  return <li key={idx}>{e} -</li>;
                },
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10">
        <div className="m-auto flex w-[90%] flex-col gap-4 md:w-[50%] md:flex-row md:justify-around">
          <Image
            src={`https:${(fasilitas?.items[2].fields.image as TypeMediaAsset)?.fields.file.url}`}
            alt="tipe layanan"
            className="w-[300px] place-self-center transition md:hover:-translate-y-4"
            width={500}
            height={500}
          />
          <div className="flex flex-col">
            <h1 className="mb-3 text-3xl text-lime-500">
              {fasilitas?.items[2].fields.title}
            </h1>
            <ul>
              {fasilitas?.items[2].fields.fasilitasList.map(
                (e: any, idx: number) => {
                  return <li key={idx}>- {e}</li>;
                },
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* Jadwal Praktek Dokter */}
      <JadwalPraktekDokter />
    </section>
  );
};

export default ServicePage;
