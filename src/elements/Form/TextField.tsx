import { FC } from "react";

interface TextFieldProps {
  LeftIcon?: React.FC;
  type: "text" | "numbe";
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: any) => void;
}

const TextField: FC<TextFieldProps> = ({
  LeftIcon,
  type,
  name,
  value,
  placeholder,
  onChange
}) => {
  return (
    <div className="relative text-gray-500 w-80 p-5">
      {LeftIcon && (
        <button type="submit" className="absolute ml-4 mt-3 mr-4">
          <LeftIcon />
        </button>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-dim-700 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow rounded border-0"
      />
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
  name: "search",
  placeholder: ""
};

export default TextField;
