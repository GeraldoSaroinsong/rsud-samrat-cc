import contentfulClient from "@/lib/contentfulClient";
import {
  TypeFasilitasSkeleton,
  TypeJadwalPraktekDokterSkeleton,
} from "@/types/project-cc.type";

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

const getTeam = async () => {
  try {
    const team =
      await contentfulClient.getEntries<TypeJadwalPraktekDokterSkeleton>({
        content_type: "jadwalPraktekDokter",
      });
    return team;
  } catch (error) {
    console.log(error);
  }
};

export { getTeam, getFasilitas };
