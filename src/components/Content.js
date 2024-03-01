import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = memo(() => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/super-admindashboard");
  }, [navigate]);

  return (
    <div
      className="flex-1 flex flex-col items-center justify-center py-[50px] px-[100px] box-border gap-[14px_0px] min-w-[420px] max-w-[895px] text-left text-9xl text-gray-0 font-h5-d md:w-full md:self-stretch md:h-auto sm:flex-[unset] sm:self-stretch"
      id="loginContent"
    >
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-[15px] gap-[10px_0px]">
        <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit lg:text-6xl sm:text-xl">
          Welcome User!
        </h1>
        <p className="m-0 self-stretch relative text-lg lg:text-base sm:text-xs">
          Login to access your account.
        </p>
      </div>
      <input
        className="[outline:none] font-h5-d text-base bg-steelblue-600 self-stretch rounded-[17.48px] box-border h-[50px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-5 px-[23px] text-gray-0 border-[1.2px] border-solid border-steelblue-200 lg:rounded-3xs lg:pl-[15px] lg:pr-[15px] lg:box-border lg:max-h-[50px] sm:self-stretch sm:w-auto sm:rounded-3xs sm:pl-[15px] sm:pr-[15px] sm:box-border sm:max-h-[40px]"
        name="lblUsername"
        placeholder="Username"
        type="text"
      />
      <input
        className="[outline:none] font-h5-d text-base bg-steelblue-600 self-stretch rounded-[17.48px] box-border h-[50px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-5 px-[23px] text-gray-0 border-[1.2px] border-solid border-steelblue-200 lg:rounded-3xs lg:pl-[15px] lg:pr-[15px] lg:box-border lg:max-h-[50px] sm:rounded-3xs sm:pl-[15px] sm:pr-[15px] sm:box-border sm:max-h-[40px]"
        name="lblPassword"
        placeholder="Password"
        type="password"
        link={`rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"`}
        i={`class="far fa-eye" id="togglePassword"`}
      />
      <div
        className="self-stretch rounded-[16.86px] bg-steelblue-300 box-border h-[55px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[10.790998458862305px] cursor-pointer text-center text-5xl border-[1.2px] border-solid border-steelblue-200 sm:rounded-[16.86px] sm:max-h-[40px]"
        onClick={onButtonContainerClick}
      >
        <h1 className="m-0 flex-1 relative text-inherit font-normal font-inherit lg:text-6xl sm:text-6xl">
          Login
        </h1>
      </div>
    </div>
  );
});

export default LoginForm;
