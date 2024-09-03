import Logo from "@/components/custom/Logo";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="font-bold text-8xl p-24 text-gray-800">
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
