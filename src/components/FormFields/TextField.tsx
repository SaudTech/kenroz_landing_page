import React, { ChangeEvent } from "react";
import { FaQuestion } from "react-icons/fa";
import { MdQuestionMark } from "react-icons/md";
import { PiQuestionFill } from "react-icons/pi";

interface TextFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  description?: string;
  required?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  type = "text",
  description,
}) => {
  return (
    <div className="mb-4 ">
      <label className="block text-left text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <div className="flex">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        className={`w-full p-2 rounded-sm focus:outline-none focus:border-yellow-500 border-2
             ${error ? "border-red-500" : "border-gray-300"}
          `}
        />
        {description && (
          <PiQuestionFill
            fontSize={30}
            className="text-gray-500 ml-2 mt-2"
            title={description}
          />
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default TextField;
