import { cn } from "@/utils/utils";
import { FC } from "react";

type CellProps = {
  value?: string;
  styles?: string;
};

export const Cell: FC<CellProps> = ({ value, styles }) => {
  const stylesBg = styles ? styles : "bg-darkBgKeys";

  return (
    <div
      className={cn(
        "w-[60px] h-[60px] flex items-center justify-center  m-1 text-2xl font-bold rounded uppercase",
        stylesBg
      )}
    >
      {value}
    </div>
  );
};
