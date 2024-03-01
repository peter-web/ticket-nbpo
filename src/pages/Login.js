import LoginForm from "../components/Content";

const Login = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
      <main className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-[50px] box-border gap-[10px] bg-[url('/public/container@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[1080px] max-w-full mq975:pl-[25px] mq975:pr-[25px] mq975:box-border">
        <img
          className="h-[303px] w-[900px] relative rounded-[22.97px] max-w-[900px] overflow-hidden object-contain min-w-[390px] mq950:max-w-full"
          alt="NBPO Logo"
          loading="lazy"
          src="/logo_lg@2x.png"
        />
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
