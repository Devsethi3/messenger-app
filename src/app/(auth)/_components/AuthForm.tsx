"use client";
import { useCallback, useEffect, useState } from "react";
import {
  FieldValues,
  FieldErrors,
  useForm,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      console.log("Authenticated");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    setVariant((prevVariant) =>
      prevVariant === "LOGIN" ? "REGISTER" : "LOGIN"
    );
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Specify the type for onSubmit
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    }
    if (variant === "LOGIN") {
      signIn("credentials", { ...data, redirect: false })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid Credentials");
          }
          if (callback?.ok && !callback?.error) {
            toast.success("Logged in Successfully!");
            router.push("/users");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const handleSignInWithGithub = async () => {
    setIsLoading(true);
    await signIn("github", { callbackUrl: "/users" });
  };

  const handleSignInWithGoogle = async () => {
    setIsLoading(true);
    await signIn("google", { callbackUrl: "/users" });
  };

  // const socialAction = (action: string) => {
  //   setIsLoading(true);

  //   signIn(action, { redirect: false })
  //     .then((callback) => {
  //       if (callback?.error) {
  //         toast.error("Invalid Credentials");
  //       }
  //       if (callback?.ok && !callback?.error) {
  //         toast.success("Logged in Successfully!");
  //         router.push("/users");
  //       }
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  return (
    <div className="mt-4 mx-2 w-[330px] md:w-[400px] lg:w-[450px]">
      <div className="bg-white dark:bg-[#030712] p-8 shadow-md rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {variant === "REGISTER" && (
            <FormInput
              errors={errors}
              id="name"
              label="Name"
              register={register}
              placeholder="Display Name"
              type="name" // Adding type
              required // Adding required
              disabled={isLoading} // Example of how you can pass disabled prop
            />
          )}
          <FormInput
            errors={errors}
            id="email"
            label="Email"
            placeholder="abc@gmail.com"
            register={register}
            type="email" // Adding type
            required // Adding required
            disabled={isLoading} // Example of how you can pass disabled prop
          />
          <FormInput
            errors={errors}
            id="password"
            label="Passoword"
            placeholder="Enter Your Password"
            register={register}
            type="password" // Adding type
            required // Adding required
            disabled={isLoading} // Example of how you can pass disabled prop
          />
          <div>
            <FormButton
              type="submit"
              fullWidth={true} // Example of how you can pass fullWidth prop
              disabled={isLoading} // Example of how you can pass disabled prop
            >
              {variant === "LOGIN" ? "Login" : "Register"}
            </FormButton>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute 
                inset-0 
                flex 
                items-center
              "
            >
              <div className="w-full border-t border-gray-300 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-[#030712] px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={handleSignInWithGithub}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={handleSignInWithGoogle}
            />
          </div>
        </div>
        <div
          className="
          whitespace-nowrap
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
            dark:text-gray-400
          "
        >
          <div>
            {variant === "LOGIN"
              ? "New to NexChat?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
