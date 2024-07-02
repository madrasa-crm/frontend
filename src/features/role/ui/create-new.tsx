import { useQueryClient } from "@tanstack/react-query";
import { FormProvider } from "react-hook-form";
import { toast } from "sonner";

// api
import { createNewRole } from "../api/create-new";

// store
import { useRole } from "@/entities/role";

// hooks
import { useCreateNewRoleForm } from "../lib/hooks/use-form";

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

export const CreateNewRole = () => {
  const setIsOpenModal = useRole((state) => state.setIsOpenModal);
  const queryClient = useQueryClient();

  const { createNewRoleMutation, isPending } = createNewRole(() => {
    toast.success("Роль успешно создана");
    setIsOpenModal(false);
    queryClient.invalidateQueries({
      queryKey: ["role"],
    });
  });

  const { handleCreateNewRole, form } = useCreateNewRoleForm({
    onSubmit: createNewRoleMutation,
  });

  return (
    <FormProvider {...form}>
      <form
        className="grid gap-6"
        onSubmit={form.handleSubmit(handleCreateNewRole)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Название </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Название"
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Описание роли </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Описание "
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
