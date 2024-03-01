import { useCallback } from "react";
import SideNav from "../components/SideNav";
import DataVisualization from "../components/DataVisualization";
import TicketTable from "../Table";

const SuperAdminDashboard = () => {
  const onLogoutClick = useCallback(() => {
    // Please sync "Desktop/Login" to the project
  }, []);

  return (
    <div className="w-full relative bg-gray1-600 overflow-hidden flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 box-border tracking-[normal]">
      <nav
        className="m-0 h-[1081.1px] w-20 bg-gray1-600 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[30px] px-[15px] box-border gap-[50px_0px] lg:pt-5 lg:pb-5 lg:box-border"
        id="navID"
      >
        <div className="self-stretch flex flex-row items-start justify-start">
          <img
            className="h-[71px] w-[50px] relative max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/logo-solo-2@2x.png"
          />
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-between">
          <SideNav />
          <div className="self-stretch h-[108px] flex flex-col items-center justify-center gap-[18px_0px]">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex-1 relative"
                  autoFocus={true}
                  id="btnUser"
                />
              </div>
            </div>
            <button
              className="cursor-pointer py-2 px-[7px] bg-gray1-800 w-10 box-border flex flex-row items-center justify-center border-[1px] border-solid border-gray1-900"
              onClick={onLogoutClick}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/logout.svg"
              />
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-1 bg-azure overflow-y-auto flex flex-col items-center justify-start pt-5 pb-24 pr-5 pl-[30px] box-border gap-[26px_15px] max-w-full ml-[-6px] lg:pt-5 lg:pb-[62px] lg:box-border mq850:pb-10 mq850:box-border">
        <header className="self-stretch flex flex-row items-center justify-start pt-px px-0 pb-0.5 box-border gap-[0px_26px] max-h-[50px] sticky top-[0] z-[99] text-center text-20xl-1 text-steelblue-300 font-paragraph-d">
          <h1 className="m-0 relative text-inherit font-bold font-inherit whitespace-nowrap">
            Dashboard
          </h1>
          <div className="rounded-xl bg-gray-0 shadow-[-3px_4px_10.3px_rgba(0,_0,_0,_0.25)] overflow-hidden hidden flex-row items-center justify-center py-2.5 px-[15px] gap-[0px_10px] text-5xl text-black">
            <div className="overflow-hidden flex flex-row items-center justify-start py-[3px] px-[5px] box-border h-[px] w-[px]">
              <img
                className="h-[24.4px] w-[20.6px] relative"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="h-[29px] rounded-3xs bg-gray1-900 overflow-hidden hidden flex-row items-center justify-center">
              <div className="self-stretch relative flex items-center justify-center whitespace-nowrap">
                Notification
              </div>
            </div>
          </div>
        </header>
        <DataVisualization />
        <TicketTable />
      </main>
    </div>
  );
};

export default SuperAdminDashboard;
