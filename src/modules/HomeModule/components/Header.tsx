import { SvgChevronDown, SvgUser } from "@/assets/icons";
import { wovnnLogoImg } from "@/assets/images";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { searchMenuItems } from "../constants/searchOptions";
import { resourcesMenuItems } from "../constants/searchOptions";
import { aboutMenuItems } from "../constants/searchOptions";
import classNames from "classnames";

type HeaderProps = {
  isSearchView?: boolean;
};
const Header: React.FC<HeaderProps> = ({ isSearchView }) => {
  return (
    <div
      className={classNames(
        " top-[30px] left-[90px] right-[90px] flex items-center justify-between z-20",
        {
          absolute: !isSearchView,
        }
      )}
    >
      <div className="h-[70px] w-[135px]">
        <img
          src={wovnnLogoImg}
          alt="Wovnn Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <nav className="flex items-center gap-12">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-white text-base capitalize hover:bg-white/10 hover:text-white"
            >
              Search
              <SvgChevronDown className="w-4 h-4 transform" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="z-[100] bg-white border-gray-200">
            {searchMenuItems.map((item) => (
              <DropdownMenuItem key={item.value} className="cursor-pointer">
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-white text-base capitalize hover:bg-white/10 hover:text-white"
            >
              Resources
              <SvgChevronDown className="w-4 h-4 transform" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="z-[100] bg-white border-gray-200">
            {resourcesMenuItems.map((item) => (
              <DropdownMenuItem key={item.value} className="cursor-pointer">
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-white text-base capitalize hover:bg-white/10 hover:text-white"
            >
              About
              <SvgChevronDown className="w-4 h-4 transform" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-[100] bg-white border-gray-200">
            {aboutMenuItems.map((item) => (
              <DropdownMenuItem key={item.value} className="cursor-pointer">
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          className="text-white text-base capitalize hover:bg-white/10 hover:text-white"
        >
          Contact Us
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white"
        >
          <SvgUser className="w-6 h-6" />
        </Button>
      </nav>
    </div>
  );
};

export default Header;
