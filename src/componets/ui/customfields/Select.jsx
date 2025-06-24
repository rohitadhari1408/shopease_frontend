// components/ui/customfields/Select.jsx
import React from "react";

const Select = React.forwardRef(
  ({ label, name, options = [], placeholder = "Select an option", className = "", ...rest }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {label && (
          <label htmlFor={name} className="font-medium text-gray-700">
            {label}
          </label>
        )}
        <select
          id={name}
          name={name}
          ref={ref}
          {...rest}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">{placeholder}</option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
