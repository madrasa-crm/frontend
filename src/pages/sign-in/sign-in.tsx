// components
import { Form } from "@/features/sign-in";
import { ModeToggle } from "@/shared/ui/mode-toggle";

const SignIn = () => {
  return (
    <>
      <header className="p-6 flex justify-end">
        <ModeToggle />
      </header>
      <section className="flex flex-col items-center justify-center min-h-[80vh]">
        <Form />
      </section>
    </>
  );
};

export default SignIn;
