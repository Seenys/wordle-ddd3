// React imports
import { FC, useState } from "react";
// Hooks
import useStatsModal from "@/hooks/useStatsModal";
import useInfoModal from "@/hooks/useInfoModal";
// icons
import { RiBarChartBoxFill } from "react-icons/ri";
import { BsQuestionCircleFill } from "react-icons/bs";
import Button from "../shared/button";

interface HeaderProps {
  handleDarkMode: (isDark: boolean) => void;
  title: string;
}

export const Header: FC<HeaderProps> = ({
  handleDarkMode,
  title = "wordle",
}) => {
  const [theme, setTheme] = useState<boolean>(false);
  const statsModal = useStatsModal();
  const infoModal = useInfoModal();
  const themeToggler = () => {
    setTheme(!theme);
    handleDarkMode(theme);
  };
  return (
    <>
      <div className=" flex flex-row w-full max-w-[638px] h-[84px] dark:bg-darkBgKeyboard bg-lightBgKeyboard justify-between items-center  rounded-lg mb-16">
        <div className="flex m-auto w-1/5 justify-start">
          <BsQuestionCircleFill
            className="text-2xl dark:text-lightText text-gray ml-3 cursor-pointer"
            onClick={() => infoModal.onOpen()}
          />
        </div>
        <div className="m-auto w-1/2 dark:text-lightText text-darkText font-bold text-2xl uppercase">
          {title}
        </div>
        <div className="flex flex-row m-auto w-1/5">
          <RiBarChartBoxFill
            className="flex dark:text-lightText text-gray text-2xl m-auto cursor-pointer"
            onClick={() => statsModal.onOpen()}
          />
          <Button onClick={themeToggler} label={theme ? "light" : "dark"} />
        </div>
      </div>
    </>
  );
};
