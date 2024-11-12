import * as React from "react";

const TeamsPage = () => {
  return (
    <section className="py-[15vh]">
      <div className="m-auto flex w-[90%] flex-col gap-4 md:w-[50%]">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-lime-500">Ketenagaan</h1>
          <p className="text-sm text-gray-600">
            Kenali <span className="text-lime-500">tim tenaga kesehatan</span>{" "}
            dan jadwal dokter spesialis
          </p>
        </div>
        <hr className="h-2 rounded-full border-none bg-lime-500" />
      </div>
    </section>
  );
};

export default TeamsPage;
