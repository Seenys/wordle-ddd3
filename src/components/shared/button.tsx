import React from "react";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      h-[50px]
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-xl
      font-semibold
      hover:opacity-80
      transition
      text-white
      text-2xl
      bg-green
      `}
    >
      {label}
    </button>
  );
};

export default Button;
