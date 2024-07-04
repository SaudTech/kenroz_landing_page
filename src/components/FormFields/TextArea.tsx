import React, { ChangeEvent } from "react";
import { PiQuestionFill } from "react-icons/pi";

interface TextAreaProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  type?: string;
  description?: string;
  required?: boolean;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  description,
  rows = 4
}) => {
  return (
    <div className="mb-4 ">
      <label className="block text-left text-gray-700 mb-2">
        {label} 
        {required && <span className="text-red-500"> *</span>}
      </label>
      <div className="flex">
        <textarea
          rows={rows}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full p-2 border rounded-sm focus:outline-none ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {
          description && (
            <PiQuestionFill fontSize={30} className="text-gray-500 ml-2 mt-2" title={description} />
          )
        }
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default TextArea;
