import Logo from "@/components/custom/Logo";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="-mt-24 font-bold text-4xl p-4 text-gray-800 lg:text-8xl lg:p-24">
          PAGE NOT FOUND
        </h1>
      </div>
      <div>
        <h1 className="font-bold text-2xl text p-6 text-gray-600">404</h1>
      </div>
      <div className="border border-primary rounded-xl p-4 w-fit">
        <Logo />
      </div>
    </div>
  );
};

export default ErrorPage;
