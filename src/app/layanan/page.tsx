import contentfulClient from "@/lib/contentfulClient";
import { TypeFasilitasSkeleton } from "@/types/project-cc.type";

const getFasilitas = async () => {
  try {
    const fasilitas = await contentfulClient.getEntries<TypeFasilitasSkeleton>({
      content_type: "fasilitas",
    });

    return fasilitas;
  } catch (error) {
    console.log(error);
  }
};

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
        <div>
          <p>
            Berikut merupakan tipe layanan yang tersedia di{" "}
            <span className="font-semibold capitalize text-lime-500">
              rsud sam ratulangi tondano
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {fasilitas &&
            fasilitas.items?.map((fasilitasItem: any, idx: number) => {
              return (
                <div key={idx}>
                  <h1 className="mb-3 text-3xl text-lime-500">
                    {fasilitasItem.fields.title}
                  </h1>
                  <ul>
                    {fasilitasItem.fields.fasilitasList.map(
                      (e: any, idx: number) => {
                        return (
                          <li key={idx}>
                            {idx + 1}. {e}
                          </li>
                        );
                      },
                    )}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
