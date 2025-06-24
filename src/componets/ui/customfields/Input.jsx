// components/ui/customfields/Input.jsx
import React from "react";

// ForwardRef required for react-hook-form compatibility
const Input = React.forwardRef(
  ({ label, name, type = "text", placeholder = "", className = "", ...rest }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {label && (
          <label htmlFor={name} className="font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
);

export default Input;
