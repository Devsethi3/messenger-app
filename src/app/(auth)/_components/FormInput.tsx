"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled: boolean;
  placeholder:string
}

const FormInput = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder
}: InputProps) => {
  return (
    <>
      <div>
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-foreground"
        >
          {label}
        </label>
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder={placeholder}
          className={clsx(`form-input block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 px-4 sm:text-sm sm:leading-6 outline-none`, errors[id] && "focus:ring-rose-500",disabled && "opacity-50 cursor-default")}
        />
      </div>
    </>
  );
};

export default FormInput;
