import React, { FC } from "react";
import get from "lodash/get";

const colorConfig = {
  "blue": "bg-blue-400 hover:bg-blue-500 text-white border-blue-400 ",
  "white": "bg-white hover:bg-grey-100 text-blue-500 border-blue-500 ",
}

interface IButtonComponent {
  onClick?: () => void;
  type?: "button" | "submit";
  color?: keyof typeof colorConfig,
  isFullWidth?: boolean;
  disabled?: boolean;
  children: string | JSX.Element | JSX.Element[]
}

const ButtonComponent: FC<IButtonComponent> = ({
  isFullWidth = false,
  type = "button",
  color = "blue",
  disabled = false,
  onClick = () => { },
  children
}) => {
  let className = `disabled:cursor-not-allowed disabled:opacity-80 font-semibold text-sm not-italic rounded-full border-solid border box-border flex flex-row items-center justify-center h-10 py-2 px-4 gap-2`
  className += ` ${get(colorConfig, color || "", colorConfig.blue)}`;
  className += ` ${isFullWidth ? "w-full" : ""}`;
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}


export default ButtonComponent;