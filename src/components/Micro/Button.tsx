import React from "react";
import { ButtonModel } from "@/types";

const Button = ({ children, className, onClick, disabled }: ButtonModel) => {
  return (
    <button className={`${className} rounded-full p-2 min-h-[60px] border border-white bg-[#212F38] text-white font-medium`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
