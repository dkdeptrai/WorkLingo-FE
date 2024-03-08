import React, { InputHTMLAttributes } from "react";

interface TextBoxComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  icon?: React.ReactElement;
}

const TextBoxComponent: React.FC<TextBoxComponentProps> = ({
  label,
  name,
  error,
  touched,
  placeholder,
  icon,
  ...props
}) => {
  const inputClass = `form-control${touched && error ? " is-invalid" : ""} `;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="flex flex-row justify-between items-center input-icon-wrapper relative border border-solid border-1 border-input-border-color rounded-[2px] px-3 py-2">
        {icon}
        <input
          type="text"
          name={name}
          className={inputClass}
          placeholder={placeholder}
          {...props}
        />
      </div>
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextBoxComponent;
