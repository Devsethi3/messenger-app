"use client";

import useConversation from "@/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { BiSend } from "react-icons/bi";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", {
      ...data,
      conversationId: conversationId,
    });
  };

  const handleUpload = (result: any) => {
    axios.post("/api/messages", {
      image: result.info.secure_url,
      conversationId: conversationId,
    });
  };

  return (
    <div className="py-4 px-4 dark:bg-[] border-t flex items-center gap-2 lg:gap-4 w-full">
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset="zt6ojhlz"
      >
        <HiPhoto size={30} className="text-primary" />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          placeholder="Write a message..."
        />
        <Button type="submit" className="flex items-center gap-2">
          Send
          <BiSend />
        </Button>
      </form>
    </div>
  );
};

export default Form;
