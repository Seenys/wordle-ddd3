import { usedKeys, colorStatus, keyboardKeys } from "@/models/wordle";
import { cn } from "@/utils/utils";
import { FC, JSX } from "react";

interface KeyboardProps {
  onClick: (key: string) => void;
  usedKeys: usedKeys;
}

export const Keyboard: FC<KeyboardProps> = ({
  onClick: onClickProps,
  usedKeys: usedKeys,
}) => {
  console.log(usedKeys);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { textContent, innerHTML } = e.currentTarget;

    let returnProps: string = textContent!;

    if (textContent !== innerHTML) {
      returnProps = "Backspace";
    }

    onClickProps(returnProps);
  };

  return (
    <div
      className={`flex flex-col bg-darkBgKeyboard w-full max-w-[638px] mt-16 p-[33px] rounded-xl`}
    >
      {keyboardKeys.map((keyboardRow: string[], rowIndex: number) => {
        const keyRowStyles: { [key: string]: string } = {
          "0": "my-2",
          "1": "ml-10",
          "2": "mr-10",
        };
        return (
          <div
            key={rowIndex}
            className={cn(
              "flex justify-center mb-2 space-x-1 text-white text-center",
              keyRowStyles[rowIndex]
            )}
          >
            {keyboardRow.map((key: string, index: number) => {
              let styles: string =
                "rounded w-[44px] h-[51px] font-bold uppercase flex-1 py-2 bg-darkBgKeys text-center items-center justify-center";
              let statusColor: string = colorStatus[usedKeys[key]];
              if (key === "") return;
              return (
                <button
                  onClick={onClick}
                  key={key + index}
                  className={cn(
                    " items-center justify-center align-middle text-center",
                    styles,
                    statusColor
                  )}
                >
                  {key === "Backspace" ? backspace : key}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const backspace: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-[3.5rem] h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
    ></path>
  </svg>
);
