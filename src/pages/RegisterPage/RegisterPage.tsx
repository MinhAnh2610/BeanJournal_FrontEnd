import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, Button } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import Logo from "@/components/custom/Logo";
import { useState } from "react";
import { useAuth } from "@/context/useAuth";

const formSchema = z.object({
  userName: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
  confirmPassword: z.string().nonempty(),
});

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { registerUser } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(
      formSchema.refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      })
    ),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await registerUser(
        values.userName,
        values.email,
        values.password,
        values.confirmPassword
      );
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="h-full w-screen p-4 lg:space-y-12 lg:p-16">
      <Logo />
      <div>
        <div className="my-10 text-center lg:my-16">
          <h1 className="text-3xl">Take the first step</h1>
          <h2 className="text-gray-400 text-lg">
            Create your BeanJournal account
          </h2>
        </div>
        <div className="flex justify-center w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full lg:w-1/4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" label="abc@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        label="Enter your username..."
                        {...field}
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        label="Enter your password..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        label="Re-enter your password..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-start lg:justify-between">
                <div className="flex items-center">
                  <p className="text-gray-400 text-sm font-medium">
                    Already have an account?
                  </p>
                </div>
                <div className="flex items-center">
                  <Link
                    to="/login"
                    className="text-colour-indigo text-sm font-medium ml-1 lg:ml-0"
                  >
                    Login
                  </Link>
                </div>
              </div>
              <Button
                className="bg-colour-lavender w-full text-colour-indigo"
                type="submit"
                isLoading={isLoading}
              >
                {isLoading ? "Loading..." : "Sign up"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
