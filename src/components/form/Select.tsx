import React from "react";
import { UseFormRegister, Path } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SelectProps<T extends Record<string, unknown>> {
  options: Option[];
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: Path<T>;
  register: UseFormRegister<T>;
}

const Select = <T extends Record<string, unknown>>({
  options,
  placeholder = "Select an option",
  className = "",
  defaultValue = "",
  value,
  onChange,
  name,
  register,
}: SelectProps<T>) => {
  return (
    <select
      {...register(name)}
      className={`shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 px-4 py-2.5 pr-11 text-sm placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${className}`}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
