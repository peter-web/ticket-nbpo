import { memo, useState, useCallback } from "react";
import Filter from "./Filter";
import PortalPopup from "./PortalPopup";
import Pagination from "./Pagination";

const TicketTable = memo(() => {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const openFilter = useCallback(() => {
    setFilterOpen(true);
  }, []);

  const closeFilter = useCallback(() => {
    setFilterOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch rounded-xl bg-gray-0 shadow-[-4px_4px_10px_7px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-[10px] min-w-[900px] text-left text-6xl text-black font-h5-d">
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px] gap-[0px_10px]">
          <div className="flex-1 flex flex-col items-start justify-center gap-[5px_0px]">
            <div className="relative">All Tickets</div>
            <div className="relative text-smi-8 text-gray1-400">
              Displays all tickets from IT, HR, Accounting, and Servicing
            </div>
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
          <div className="flex-1 rounded-3xs bg-gray-0 box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[25px] max-w-[400px] text-xl border-[1px] border-solid border-gray1-1000">
            <div className="flex-1 rounded-3xs overflow-hidden flex flex-row items-center justify-start py-0.5 px-0 gap-[0px_20px]">
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
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-base">
          <div className="self-stretch bg-gray1-600 flex flex-row items-center justify-center py-0 px-2.5 text-center text-gray-0">
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
              <div className="relative">634</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Hardware Issue</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Open</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">HR</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">-</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Tue Jan 23 2024</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
              <div className="relative">636</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Hardware Issue</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-lightpink overflow-hidden flex flex-col items-start justify-center py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Closed</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">Accounting</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Al Bergstrom</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Sun Feb 04 2024</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
              <div className="relative">627</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Hardware Issue</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-lightpink overflow-hidden flex flex-col items-start justify-center py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Closed</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">IT</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Ethel Volkman</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Sun Jan 28 2024</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
              <div className="relative">648</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Others</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-navajowhite overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Pending</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">HR</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Clifford Lehner</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Sun Sep 03 2023</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
              <div className="relative">648</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Others</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Open</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">IT</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">-</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Sun Sep 03 2023</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
              <div className="relative">648</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Others</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Open</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">HR</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">-</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Sun Sep 03 2023</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
              <div className="relative">648</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Others</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-lightpink overflow-hidden flex flex-col items-start justify-center py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Closed</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">IT</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Clifford Lehner</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Sun Sep 03 2023</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
              <div className="relative">648</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Others</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-navajowhite overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Pending</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">IT</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Clifford Lehner</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Sun Sep 03 2023</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
              <div className="relative">648</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Others</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Open</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">Accounting</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">-</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Sun Sep 03 2023</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
              <div className="relative">648</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Others</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Open</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">IT</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">-</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Sun Sep 03 2023</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
              <div className="relative">648</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Others</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Open</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">HR</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">-</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Sun Sep 03 2023</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
              <div className="relative">648</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Others</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
              <div className="flex-1 relative">Category</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-col items-start justify-start py-[3px] px-2">
                <div className="flex flex-row items-center justify-start py-0 px-[3px]">
                  <div className="relative">Open</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative">HR</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">-</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
              <div className="flex-1 relative">Sun Sep 03 2023</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-center">
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
          <div className="self-stretch bg-gray-0 flex flex-row items-center justify-start py-[15px] px-[30px]">
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
      {isFilterOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilter}
        >
          <Filter onClose={closeFilter} />
        </PortalPopup>
      )}
    </>
  );
});

export default TicketTable;
