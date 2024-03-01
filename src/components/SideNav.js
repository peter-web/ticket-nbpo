import { memo } from "react";

const SideNav = memo(() => {
  return (
    <div className="flex flex-col items-center justify-center gap-[41px_0px]">
      <button
        className="cursor-pointer [border:none] py-0 pr-3.5 pl-[13px] bg-[transparent] flex flex-row items-center justify-start gap-[0px_20px]"
        autoFocus={true}
        id="btnDashboard"
      >
        <img
          className="h-[23.4px] w-[23.4px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/layout-dashboard.svg"
        />
        <div className="w-[109px] relative text-2xl font-paragraph-d text-aquamarine text-left hidden mq450:text-mid">
          Dashboard
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] py-0 pr-3.5 pl-[13px] bg-[transparent] flex flex-row items-center justify-start gap-[0px_20px]"
        autoFocus={true}
        id="btnTicketRequest"
      >
        <img
          className="h-[23.4px] w-[23.4px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/ticket.svg"
        />
        <div className="w-[149px] relative text-2xl font-paragraph-d text-gray-0 text-left hidden mq450:text-mid">
          Ticket Request
        </div>
      </button>
      <div className="hidden flex-row items-center justify-start">
        <img
          className="h-[24.4px] w-[24.4px] relative overflow-hidden shrink-0"
          alt=""
          src="/settings.svg"
        />
      </div>
    </div>
  );
});

export default SideNav;
