import * as React from "react";

const StrukturOrganisasi = () => {
  return (
    <div className="bg-slate-100 py-12">
      <div className="m-auto w-[90%] md:w-[50%]">
        <h1 className="text-xl font-semibold text-lime-500">
          Struktur Organisasi
        </h1>
        <ul className="flex list-disc flex-col md:list-none md:items-center md:gap-6">
          <li>
            <h1 className="font-semibold md:rounded-xl md:bg-white md:p-4 md:shadow-md">
              Direktur Rumah Sakit
            </h1>
          </li>
          <div className="md:flex md:flex-row md:justify-evenly md:text-center">
            <li className="rounded-xl md:w-[40%] md:bg-white md:p-4 md:shadow-md">
              <ul>
                <h1 className="font-semibold">
                  Kepala Bagian Administrasi umum
                </h1>
                <li>Kasubang Administrasi Umum</li>
                <li>Kasubang Kepegawaian</li>
                <li>Kasubang Keuangan</li>
              </ul>
            </li>
            <li className="rounded-xl md:w-[40%] md:bg-white md:p-4 md:shadow-md">
              <ul>
                <h1 className="font-semibold">Kepala Bidang Medis</h1>
                <li>Kepala Seksi Rawat Jalan dan Gawat Darurat</li>
                <li>
                  Kepala Seksi Rawat Inap dan Intensif dan Tindakan Invasif
                </li>
              </ul>
            </li>
          </div>
          <div className="md:flex md:flex-row md:justify-evenly md:text-center">
            <li className="rounded-xl md:w-[40%] md:bg-white md:p-4 md:shadow-md">
              <ul>
                <h1 className="font-semibold">Kepala Bidang Keperawatan</h1>
                <li>Kepala Seksi Mutu dan Asuhan Keperawatan</li>
                <li>Kepala Seksi Sumber Daya dan Logistik Keperawatan</li>
              </ul>
            </li>
            <li className="rounded-xl md:w-[40%] md:bg-white md:p-4 md:shadow-md">
              <ul>
                <h1 className="font-semibold">Kepala Bidang Penunjang Medis</h1>
                <li>Kepala Seksi Penunjang Medis</li>
                <li>Kepala Seksi Penunjang Non Medis</li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
