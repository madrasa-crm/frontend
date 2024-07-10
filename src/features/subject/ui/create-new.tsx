import { useSubject } from "@/entities/subject";
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
import { createNewSubject } from "../api/create-new";
import { useCreateNewSubjectForm } from "../lib/hooks/use-form";

export const CreateNewSubject = () => {
  const queryClient = useQueryClient();
  const { setIsModalOpen } = useSubject();
  const { handleCreateNewSubject, isPending } = createNewSubject(() => {
    setIsModalOpen(false);
    toast.success("Success");
    queryClient.invalidateQueries({
      queryKey: ["subject"],
    });
  });

  const { createNewSubjectHandler, form } = useCreateNewSubjectForm({
    onSubmit: handleCreateNewSubject,
  });

  return (
    <FormProvider {...form}>
      <form
        className="grid gap-6"
        onSubmit={form.handleSubmit(createNewSubjectHandler)}
      >
        <FormField
          control={form.control}
          name="name"
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Description </FormLabel>
              <FormControl>
                <Input
                  {...field}
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
