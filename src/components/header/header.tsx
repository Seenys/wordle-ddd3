import { BsQuestionCircleFill } from "react-icons/bs";
import { RiBarChartBoxFill } from "react-icons/ri";

import { FC, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useStatsModal from "@/hooks/useStatsModal";
import useInfoModal from "@/hooks/useInfoModal";
import statsModal from "@/components/modals/statsModal";

interface HeaderProps {
  handleDarkMode: (isDark: boolean) => void;
}

export const Header: FC<HeaderProps> = ({ handleDarkMode }) => {
  const [theme, setTheme] = useState(() => false);
  const statsModal = useStatsModal();
  const infoModal = useInfoModal();
  const themeToggler = () => {
    !theme ? setTheme(true) : setTheme(false);
    handleDarkMode(theme);
  };
  return (
    <>
      <div className=" flex flex-row w-full max-w-[638px] h-[84px] bg-darkBgKeyboard justify-between items-center  rounded-lg mb-16">
        <div className="flex m-auto w-1/5 justify-start">
          <BsQuestionCircleFill
            className="text-2xl ml-3 cursor-pointer"
            onClick={() => infoModal.onOpen()}
          />
        </div>
        <div className="m-auto w-1/2 text-textColor font-bold text-2xl uppercase">
          Wordle
        </div>
        <div className="flex flex-row m-auto w-1/5">
          <RiBarChartBoxFill
            className="flex text-2xl m-auto cursor-pointer"
            onClick={() => statsModal.onOpen()}
          />
          <DarkModeToggle
            checked={theme}
            onChange={themeToggler}
            size={60}
            className="flex text-2xl m-auto cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};
