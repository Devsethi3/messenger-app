"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  register,
  required,
  errors,
  type,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="px-4 text-foreground py-2.5 bg-secondary/70 dark:bg-secondary/30 w-full rounded-md focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;
