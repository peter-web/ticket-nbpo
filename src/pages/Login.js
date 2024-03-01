import LoginForm from "../components/Content";

const Login = () => {
  return (
    <main className="w-full h-[1024px] relative overflow-hidden flex flex-col items-center justify-start lg:flex-row md:w-[960px] md:h-[763px] md:flex-col md:gap-[10px] md:items-center md:justify-start md:pt-0 md:box-border sm:flex sm:w-[420px] sm:h-[763px] sm:flex-col sm:items-center sm:justify-start sm:pt-0 sm:box-border">
      <div className="self-stretch flex-1 flex flex-row flex-wrap items-center justify-center py-0 px-[50px] gap-[10px] bg-[url('/public/container@3x.png')] bg-cover bg-no-repeat bg-[top] lg:flex-row lg:gap-[10px] lg:items-center lg:justify-start md:self-stretch md:w-auto md:flex-1 md:flex-row md:items-center md:justify-center md:max-w-full md:max-h-full sm:flex-1 sm:flex-col sm:pt-0 sm:pb-0 sm:box-border">
        <img
          className="flex-1 relative rounded-[22.97px] max-w-full overflow-hidden h-[200px] object-cover min-w-[440px] lg:flex md:flex-1 md:self-stretch md:h-auto md:max-h-full md:mt-2.5 sm:self-stretch sm:w-auto sm:max-w-full sm:max-h-full sm:flex-[unset]"
          alt="Next BPO Solutions"
          src="/nbpologo@1x.png"
        />
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
