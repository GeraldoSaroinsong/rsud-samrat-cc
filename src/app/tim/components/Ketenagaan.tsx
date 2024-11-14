import * as React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Ketenagaan = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-semibold">
          Lihat Ketenagaan
        </AccordionTrigger>
        <AccordionContent className="bg-slate-100">
          <Table>
            <TableCaption>Total 392 Org</TableCaption>
            <TableHeader>
              <TableRow className="text-lg">
                <TableHead className="text-left font-bold text-lime-500">
                  Jenis Tenaga
                </TableHead>
                <TableHead className="text-right font-bold text-lime-500">
                  Jumlah
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Manajemen</TableCell>
                <TableCell className="text-right">13 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Dokter Umum dan Dokter Gigi</TableHead>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Umum</TableCell>
                <TableCell className="text-right">18 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Gigi</TableCell>
                <TableCell className="text-right">3 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Dokter Spesialis</TableHead>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Penyakit Dalam</TableCell>
                <TableCell className="text-right">4 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Bedah</TableCell>
                <TableCell className="text-right">2 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Anak</TableCell>
                <TableCell className="text-right">2 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Kebidanan dan Kandungan</TableCell>
                <TableCell className="text-right">3 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Anastesi</TableCell>
                <TableCell className="text-right">2 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Radiologi</TableCell>
                <TableCell className="text-right">1 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Patologi Klinik</TableCell>
                <TableCell className="text-right">1 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Mata</TableCell>
                <TableCell className="text-right">2 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Saraf</TableCell>
                <TableCell className="text-right">2 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Jantung</TableCell>
                <TableCell className="text-right">1 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Rehabilitasi Medik</TableCell>
                <TableCell className="text-right">2 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Kulit Kelamin</TableCell>
                <TableCell className="text-right">1 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dokter Spesialis Psikiatri</TableCell>
                <TableCell className="text-right">1 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Perawat dan Nakes Lainnya</TableHead>
              </TableRow>
              <TableRow>
                <TableCell>Perawat</TableCell>
                <TableCell className="text-right">155 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Perawat Gigi</TableCell>
                <TableCell className="text-right">3 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bidan</TableCell>
                <TableCell className="text-right">14 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Apoteker</TableCell>
                <TableCell className="text-right">5 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Asisten Apoteker</TableCell>
                <TableCell className="text-right">10 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fisioterapi</TableCell>
                <TableCell className="text-right">6 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gizi</TableCell>
                <TableCell className="text-right">4 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Analis</TableCell>
                <TableCell className="text-right">10 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Radiografer</TableCell>
                <TableCell className="text-right">4 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Kesling</TableCell>
                <TableCell className="text-right">4 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rekam Medis</TableCell>
                <TableCell className="text-right">3 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Transfusi Darah</TableCell>
                <TableCell className="text-right">1 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Elektromedis</TableCell>
                <TableCell className="text-right">1 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Penata Anastesi</TableCell>
                <TableCell className="text-right">2 Org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Non Kesehatan</TableCell>
                <TableCell className="text-right">110 Org</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Ketenagaan;
