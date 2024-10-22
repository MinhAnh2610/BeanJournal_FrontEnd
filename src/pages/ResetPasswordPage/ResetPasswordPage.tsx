import Logo from "@/components/custom/UtilityComponents/Logo";
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
import { z } from "zod";
import key from "../../assets/key.svg";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/useAuth";
import { useLocation } from "react-router";

const formSchema = z.object({
  password: z.string().min(5),
  confirmPassword: z.string().min(5),
});

const ResetPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  const { resetPassword } = useAuth();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  useEffect(() => {
    setToken(query.get("token") || "");
    setEmail(query.get("email") || "");
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(
      formSchema.refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      })
    ),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      resetPassword(token, email, values.password, values.confirmPassword);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-full w-screen space-y-20 p-4 lg:p-16">
      <Logo />
      <div className="flex justify-center">
        <img src={key} alt="key" />
      </div>
      <div>
        <div className="my-16 text-center">
          <h1 className="text-3xl">Reset your password</h1>
          <h2 className="text-gray-400 text-lg">
            If you forgot your password, you can reset it here
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        label="Enter your new password..."
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
                        label="Re-enter your new password..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-colour-lavender w-full text-colour-indigo"
                type="submit"
                isLoading={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
