import Logo from "@/components/custom/Logo";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, Button, Checkbox } from "@nextui-org/react";
import { useAuth } from "@/context/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
});

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { loginUser } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await loginUser(values.email, values.password);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="h-full w-screen p-4 space-y-24 lg:space-y-36 lg:p-16">
      <Logo />
      <div>
        <div className="my-16 text-center">
          <h1 className="text-3xl">Write down your journey under document</h1>
          <h2 className="text-gray-400 text-lg">
            Enter your email and password to access your account
          </h2>
        </div>
        <div className="flex justify-center w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full lg:w-1/4"
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
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      className="text-gray-400 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-gray-400 text-sm font-medium">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-colour-indigo text-sm font-medium"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <Link
                    to="/forgot-password"
                    className="text-gray-400 font-medium text-sm"
                  >
                    Forgot password
                  </Link>
                </div>
              </div>
              <Button
                className="bg-colour-lavender w-full text-colour-indigo"
                type="submit"
                isLoading={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
