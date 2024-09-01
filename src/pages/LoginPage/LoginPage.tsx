import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import logo from "../../assets/beanjournallogo.svg";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="space-y-36">
      <div className="flex justify-center items-center">
        <img
          src={logo}
          alt="Bean Journal Logo"
          width={30}
          height={30}
          className="mr-4"
        />
        <h1 className="text-lg">Bean Journal</h1>
      </div>
      <div>
        <div className="my-16 text-center">
          <h1 className="text-3xl">Write down your journey under document</h1>
          <h2 className="text-gray-400 text-lg">
            Enter your email and password to access your account
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
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
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
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
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
                    <Link to="/register" className="text-colour-indigo text-sm font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <Link
                    to="/forgot-password"
                    className="text-gray-400 text-sm font-medium"
                  >
                    Forgot password
                  </Link>
                </div>
              </div>
              <Button
                className="bg-colour-lavender w-full text-colour-indigo"
                type="submit"
              >
                Sign in
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
