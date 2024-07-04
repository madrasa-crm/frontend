import { useQueryClient } from "@tanstack/react-query";
import { FormProvider } from "react-hook-form";
import { toast } from "sonner";

// api
import { createNewAdmin } from "../api/create-new";

// store
import { useAdmin } from "@/entities/admin";

// hooks
import { useCreateNewAdminForm } from "../lib/hooks/use-form";

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

export const CreateNewAdmin = () => {
  const setIsOpenModal = useAdmin((state) => state.setIsOpenModal);
  const queryClient = useQueryClient();

  const { createNewAdminMutation, isPending } = createNewAdmin(() => {
    toast.success("Роль успешно создана");
    setIsOpenModal(false);
    queryClient.invalidateQueries({
      queryKey: ["admin"],
    });
  });

  const { handleCreateNewAdmin, form } = useCreateNewAdminForm({
    onSubmit: createNewAdminMutation,
  });

  return (
    <FormProvider {...form}>
      <form
        className="grid gap-6"
        onSubmit={form.handleSubmit(handleCreateNewAdmin)}
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
        <Button type="submit" disabled={isPending}>
          {isPending ? <CircleLoader className="w-6 h-6" /> : null}
          Создать
        </Button>
      </form>
    </FormProvider>
  );
};
