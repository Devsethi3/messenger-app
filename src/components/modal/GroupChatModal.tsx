"use client";

import FormInput from "@/app/(auth)/_components/FormInput";
import Modal from "@/components/modal/Modal";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "../Select";

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  users: User[];
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      members: [],
    },
  });

  const members = watch("members");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        ...data,
        isGroup: true,
      })
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-lg font-semibold leading-7 text-gray-900">
                Create a group chat
              </h2>
              <p className="text-xs leading-6 text-gray-600">
                Create a chat with more than 2 people
              </p>
              <div className="mt-10 flex flex-col gap-y-8">
                <FormInput
                  register={register}
                  placeholder="Group Name..."
                  label="Name"
                  disabled={isLoading}
                  id="name"
                  required
                  errors={errors}
                />
                <Select
                  disabled={isLoading}
                  label={members}
                  options={users.map((user) => ({
                    value: user.id,
                    label: user.name,
                  }))}
                  onChnage={(value) =>
                    setValue("members", value, {
                      shouldValidate: true,
                    })
                  }
                  value={members}
                />
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default GroupChatModal;
