// icons
import { AppLogo } from "@/shared/icons/app-logo";

// components
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/cart";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

// api
import { signIn } from "../api/sign-in";

// hooks
import { useSignInForm } from "../lib/hooks/use-sign-in-form";

export const SignInForm = () => {
  const { mutateAsync } = signIn();
  const { handleSubmit, form } = useSignInForm({
    submitHandler: mutateAsync,
  });

  return (
    <Card className="p-12 w-full max-w-[500px] mx-6">
      <CardHeader>
        <AppLogo className="mb-12" />
        <CardTitle className="mb-3">Добро пожаловать!</CardTitle>
        <CardDescription className="text-primary">
          Введите данные для входа
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="grid gap-6"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Введите логин</FormLabel>
                  <FormControl>
                    <Input placeholder="+998900443773" {...field} />
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
                  <FormLabel>Введите пароль</FormLabel>
                  <FormControl>
                    <Input placeholder="12345678" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Вход</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
