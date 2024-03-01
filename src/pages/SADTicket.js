import { useState, useCallback } from "react";
import Filter from "../components/Filter";
import PortalPopup from "../components/PortalPopup";
import AssignTicket1 from "../components/AssignTicket1";
import ViewTRSA from "../components/ViewTRSA";
import { useNavigate } from "react-router-dom";
import SidePanelNew from "../components/SidePanelNew";
import DepartmentDropDown from "../components/DepartmentDropDown";
import Pagination from "../components/Pagination";

const SADTicket = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isAssignTicketPopupOpen, setAssignTicketPopupOpen] = useState(false);
  const [isViewTRSAOpen, setViewTRSAOpen] = useState(false);
  const navigate = useNavigate();

  const onLogoutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openFilter = useCallback(() => {
    setFilterOpen(true);
  }, []);

  const closeFilter = useCallback(() => {
    setFilterOpen(false);
  }, []);

  const openAssignTicketPopup = useCallback(() => {
    setAssignTicketPopupOpen(true);
  }, []);

  const closeAssignTicketPopup = useCallback(() => {
    setAssignTicketPopupOpen(false);
  }, []);

  const openViewTRSA = useCallback(() => {
    setViewTRSAOpen(true);
  }, []);

  const closeViewTRSA = useCallback(() => {
    setViewTRSAOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-gray1-600 h-[1024px] flex flex-row flex-wrap items-start justify-start text-left text-20xl-1 text-steelblue-300 font-h5-d">
        <SidePanelNew
          dimensionsCode="/layout-dashboard1.svg"
          productDimensionsCode="/ticket1.svg"
          ticketRequestColor="#e6f4f1"
          userLogoutColor="#00f6c1"
          onLogoutContainerClick={onLogoutContainerClick}
          showTicketRequest
          showDashboard
        />
        <div className="flex-1 bg-azure overflow-y-auto flex flex-col items-start justify-start py-5 pr-5 pl-[30px] z-[0]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
            <div className="self-stretch flex flex-row items-center justify-start max-h-[50px]">
              <b className="relative">Dashboard</b>
            </div>
            <div className="self-stretch rounded-xl bg-gray-0 shadow-[-4px_4px_10px_7px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-[10px] min-w-[900px] text-6xl text-black">
              <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px] gap-[0px_10px] z-[1]">
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px_0px]">
                  <div className="self-stretch relative">All Tickets</div>
                  <div className="self-stretch relative text-smi-8 text-gray1-400">
                    Displays all tickets from IT, HR, Accounting, and Servicing
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <DepartmentDropDown
                    uniqueIdentifierText="/collaborating-in-circle@2x.png"
                    uniqueIdentifierCode="/expand-arrow@2x.png"
                    frameDivFlex="unset"
                    frameDivWidth="196.3px"
                    collaboratingInCircleMinHeight="unset"
                    allDepartmentFlex="1"
                    allDepartmentDisplay="inline-block"
                    allDepartmentTextAlign="center"
                    expandArrowIconMinHeight="unset"
                  />
                </div>
                <div
                  className="rounded-5xs-5 bg-steelblue-300 overflow-hidden flex flex-row items-center justify-start p-[5px] cursor-pointer border-[0.8px] border-solid border-gray-0"
                  onClick={openFilter}
                >
                  <img
                    className="w-5 relative h-5 object-cover"
                    alt=""
                    src="/filter@2x.png"
                  />
                </div>
                <div className="flex-1 rounded-3xs bg-gray-0 overflow-hidden flex flex-row items-center justify-start py-2.5 px-[25px] gap-[0px_10px] text-xl border-[1px] border-solid border-gray1-1000">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/search.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative">Search Ticket</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-2.5 px-0 pb-0 z-[0] text-center text-base">
                <div className="self-stretch bg-gray1-600 flex flex-row items-center justify-center py-0 px-2.5 text-gray-0">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[15px] px-5">
                    <b className="flex-1 relative">Ticket No.</b>
                    <img
                      className="w-2.5 relative h-5 hidden"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[15px] px-5">
                    <b className="flex-1 relative">Topic</b>
                    <img
                      className="w-2.5 relative h-5 hidden"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[15px] px-5">
                    <b className="flex-1 relative">Category</b>
                    <img
                      className="w-2.5 relative h-5 hidden"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[15px] px-5">
                    <b className="flex-1 relative">Status</b>
                    <img
                      className="w-2.5 relative h-5 hidden"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[15px] px-5">
                    <b className="flex-1 relative">Department</b>
                    <img
                      className="w-2.5 relative h-5 hidden"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[15px] px-5">
                    <b className="flex-1 relative">Owner</b>
                    <img
                      className="w-2.5 relative h-5 hidden"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[15px] px-5">
                    <b className="flex-1 relative">Date Created</b>
                    <img
                      className="w-2.5 relative h-5 hidden"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[15px] px-5">
                    <b className="flex-1 relative">Date Closed</b>
                    <img
                      className="w-2.5 relative h-5 hidden"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[15px] px-5">
                    <b className="flex-1 relative">Action</b>
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">634</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Hardware Issue</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                      <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                        <div className="relative">Open</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">HR</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Tue Jan 23 2024</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover cursor-pointer"
                      alt=""
                      src="/plus@2x.png"
                      onClick={openAssignTicketPopup}
                    />
                    <img
                      className="w-6 relative h-6 object-cover cursor-pointer"
                      alt=""
                      src="/eye@2x.png"
                      onClick={openViewTRSA}
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">636</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Hardware Issue</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-lightpink overflow-hidden flex flex-col items-center justify-center py-[3px] px-2">
                      <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                        <div className="relative">Closed</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Accounting</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Al Bergstrom</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Sun Feb 04 2024</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Mon Jun 03 2024</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover opacity-[0.1]"
                      alt=""
                      src="/plus@2x.png"
                    />
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/eye@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">627</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Hardware Issue</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-lightpink overflow-hidden flex flex-col items-center justify-center py-[3px] px-2">
                      <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                        <div className="relative">Closed</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">IT</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Ethel Volkman</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Sun Jan 28 2024</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Tue Feb 11 2025</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover opacity-[0.1]"
                      alt=""
                      src="/plus@2x.png"
                    />
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/eye@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">648</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Others</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-navajowhite overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                      <div className="flex flex-row items-center justify-center py-0 px-[3px]">
                        <div className="relative">Pending</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">HR</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Clifford Lehner</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Sun Sep 03 2023</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/plus@2x.png"
                    />
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/eye@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">648</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Others</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                      <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                        <div className="relative">Open</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">IT</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Sun Sep 03 2023</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/plus@2x.png"
                    />
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/eye@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">648</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Others</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                      <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                        <div className="relative">Open</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">HR</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Sun Sep 03 2023</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/plus@2x.png"
                    />
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/eye@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">648</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Others</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-lightpink overflow-hidden flex flex-col items-center justify-center py-[3px] px-2">
                      <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                        <div className="relative">Closed</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">IT</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Clifford Lehner</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Sun Sep 03 2023</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Fri Oct 04 2024</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover opacity-[0.1]"
                      alt=""
                      src="/plus@2x.png"
                    />
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/eye@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">648</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Others</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-navajowhite overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                      <div className="flex flex-row items-center justify-center py-0 px-[3px]">
                        <div className="relative">Pending</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">IT</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Clifford Lehner</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Sun Sep 03 2023</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Fri Oct 04 2024</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/plus@2x.png"
                    />
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/eye@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">648</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Others</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                      <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                        <div className="relative">Open</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Accounting</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Sun Sep 03 2023</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/plus@2x.png"
                    />
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/eye@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">648</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Others</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                      <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                        <div className="relative">Open</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">IT</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Sun Sep 03 2023</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/plus@2x.png"
                    />
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/eye@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">648</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Others</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                      <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                        <div className="relative">Open</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">HR</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Sun Sep 03 2023</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/plus@2x.png"
                    />
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/eye@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">648</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Others</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Category</div>
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                      <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                        <div className="relative">Open</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">HR</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">Sun Sep 03 2023</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="flex-1 relative">-</div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_10px]">
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/plus@2x.png"
                    />
                    <img
                      className="w-6 relative h-6 object-cover"
                      alt=""
                      src="/eye@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-gray-0 flex flex-row items-center justify-start py-[15px] px-[30px] text-left">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-between p-2.5">
                    <div className="relative tracking-[0.01em] leading-[100%] font-medium whitespace-pre-wrap">
                      Showing 1 to 11 of 783 results
                    </div>
                    <Pagination
                      paginationWidth="unset"
                      pageIconOpacity="0.5"
                      pageIconMinHeight="unset"
                      pageWidth="32px"
                      pagePosition="relative"
                      pageHeight="32px"
                      pageFlex="unset"
                      pageDisplay="unset"
                      pageFlexDirection="unset"
                      pageActivePosition="absolute"
                      pageActiveHeight="100%"
                      pageActiveWidth="100%"
                      pageActiveTop="0%"
                      pageActiveRight="0%"
                      pageActiveBottom="0%"
                      pageActiveLeft="0%"
                      pageActiveFlex="unset"
                      pageActiveDisplay="unset"
                      pageActiveFlexDirection="unset"
                      pageActivePadding="unset"
                      caratIconPosition="absolute"
                      caratIconHeight="75%"
                      caratIconWidth="75%"
                      caratIconTop="12.5%"
                      caratIconRight="12.5%"
                      caratIconBottom="12.5%"
                      caratIconLeft="12.5%"
                      caratIconOverflow="hidden"
                      caratIconMaxHeight="100%"
                      numPosition="absolute"
                      numHeight="calc(100% - 10px)"
                      numWidth="calc(100% - 8px)"
                      numTop="5px"
                      numLeft="4px"
                      pageWidth1="32px"
                      pagePosition1="relative"
                      pageHeight1="32px"
                      pageFlex1="unset"
                      pageDisplay1="unset"
                      pageFlexDirection1="unset"
                      pagePadding="unset"
                      numPosition1="absolute"
                      numHeight1="calc(100% - 10px)"
                      numWidth1="calc(100% - 8px)"
                      numTop1="5px"
                      numLeft1="4px"
                      pageWidth2="32px"
                      pagePosition2="relative"
                      pageHeight2="32px"
                      pageFlex2="unset"
                      pageDisplay2="unset"
                      pageFlexDirection2="unset"
                      pagePadding1="unset"
                      numPosition2="absolute"
                      numHeight2="calc(100% - 10px)"
                      numWidth2="calc(100% - 8px)"
                      numTop2="5px"
                      numLeft2="4px"
                      pageWidth3="32px"
                      pagePosition3="relative"
                      pageHeight3="32px"
                      pageFlex3="unset"
                      pageDisplay3="unset"
                      pageFlexDirection3="unset"
                      pagePadding2="unset"
                      numPosition3="absolute"
                      numHeight3="calc(100% - 10px)"
                      numWidth3="calc(100% - 8px)"
                      numTop3="5px"
                      numLeft3="4px"
                      pageWidth4="32px"
                      pagePosition4="relative"
                      pageHeight4="32px"
                      pageFlex4="unset"
                      pageDisplay4="unset"
                      pageFlexDirection4="unset"
                      pagePadding3="unset"
                      numPosition4="absolute"
                      numHeight4="calc(100% - 10px)"
                      numWidth4="calc(100% - 8px)"
                      numTop4="5px"
                      numLeft4="4px"
                      pageIconMinHeight1="unset"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFilterOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilter}
        >
          <Filter onClose={closeFilter} />
        </PortalPopup>
      )}
      {isAssignTicketPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAssignTicketPopup}
        >
          <AssignTicket1 onClose={closeAssignTicketPopup} />
        </PortalPopup>
      )}
      {isViewTRSAOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeViewTRSA}
        >
          <ViewTRSA onClose={closeViewTRSA} />
        </PortalPopup>
      )}
    </>
  );
};

export default SADTicket;
