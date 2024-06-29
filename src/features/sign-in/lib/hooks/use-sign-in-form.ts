import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// types
import type { SignInFields } from "../../model/types/general";

// schema
import { signInSchema } from "../../model/schema/sign-in";

export const useSignInForm = ({
  submitHandler,
}: {
  submitHandler: (data: SignInFields) => void;
}) => {
  const form = useForm<SignInFields>({
    resolver: zodResolver(signInSchema),
  });

  const handleSubmit = (data: SignInFields) => {
    submitHandler(data);
  };

  return {
    handleSubmit,
    form,
  };
};
