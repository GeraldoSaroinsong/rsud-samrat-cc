import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCalendar, FaEnvelope, FaPhone } from "react-icons/fa";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <div className="fixed z-10 w-full divide-y-2 bg-slate-100/95 shadow-sm">
      <div className="m-auto flex w-[90%] items-center justify-between py-2 text-lime-500 md:w-[50%] md:py-4">
        <a href="#" className="text-md flex flex-col md:flex-row md:text-xl">
          <h1 className="rounded-t-md bg-lime-500 px-0.5 text-white md:rounded-l-md md:rounded-se-none">
            RSUD
          </h1>
          <h1>Sam Ratulangi</h1>
        </a>
        {/* Desktop Navbar */}
        <div className="hidden gap-2 md:flex">
          <a
            href="#"
            className="rounded-md px-4 py-1 transition duration-200 hover:bg-lime-500 hover:text-white"
          >
            Tentang Kami
          </a>
          <a
            href="#"
            className="rounded-md px-4 py-1 transition duration-200 hover:bg-lime-500 hover:text-white"
          >
            Layanan
          </a>
          <a
            href="#"
            className="rounded-md px-4 py-1 transition duration-200 hover:bg-lime-500 hover:text-white"
          >
            Tim
          </a>
        </div>
        {/* Mobile Navbar */}
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <GiHamburgerMenu className="text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <a href="#" className="hover:text-white">
                  Tentang Kami
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#" className="hover:text-white">
                  Layanan
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#" className="hover:text-white">
                  Tim
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="m-auto hidden items-center justify-center gap-2 divide-x-2 text-xs md:flex md:w-[50%] md:py-2">
        <div className="flex items-center gap-1">
          <FaPhone className="text-lime-500" />
          <p className="text-gray-500">: 0431321117</p>
        </div>
        <div className="flex items-center gap-1 pl-2">
          <FaCalendar className="text-lime-500" />
          <p className="text-gray-500">: 06:00 - 22:00 WITA (Senin-Sabtu)</p>
        </div>
        <div className="flex items-center gap-1 pl-2">
          <FaEnvelope className="text-lime-500" />
          <p className="text-gray-500">: samratulangirsud@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
