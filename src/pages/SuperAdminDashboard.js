import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SidePanelNew from "../components/SidePanelNew";
import DataVisualization from "../components/DataVisualization";
import TicketTable from "../components/Table";

const SuperAdminDashboard = () => {
  const navigate = useNavigate();

  const onLogoutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray1-600 overflow-hidden flex flex-row flex-wrap items-start justify-start text-left text-20xl-1 text-steelblue-300 font-h5-d">
      <SidePanelNew
        dimensionsCode="/layout-dashboard.svg"
        productDimensionsCode="/ticket.svg"
        onLogoutContainerClick={onLogoutContainerClick}
        showTicketRequest
        showDashboard
      />
      <div className="flex-1 bg-azure overflow-y-auto flex flex-col items-start justify-start py-5 pr-5 pl-[30px] z-[0]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
          <div className="self-stretch flex flex-row items-center justify-start max-h-[50px]">
            <b className="flex-1 relative">Dashboard</b>
          </div>
          <DataVisualization />
          <TicketTable />
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
