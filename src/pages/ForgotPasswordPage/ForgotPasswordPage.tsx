import Logo from "@/components/custom/Logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import key from "../../assets/key.svg";

const formSchema = z.object({
  email: z.string().email(),
});

const ForgotPasswordPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="space-y-20">
      <Logo />
      <div className="flex justify-center">
        <img src={key} alt="key" />
      </div>
      <div>
        <div className="my-16 text-center">
          <h1 className="text-3xl">Forgot you password ?</h1>
          <h2 className="text-gray-400 text-lg">
            No worries, we will send you a reset instruction
          </h2>
        </div>
        <div className="flex justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-1/4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-colour-lavender w-full text-colour-indigo"
                type="submit"
              >
                Send
              </Button>
              <div className="flex justify-center">
                <Link
                  to="/login"
                  className="text-gray-400 text-sm font-medium flex items-center"
                >
                  <ArrowLeftIcon className="mr-2" />
                  Return to sign in
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
