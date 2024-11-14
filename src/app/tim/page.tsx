import Ketenagaan from "./components/Ketenagaan";
import StrukturOrganisasi from "./components/StrukturOrganisasi";

const TeamsPage = async () => {
  return (
    <section className="flex flex-col gap-10 py-[15vh]">
      <div className="m-auto flex w-[90%] flex-col gap-4 md:w-[50%]">
        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-lime-500">Tim</h1>
          <p className="text-sm text-gray-600">
            Kenali <span className="text-lime-500">tim tenaga kesehatan</span>
            dan jadwal dokter spesialis
          </p>
        </div>
        <hr className="h-2 rounded-full border-none bg-lime-500" />
      </div>
      {/* Struktur Organisasi */}
      <StrukturOrganisasi />
      {/* Ketenagaan */}
      <div className="m-auto w-[90%] md:w-[50%]">
        <h1 className="text-xl font-semibold text-lime-500">Ketenagaan</h1>
        <p>
          RSUD DR. Sam Ratulangi Tondano memiliki{" "}
          <span className="text-nowrap font-semibold text-lime-500">
            392 orang
          </span>{" "}
          total pegawai ASN dan THL dengan berbagai latar belakang pendidikan
          baik di bidang kesehatan maupun non kesehatan/administrasi. Adapun
          seluruh sumber daya manusia yang dimiliki pada tahun{" "}
          <span className="font-semibold text-lime-500">2024</span> ialah
          sebagai berikut:
        </p>
        <Ketenagaan />
      </div>
    </section>
  );
};

export default TeamsPage;
