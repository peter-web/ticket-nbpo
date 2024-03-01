import { memo, useMemo } from "react";
import DashboardLabelComp from "./DashboardLabelComp";
import TicketLabelComp from "./TicketLabelComp";

const SidePanelNew = memo(
  ({
    dimensionsCode,
    productDimensionsCode,
    ticketRequestColor,
    userLogoutColor,
    onLogoutContainerClick,
    showTicketRequest,
    showDashboard,
  }) => {
    const dashboardStyle = useMemo(() => {
      return {
        color: ticketRequestColor,
      };
    }, [ticketRequestColor]);

    const ticketRequestStyle = useMemo(() => {
      return {
        color: userLogoutColor,
      };
    }, [userLogoutColor]);

    return (
      <div className="bg-gray1-600 h-[1024px] overflow-hidden flex flex-col items-center justify-start py-[30px] px-[26px] box-border gap-[50px_0px] z-[1] text-left text-base text-gray-0 font-h5-d">
        <div className="self-stretch flex flex-col items-center justify-start">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[77.8px] shrink-0 object-cover"
            alt=""
            src="/logo-variant@2x.png"
          />
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[41px_0px]">
          <DashboardLabelComp
            dimensionsCode="/layout-dashboard.svg"
            showDashboard
            property1DefaultAlignSelf="stretch"
            property1DefaultPadding="unset"
            dashboardWidth="unset"
            dashboardColor="#00f6c1"
          />
          <TicketLabelComp
            dimensions="/ticket.svg"
            showTicketRequest
            property1DefaultAlignSelf="stretch"
            property1DefaultPadding="unset"
            ticketRequestColor="#fff"
            ticketRequestWidth="unset"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-end gap-[18px_0px]">
          <div className="w-[248px] flex flex-row items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start z-[1]">
              <div className="w-[50px] relative h-[50px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[2px] [transform:scale(1.44)]"
                  alt=""
                  src="/component-2@2x.png"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center py-0 pr-[11px] pl-0 z-[0]">
              <div className="self-stretch relative">Your Name</div>
              <b className="self-stretch relative text-xs text-center overflow-hidden text-ellipsis whitespace-nowrap">
                username@Nextbposolutions1.onmicrosoft.com
              </b>
            </div>
          </div>
          <div
            className="self-stretch bg-gray1-800 flex flex-row items-center justify-center py-2 px-2.5 gap-[0px_8px] cursor-pointer text-2xl border-[1px] border-solid border-gray1-900"
            onClick={onLogoutContainerClick}
          >
            <img className="w-4 relative h-5" alt="" src="/vector.svg" />
            <div className="relative">Logout</div>
          </div>
        </div>
      </div>
    );
  }
);

export default SidePanelNew;
