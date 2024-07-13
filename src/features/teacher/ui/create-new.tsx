import { useQueryClient } from "@tanstack/react-query";
import { FormProvider } from "react-hook-form";
import { toast } from "sonner";

// api
import { createNewTeacher } from "../api/create-new";

// store
import { useTeacher } from "@/entities/teacher";

// hooks
import { useCreateNewTeacherForm } from "../lib/hooks/use-form";

// components
import { CircleLoader } from "@/shared/icons/circle-loader";
import { Button } from "@/shared/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { PasswordInput } from "@/shared/ui/password-input";
import { PhoneInput } from "@/shared/ui/phone-number-input";
import { CancelButton } from "@/widgets/cancel-button";

export const CreateNewTeacher = () => {
  const setIsOpenModal = useTeacher((state) => state.setIsOpenModal);
  const queryClient = useQueryClient();

  const { createNewTeacherMutation, isPending } = createNewTeacher(() => {
    toast.success("Роль успешно создана");
    setIsOpenModal(false);
    queryClient.invalidateQueries({
      queryKey: ["teacher"],
    });
  });

  const { handleCreateNewTeacher, form } = useCreateNewTeacherForm({
    onSubmit: createNewTeacherMutation,
  });

  return (
    <FormProvider {...form}>
      <form
        className="grid gap-6"
        onSubmit={form.handleSubmit(handleCreateNewTeacher)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Имя пользователя </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Имя пользователя"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Имя </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Имя "
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Номер телефона </FormLabel>
              <FormControl>
                <PhoneInput
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Пароль </FormLabel>
              <FormControl>
                <PasswordInput
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-6 justify-end items-center">
          <CancelButton variant="destructive" to="/cabinet/teachers" />
          <Button className="w-max" type="submit" disabled={isPending}>
            {isPending ? <CircleLoader className="w-6 h-6" /> : null}
            Создать
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
