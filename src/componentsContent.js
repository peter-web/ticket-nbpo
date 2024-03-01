import { memo, useCallback } from "react";

const LoginForm = memo(() => {
  const onButtonClick = useCallback(() => {
    // Please sync "Super Admin/Dashboard" to the project
  }, []);

  return (
    <form className="m-0 w-[895px] flex flex-col items-center justify-center py-5 px-[50px] box-border gap-[14px_0px] min-w-[420px] max-w-[895px] flex-[0.8883] mq950:pl-[25px] mq950:pr-[25px] mq950:box-border mq950:max-w-full">
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-[15px] gap-[10px_0px]">
        <h2 className="m-0 self-stretch relative text-13xl font-normal font-paragraph-d text-gray-0 text-left mq450:text-lgi mq950:text-7xl">
          Welcome User!
        </h2>
        <p className="m-0 self-stretch relative text-xl font-paragraph-d text-gray-0 text-left mq450:text-base">
          Login to access your account.
        </p>
      </div>
      <div className="self-stretch rounded-[17.48px] bg-steelblue-600 box-border overflow-hidden flex flex-row items-center justify-start py-5 pr-6 pl-[22px] max-w-full border-[1.2px] border-solid border-steelblue-200">
        <input
          className="w-full [border:none] [outline:none] font-paragraph-d text-xl bg-[transparent] h-6 flex-1 relative text-gray-0 text-left inline-block min-w-[250px] max-w-full mq450:text-base"
          name="InputUser"
          placeholder="Username"
          type="text"
        />
      </div>
      <div className="self-stretch rounded-[17.48px] bg-steelblue-600 box-border overflow-hidden flex flex-row items-center justify-start py-5 pr-6 pl-[22px] max-w-full border-[1.2px] border-solid border-steelblue-200">
        <input
          className="w-full [border:none] [outline:none] font-paragraph-d text-xl bg-[transparent] h-6 flex-1 relative text-gray-0 text-left inline-block min-w-[250px] max-w-full mq450:text-base"
          name="InputPass"
          placeholder="Password"
          type="password"
        />
      </div>
      <button
        className="cursor-pointer py-[10.790998458862305px] px-2.5 bg-steelblue-300 self-stretch h-[50px] rounded-[16.86px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center max-w-full border-[1.2px] border-solid border-steelblue-200 hover:bg-steelblue-100 hover:box-border hover:border-[1.2px] hover:border-solid hover:border-deepskyblue"
        onClick={onButtonClick}
      >
        <div className="flex-1 relative text-13xl font-paragraph-d text-gray-0 text-center inline-block max-w-full mq450:text-lgi mq950:text-7xl">
          Login
        </div>
      </button>
    </form>
  );
});

export default LoginForm;
