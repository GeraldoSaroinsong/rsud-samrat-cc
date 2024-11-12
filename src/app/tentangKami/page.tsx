import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import contentfulClient from "@/lib/contentfulClient";
import { TypePuskesmasSkeleton } from "@/types/project-cc.type";

const getPuskes = async () => {
  try {
    const puskes = await contentfulClient.getEntries<TypePuskesmasSkeleton>({
      content_type: "puskesmas",
    });
    return puskes.items[0];
  } catch (error) {
    console.log(error);
  }
};

const AboutPage = async () => {
  const puskes = await getPuskes();
  return (
    <section className="flex flex-col gap-10 py-[15vh]">
      <div className="m-auto flex w-[90%] flex-col gap-4 md:w-[50%]">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-lime-500">Tentang Kami</h1>
          <p className="text-sm text-gray-600">kenali kami lebih dalam</p>
        </div>
        <hr className="h-2 rounded-full border-none bg-lime-500" />
      </div>
      <div className="mt-4 bg-slate-100 md:mt-10 md:py-10">
        <div className="m-auto flex w-[90%] flex-col gap-4 rounded-xl md:w-[50%] md:flex-row md:gap-6 md:border-8 md:border-yellow-500 md:p-4">
          <div className="flex flex-col gap-2 divide-y">
            <h1 className="text-4xl text-lime-500 md:text-center">Visi</h1>
            <p className="pt-2 text-lg text-gray-600 md:text-center">
              Terwujudnya pelayanan kesehatan yang prima, terjangkau dan berdaya
              saing di RSUD DR. Sam Ratulangi Tondano pada tahun 2013.
            </p>
          </div>
          <div className="flex flex-col gap-2 divide-y">
            <h1 className="text-right text-4xl text-lime-500 md:text-center">
              Misi
            </h1>
            <p className="pt-2 text-lg text-gray-600 md:text-center">
              1. Meningkatkan pelayanan kesehatan melalui peningkatan pelayanan
              medik, non medik, pelayanan penunjang medik, pelayanan asuhan
              keperawatan dan pelayanan rujukan. <br />
              <br /> 2. Meningkatkan kualitas sumber daya manusia di RSUD DR.
              Sam Ratulangi Tondano dalam rangka peningkatan pelayanan
              kesehatan.
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto flex w-[90%] flex-col gap-4 md:mt-10 md:w-[50%]">
        <h1 className="fint-semibold text-4xl text-lime-500">
          Rumah Sakit Rujukan
        </h1>
        <p className="text-justify md:text-left">
          Rumah Sakit Umum Daerah DR. Sam Ratulangi Tondano terletak di Ibu Kota
          Kabupaten Minahasa. Jarak dari pusat kota Tondano ke RSUD DR. Sam
          Ratulangi Tondano sekitar 1.5 km dan dapat ditempuh dengan kendaraan
          bermotor (mobil, motor) maupun kendaraan tradisional (bendi). RSUD DR.
          Sam Ratulangi Tondano merupakan rumah sakit rujukan dari{" "}
          <span className="text-lime-500">21 Puskesmas</span> yang ada di
          Kabupaten Minahasa.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-lime-500">
              Daftar Puskesmas
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-2 divide-y bg-slate-100 px-4 py-2">
                {puskes?.fields.namaPuskesmas.map(
                  (puskesItem: any, idx: number) => {
                    return (
                      <li key={idx} className="pt-2">
                        {idx + 1}. Puskesmas {puskesItem}
                      </li>
                    );
                  },
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default AboutPage;
