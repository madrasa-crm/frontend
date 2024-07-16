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
import { useQueryClient } from "@tanstack/react-query";
import { FormProvider } from "react-hook-form";
import { toast } from "sonner";
import { createNewGroup } from "../api/create-new";
import { useCreateNewGroupForm } from "../lib/hooks/use-form";
import { useGroup } from "@/entities/group";

export const CreateNewGroup = () => {
  const queryClient = useQueryClient();
  const { setIsGroupModalOpen } = useGroup();
  const { handleCreateNewGroup, isPending } = createNewGroup(() => {
    setIsGroupModalOpen(false);
    toast.success("Success");
    queryClient.invalidateQueries({
      queryKey: ["group"],
    });
  });

  const { createNewGroupHandler, form } = useCreateNewGroupForm({
    onSubmit: handleCreateNewGroup,
  });

  return (
    <FormProvider {...form}>
      <form
        className="grid gap-6"
        onSubmit={form.handleSubmit(createNewGroupHandler)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Создания </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Создания группы"
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
