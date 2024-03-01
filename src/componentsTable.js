import { memo, useState, useCallback } from "react";
import AssignTicket from "AssignTicket";
import PortalPopup from "PortalPopup";
import ViewTicketRequestSA from "ViewTicketRequestSA";

const TicketTable = memo(() => {
  const [isAssignTicketOpen, setAssignTicketOpen] = useState(false);
  const [isViewTicketRequestSAOpen, setViewTicketRequestSAOpen] =
    useState(false);

  const openAssignTicket = useCallback(() => {
    setAssignTicketOpen(true);
  }, []);

  const closeAssignTicket = useCallback(() => {
    setAssignTicketOpen(false);
  }, []);

  const openViewTicketRequestSA = useCallback(() => {
    setViewTicketRequestSAOpen(true);
  }, []);

  const closeViewTicketRequestSA = useCallback(() => {
    setViewTicketRequestSAOpen(false);
  }, []);

  return (
    <>
      <section
        className="self-stretch rounded-xl bg-gray-0 shadow-[-4px_4px_10px_7px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-5 px-0 pb-[15px] box-border gap-[20px_10px] min-w-[900px] max-w-full text-left text-xl text-black font-paragraph-d"
        id="tableID"
      >
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px] box-border gap-[0px_10px] max-w-full text-5xl mq1500:flex-wrap">
          <div className="w-[1275px] flex flex-col items-start justify-center gap-[5px_0px] min-w-[829px] max-w-full lg:min-w-full">
            <h5 className="m-0 relative text-inherit tracking-[0.01em] leading-[100%] font-normal font-inherit mq450:text-lgi mq450:leading-[19px]">
              All Tickets
            </h5>
            <h6 className="m-0 relative text-smi-8 font-normal font-inherit text-gray1-400 inline-block max-w-full">
              Displays all tickets from IT, HR, Accounting, and Servicing
            </h6>
          </div>
          <button
            className="cursor-pointer py-[7.5px] pr-[11px] pl-2.5 bg-steelblue-300 rounded-5xs-5 overflow-hidden flex flex-row items-center justify-start border-[0.8px] border-solid border-gray-0"
            autoFocus={true}
            id="btnFilter"
          >
            <img
              className="h-6 w-6 relative object-cover"
              loading="lazy"
              alt=""
              src="/filter@2x.png"
            />
          </button>
          <div
            className="w-[400px] rounded-3xs bg-gray-0 box-border overflow-hidden flex flex-row items-center justify-start py-2.5 pr-[26px] pl-6 min-w-[260px] max-w-[400px] flex-[0.87] border-[1px] border-solid border-gray1-1000 mq450:max-w-full mq450:flex-1"
            id="searchID"
          >
            <div className="flex-1 rounded-3xs overflow-hidden flex flex-row items-center justify-start py-0.5 px-0 box-border gap-[0px_20px] max-w-full mq450:flex-wrap">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/search.svg"
              />
              <input
                className="w-[calc(100%_-_24px)] [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-paragraph-d text-xl text-gainsboro-300 min-w-[199px]"
                placeholder="Search Ticket"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row flex-wrap items-center justify-between py-0 px-[25px] box-border max-w-full gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[0px_10px]">
            <div className="relative whitespace-pre-wrap mq450:text-base">{`Topic:                  `}</div>
            <div className="rounded-8xs bg-gray-0 overflow-hidden flex flex-row items-center justify-start py-1.5 pr-[11px] pl-[9px] gap-[0px_10px] whitespace-nowrap text-gray1-1000 border-[1px] border-solid border-silver">
              <div className="relative">Select Topic</div>
              <img
                className="h-6 w-[22px] relative object-cover"
                alt=""
                src="/expand-arrow@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0px_10px] max-w-full mq450:flex-wrap">
            <div className="relative mq450:text-base">Category:</div>
            <div className="rounded-8xs bg-gray-0 overflow-hidden flex flex-row items-center justify-start py-1.5 pr-[11px] pl-[9px] gap-[0px_10px] whitespace-nowrap text-gray1-1000 border-[1px] border-solid border-silver">
              <div className="relative">Select a Category</div>
              <img
                className="h-6 w-[22px] relative object-cover"
                alt=""
                src="/expand-arrow-1@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0px_10px] mq450:flex-wrap">
            <div className="relative mq450:text-base">Status:</div>
            <div className="rounded-8xs bg-gray-0 overflow-hidden flex flex-row items-center justify-start py-1.5 pr-[11px] pl-[9px] gap-[0px_10px] whitespace-nowrap text-gray1-1000 border-[1px] border-solid border-silver">
              <div className="relative">Select a Status</div>
              <img
                className="h-6 w-[22px] relative object-cover"
                alt=""
                src="/expand-arrow-2@2x.png"
              />
            </div>
          </div>
          <div className="w-[200px] flex flex-row items-center justify-start gap-[0px_10px]">
            <div className="relative mq450:text-base">From:</div>
            <div className="flex-1 rounded-8xs bg-gray-0 overflow-hidden flex flex-row items-center justify-start py-1.5 pr-[11px] pl-[9px] gap-[0px_5px] text-gray1-1000 border-[1px] border-solid border-silver">
              <div className="h-6 flex-1 relative inline-block mq450:text-base">
                Date
              </div>
              <img
                className="h-6 w-6 relative object-cover"
                alt=""
                src="/calendar@2x.png"
              />
            </div>
          </div>
          <div className="w-[200px] flex flex-row items-center justify-start gap-[0px_10px]">
            <div className="relative mq450:text-base">To:</div>
            <div className="flex-1 rounded-8xs bg-gray-0 overflow-hidden flex flex-row items-center justify-start py-1.5 pr-[11px] pl-[9px] gap-[0px_5px] text-gray1-1000 border-[1px] border-solid border-silver">
              <div className="h-6 flex-1 relative inline-block mq450:text-base">
                Date
              </div>
              <img
                className="h-6 w-6 relative object-cover"
                alt=""
                src="/calendar-1@2x.png"
              />
            </div>
          </div>
          <div className="h-11 rounded-3xs bg-steelblue-300 box-border overflow-hidden flex flex-row items-center justify-start py-2.5 pr-[21px] pl-[19px] text-gray-0 border-[1px] border-solid border-gray-0">
            <div className="self-stretch relative flex items-center mq450:text-base">
              Filter
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start max-w-full">
          <div className="self-stretch bg-gray1-600 overflow-x-auto flex flex-row items-start justify-start py-0 pr-4 pl-2.5 text-gray-0">
            <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] pr-[43px] pl-12 gap-[0px_18.33px]">
              <b className="relative mq450:text-base">Ticket No.</b>
              <img
                className="h-5 w-2.5 relative hidden"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[15px] box-border gap-[0px_41.33px]">
              <b className="relative mq450:text-base">Topic</b>
              <img
                className="h-5 w-2.5 relative hidden"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="w-[196px] shrink-0 flex flex-col items-start justify-start py-0 px-0 box-border">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[15px] gap-[0px_22.33px]">
                <b className="relative mq450:text-base">Category</b>
                <img
                  className="h-5 w-2.5 relative hidden"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
            <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] pr-[66px] pl-[65px] gap-[0px_36.33px]">
              <b className="relative mq450:text-base">Status</b>
              <img
                className="h-5 w-2.5 relative hidden"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[15px] box-border gap-[0px_9.33px]">
              <b className="relative mq450:text-base">Department</b>
              <img
                className="h-5 w-2.5 relative hidden"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="w-[196px] shrink-0 flex flex-col items-start justify-start py-0 px-0 box-border">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[15px] gap-[0px_35.33px]">
                <b className="relative mq450:text-base">Owner</b>
                <img
                  className="h-5 w-2.5 relative hidden"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
            <div className="flex-[0.8253] overflow-hidden shrink-0 flex flex-row items-center justify-end py-[15px] pr-[26px] pl-[33px] gap-[0px_3.83px]">
              <b className="relative mq450:text-base">Date Created</b>
              <img
                className="h-5 w-2.5 relative hidden"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="flex-[0.759] overflow-hidden shrink-0 flex flex-row items-center justify-end py-[15px] pr-8 pl-[38px] gap-[0px_8.33px]">
              <b className="relative mq450:text-base">Date Closed</b>
              <img
                className="h-5 w-2.5 relative hidden"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="w-[196px] shrink-0 flex flex-col items-start justify-start py-0 px-0 box-border">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[15px]">
                <b className="relative mq450:text-base">Action</b>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-1.5 pr-[13px] pl-[88px] gap-[0px_19px] border-b-[2px] border-solid border-gray1-1000 lg:pl-11 lg:box-border mq850:pl-[22px] mq850:box-border mq1500:flex-wrap">
            <div className="w-[119px] flex flex-col items-start justify-start">
              <div className="relative mq450:text-base">634</div>
            </div>
            <div className="w-[212px] flex flex-col items-start justify-start">
              <div className="relative mq450:text-base">Hardware Issue</div>
            </div>
            <div className="w-[179px] flex flex-col items-start justify-start">
              <div className="relative mq450:text-base">Category</div>
            </div>
            <div className="w-[207px] flex flex-col items-start justify-start">
              <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-row items-center justify-center p-[3px]">
                <div className="flex flex-row items-center justify-start py-0 px-2 gap-[0px_3px]">
                  <div className="h-2.5 w-2.5 relative rounded-[50%] box-border border-[0px] border-solid border-lime" />
                  <div className="relative mq450:text-base">Open</div>
                </div>
              </div>
            </div>
            <div className="w-[113px] flex flex-col items-start justify-start">
              <div className="relative mq450:text-base">HR</div>
            </div>
            <div className="w-[178px] flex flex-col items-start justify-start py-0 pr-[21px] pl-0 box-border text-center">
              <div className="self-stretch relative mq450:text-base">-</div>
            </div>
            <div className="w-[177px] flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border">
              <div className="self-stretch relative mq450:text-base">
                Tue Jan 23 2024
              </div>
            </div>
            <div className="w-[156px] relative text-center flex items-center justify-center min-w-[5px] mq450:text-base">
              -
            </div>
            <div className="flex-[0.4133] overflow-hidden flex flex-row items-start justify-start py-2.5 pr-[58px] pl-[57px] box-border gap-[0px_9px] min-w-[72px] mq450:flex-1">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[36px]"
                onClick={openAssignTicket}
              />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/eye@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[36px]"
                onClick={openViewTicketRequestSA}
              />
            </div>
          </div>
          <div className="w-[1790px] overflow-x-auto flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full">
            <div className="w-[1790px] box-border overflow-x-auto flex flex-row items-center justify-start py-0 pr-4 pl-2.5 border-b-[2px] border-solid border-gray1-1000">
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">636</div>
              </div>
              <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5">
                <div className="relative mq450:text-base">Hardware Issue</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">Category</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <button className="cursor-pointer [border:none] py-[3px] px-2 bg-lightpink rounded-31xl overflow-hidden flex flex-col items-start justify-center">
                  <div className="flex flex-row items-center justify-start py-0 px-[3px] gap-[0px_3px]">
                    <div className="flex flex-row items-center justify-start">
                      <img
                        className="h-2.5 w-2.5 relative"
                        alt=""
                        src="/frame-frame.svg"
                      />
                    </div>
                    <div className="relative text-xl font-paragraph-d text-black text-left mq450:text-base">
                      Closed
                    </div>
                  </div>
                </button>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">Accounting</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">Al Bergstrom</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Sun Feb 04 2024
                </div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Mon Jun 03 2024
                </div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[0px_10px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="h-9 w-9 relative object-cover min-h-[36px]"
                  alt=""
                  src="/eye@3x.png"
                />
              </div>
            </div>
            <div className="w-[1790px] box-border overflow-x-auto flex flex-row items-center justify-start py-0 pr-4 pl-2.5 border-b-[2px] border-solid border-gray1-1000">
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border flex-[0.963]">
                <div className="relative mq450:text-base">627</div>
              </div>
              <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5">
                <div className="relative mq450:text-base">Hardware Issue</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border flex-[0.963]">
                <div className="relative mq450:text-base">Category</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border flex-[0.963]">
                <button className="cursor-pointer [border:none] py-[3px] px-2 bg-lightpink rounded-31xl overflow-hidden flex flex-col items-start justify-center">
                  <div className="flex flex-row items-center justify-start py-0 px-[3px] gap-[0px_3px]">
                    <div className="flex flex-row items-center justify-start">
                      <img
                        className="h-2.5 w-2.5 relative"
                        alt=""
                        src="/frame-frame.svg"
                      />
                    </div>
                    <div className="relative text-xl font-paragraph-d text-black text-left mq450:text-base">
                      Closed
                    </div>
                  </div>
                </button>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border flex-[0.963]">
                <div className="relative mq450:text-base">IT</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border flex-[0.963]">
                <div className="relative mq450:text-base">Ethel Volkman</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[17px] box-border">
                <div className="flex-1 relative mq450:text-base">
                  Sun Jan 28 2024
                </div>
              </div>
              <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-4">
                <div className="relative mq450:text-base">Tue Feb 11 2025</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[0px_10px] flex-[0.963]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="h-9 w-9 relative object-cover min-h-[36px]"
                  alt=""
                  src="/eye@3x.png"
                />
              </div>
            </div>
            <div className="w-[1790px] box-border overflow-x-auto flex flex-row items-center justify-start py-0 pr-4 pl-2.5 border-b-[2px] border-solid border-gray1-1000">
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">648</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="flex-1 relative mq450:text-base">Others</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">Category</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <button className="cursor-pointer [border:none] py-[3px] px-2 bg-navajowhite rounded-31xl overflow-hidden flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-start py-0 px-[3px] gap-[0px_5px]">
                    <img
                      className="h-1 w-2.5 relative"
                      alt=""
                      src="/line-5.svg"
                    />
                    <div className="relative text-xl font-paragraph-d text-black text-left mq450:text-base">
                      Pending
                    </div>
                  </div>
                </button>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">HR</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">Clifford Lehner</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Sun Sep 03 2023
                </div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border text-center">
                <div className="flex-1 relative mq450:text-base">-</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[0px_10px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="h-9 w-9 relative object-cover min-h-[36px]"
                  alt=""
                  src="/eye@3x.png"
                />
              </div>
            </div>
            <div className="w-[1790px] box-border overflow-y-auto flex flex-row items-center justify-start py-1.5 pr-[13px] pl-[89px] gap-[0px_19px] border-b-[2px] border-solid border-gray1-1000">
              <div className="w-[118px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">648</div>
              </div>
              <div className="w-[212px] flex flex-col items-start justify-start">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Others
                </div>
              </div>
              <div className="w-[179px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">Category</div>
              </div>
              <div className="w-[211px] flex flex-col items-start justify-start">
                <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-row items-center justify-center p-[3px]">
                  <div className="flex flex-row items-center justify-start py-0 px-2 gap-[0px_3px]">
                    <div className="h-2.5 w-2.5 relative rounded-[50%] box-border border-[0px] border-solid border-lime" />
                    <div className="relative mq450:text-base">Open</div>
                  </div>
                </div>
              </div>
              <div className="w-[182px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">IT</div>
              </div>
              <div className="w-[105px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">-</div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Sun Sep 03 2023
                </div>
              </div>
              <div className="w-[156px] relative text-center flex items-center justify-center mq450:text-base">
                -
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start py-2.5 pr-[58px] pl-[57px] gap-[0px_9px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="h-9 w-9 relative object-cover min-h-[36px]"
                  alt=""
                  src="/eye@3x.png"
                />
              </div>
            </div>
            <div className="w-[1790px] box-border overflow-y-auto flex flex-row items-center justify-start py-1.5 pr-[13px] pl-[89px] gap-[0px_19px] border-b-[2px] border-solid border-gray1-1000">
              <div className="w-[118px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">648</div>
              </div>
              <div className="w-[212px] flex flex-col items-start justify-start">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Others
                </div>
              </div>
              <div className="w-[179px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">Category</div>
              </div>
              <div className="w-[207px] flex flex-col items-start justify-start">
                <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-row items-center justify-center p-[3px]">
                  <div className="flex flex-row items-center justify-start py-0 px-2 gap-[0px_3px]">
                    <div className="h-2.5 w-2.5 relative rounded-[50%] box-border border-[0px] border-solid border-lime" />
                    <div className="relative mq450:text-base">Open</div>
                  </div>
                </div>
              </div>
              <div className="w-[186px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">HR</div>
              </div>
              <div className="w-[105px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">-</div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Sun Sep 03 2023
                </div>
              </div>
              <div className="w-[156px] relative text-center flex items-center justify-center mq450:text-base">
                -
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start py-2.5 pr-[58px] pl-[57px] gap-[0px_9px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="h-9 w-9 relative object-cover min-h-[36px]"
                  alt=""
                  src="/eye@3x.png"
                />
              </div>
            </div>
            <div className="w-[1790px] box-border overflow-x-auto flex flex-row items-center justify-start py-0 pr-4 pl-2.5 border-b-[2px] border-solid border-gray1-1000">
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">648</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="flex-1 relative mq450:text-base">Others</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">Category</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <button className="cursor-pointer [border:none] py-[3px] px-2 bg-lightpink rounded-31xl overflow-hidden flex flex-col items-start justify-center">
                  <div className="flex flex-row items-center justify-start py-0 px-[3px] gap-[0px_3px]">
                    <div className="flex flex-row items-center justify-start">
                      <img
                        className="h-2.5 w-2.5 relative"
                        alt=""
                        src="/frame-frame.svg"
                      />
                    </div>
                    <div className="relative text-xl font-paragraph-d text-black text-left mq450:text-base">
                      Closed
                    </div>
                  </div>
                </button>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">IT</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">Clifford Lehner</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Sun Sep 03 2023
                </div>
              </div>
              <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5">
                <div className="relative mq450:text-base">Fri Oct 04 2024</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[0px_10px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="h-9 w-9 relative object-cover min-h-[36px]"
                  alt=""
                  src="/eye@3x.png"
                />
              </div>
            </div>
            <div className="w-[1790px] box-border overflow-x-auto flex flex-row items-center justify-start py-0 pr-4 pl-2.5 border-b-[2px] border-solid border-gray1-1000">
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">648</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="flex-1 relative mq450:text-base">Others</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">Category</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <button className="cursor-pointer [border:none] py-[3px] px-2 bg-navajowhite rounded-31xl overflow-hidden flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-start py-0 px-[3px] gap-[0px_5px]">
                    <img
                      className="h-1 w-2.5 relative"
                      alt=""
                      src="/line-5.svg"
                    />
                    <div className="relative text-xl font-paragraph-d text-black text-left mq450:text-base">
                      Pending
                    </div>
                  </div>
                </button>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">IT</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="relative mq450:text-base">Clifford Lehner</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Sun Sep 03 2023
                </div>
              </div>
              <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5">
                <div className="relative mq450:text-base">Fri Oct 04 2024</div>
              </div>
              <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[0px_10px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="h-9 w-9 relative object-cover min-h-[36px]"
                  alt=""
                  src="/eye@3x.png"
                />
              </div>
            </div>
            <div className="w-[1790px] box-border overflow-y-auto flex flex-row items-center justify-start py-1.5 pr-[13px] pl-[89px] gap-[0px_19px] border-b-[2px] border-solid border-gray1-1000">
              <div className="w-[349px] flex flex-row items-start justify-between py-0 pr-14 pl-0 box-border max-w-full gap-[20px]">
                <div className="relative mq450:text-base">648</div>
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Others
                </div>
              </div>
              <div className="w-[179px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">Category</div>
              </div>
              <div className="w-[167px] flex flex-col items-start justify-start">
                <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-row items-center justify-center p-[3px]">
                  <div className="flex flex-row items-center justify-start py-0 px-2 gap-[0px_3px]">
                    <div className="h-2.5 w-2.5 relative rounded-[50%] box-border border-[0px] border-solid border-lime" />
                    <div className="relative mq450:text-base">Open</div>
                  </div>
                </div>
              </div>
              <div className="w-[226px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">Accounting</div>
              </div>
              <div className="w-[105px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">-</div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Sun Sep 03 2023
                </div>
              </div>
              <div className="w-[156px] relative text-center flex items-center justify-center mq450:text-base">
                -
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start py-2.5 pr-[58px] pl-[57px] gap-[0px_9px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="h-9 w-9 relative object-cover min-h-[36px]"
                  alt=""
                  src="/eye@3x.png"
                />
              </div>
            </div>
            <div className="w-[1790px] box-border overflow-y-auto flex flex-row items-center justify-start py-1.5 pr-[13px] pl-[89px] gap-[0px_19px] z-[1] border-b-[2px] border-solid border-gray1-1000">
              <div className="w-[118px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">648</div>
              </div>
              <div className="w-[212px] flex flex-col items-start justify-start">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Others
                </div>
              </div>
              <div className="w-[179px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">Category</div>
              </div>
              <div className="w-[211px] flex flex-col items-start justify-start">
                <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-row items-center justify-center p-[3px]">
                  <div className="flex flex-row items-center justify-start py-0 px-2 gap-[0px_3px]">
                    <div className="h-2.5 w-2.5 relative rounded-[50%] box-border border-[0px] border-solid border-lime" />
                    <div className="relative mq450:text-base">Open</div>
                  </div>
                </div>
              </div>
              <div className="w-[182px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">IT</div>
              </div>
              <div className="w-[105px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">-</div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Sun Sep 03 2023
                </div>
              </div>
              <div className="w-[156px] relative text-center flex items-center justify-center mq450:text-base">
                -
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start py-2.5 pr-[58px] pl-[57px] gap-[0px_9px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="h-9 w-9 relative object-cover min-h-[36px]"
                  alt=""
                  src="/eye@3x.png"
                />
              </div>
            </div>
            <div className="w-[1790px] box-border overflow-y-auto flex flex-row items-center justify-start py-1.5 pr-[13px] pl-[89px] gap-[0px_19px] z-[2] border-b-[2px] border-solid border-gray1-1000">
              <div className="w-[118px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">648</div>
              </div>
              <div className="w-[212px] flex flex-col items-start justify-start">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Others
                </div>
              </div>
              <div className="w-[179px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">Category</div>
              </div>
              <div className="w-[207px] flex flex-col items-start justify-start">
                <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-row items-center justify-center p-[3px]">
                  <div className="flex flex-row items-center justify-start py-0 px-2 gap-[0px_3px]">
                    <div className="h-2.5 w-2.5 relative rounded-[50%] box-border border-[0px] border-solid border-lime" />
                    <div className="relative mq450:text-base">Open</div>
                  </div>
                </div>
              </div>
              <div className="w-[186px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">HR</div>
              </div>
              <div className="w-[105px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">-</div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Sun Sep 03 2023
                </div>
              </div>
              <div className="w-[156px] relative text-center flex items-center justify-center mq450:text-base">
                -
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start py-2.5 pr-[58px] pl-[57px] gap-[0px_9px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="h-9 w-9 relative object-cover min-h-[36px]"
                  alt=""
                  src="/eye@3x.png"
                />
              </div>
            </div>
            <div className="w-[1790px] box-border overflow-y-auto flex flex-row items-center justify-start py-1.5 pr-[13px] pl-[89px] gap-[0px_19px] z-[3] border-b-[2px] border-solid border-gray1-1000">
              <div className="w-[118px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">648</div>
              </div>
              <div className="w-[212px] flex flex-col items-start justify-start">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Others
                </div>
              </div>
              <div className="w-[179px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">Category</div>
              </div>
              <div className="w-[207px] flex flex-col items-start justify-start">
                <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-row items-center justify-center p-[3px]">
                  <div className="flex flex-row items-center justify-start py-0 px-2 gap-[0px_3px]">
                    <div className="h-2.5 w-2.5 relative rounded-[50%] box-border border-[0px] border-solid border-lime" />
                    <div className="relative mq450:text-base">Open</div>
                  </div>
                </div>
              </div>
              <div className="w-[186px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">HR</div>
              </div>
              <div className="w-[105px] flex flex-col items-start justify-start">
                <div className="relative mq450:text-base">-</div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="w-[156px] relative flex items-center mq450:text-base">
                  Sun Sep 03 2023
                </div>
              </div>
              <div className="w-[156px] relative text-center flex items-center justify-center mq450:text-base">
                -
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start py-2.5 pr-[58px] pl-[57px] gap-[0px_9px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-9 w-9 relative bg-[url('/public/plus@3x.png')] bg-cover bg-no-repeat bg-[top]" />
                <img
                  className="h-9 w-9 relative object-cover min-h-[36px]"
                  alt=""
                  src="/eye@3x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[1730px] overflow-hidden flex flex-row items-center justify-between p-2.5 box-border gap-[20px] max-w-full text-lg mq850:flex-wrap">
            <div className="relative tracking-[0.01em] leading-[100%] font-medium whitespace-pre-wrap">
              Showing 1 to 11 of 783 results
            </div>
            <div className="w-[272px] flex flex-row items-start justify-start gap-[0px_8px] text-center text-sm text-dark-grey-400">
              <button className="cursor-pointer [border:none] p-0 bg-lightslategray h-8 w-8 relative rounded" />
              <div className="flex-1 flex flex-row items-center justify-center text-steelblue-300">
                <div className="flex-1 rounded bg-gray-0 overflow-hidden flex flex-row items-center justify-center py-[5px] px-[3px] border-[1px] border-solid border-steelblue-300">
                  <img
                    className="h-6 w-6 relative hidden"
                    alt=""
                    src="/carat.svg"
                  />
                  <b className="w-6 relative leading-[20px] inline-block shrink-0">
                    1
                  </b>
                </div>
              </div>
              <div className="flex-[0.75] rounded bg-gray-0 flex flex-row items-center justify-center py-[5px] px-[3px] border-[1px] border-solid border-gainsboro-200">
                <b className="w-6 relative leading-[20px] inline-block shrink-0">
                  2
                </b>
              </div>
              <div className="flex-[0.75] rounded bg-gray-0 flex flex-row items-center justify-center py-[5px] px-[3px] border-[1px] border-solid border-gainsboro-200">
                <b className="w-6 relative leading-[20px] inline-block shrink-0">
                  ...
                </b>
              </div>
              <div className="flex-[0.75] rounded bg-gray-0 flex flex-row items-center justify-center py-[5px] px-[3px] border-[1px] border-solid border-gainsboro-200">
                <b className="w-6 relative leading-[20px] inline-block shrink-0">
                  9
                </b>
              </div>
              <div className="flex-[0.75] rounded bg-gray-0 flex flex-row items-center justify-center py-[5px] px-[3px] border-[1px] border-solid border-gainsboro-200">
                <b className="w-6 relative leading-[20px] inline-block shrink-0">
                  10
                </b>
              </div>
              <button className="cursor-pointer p-0 bg-gray-0 h-8 w-8 relative rounded box-border border-[1px] border-solid border-gainsboro-200" />
            </div>
          </div>
        </div>
      </section>
      {isAssignTicketOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAssignTicket}
        >
          <AssignTicket onClose={closeAssignTicket} />
        </PortalPopup>
      )}
      {isViewTicketRequestSAOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeViewTicketRequestSA}
        >
          <ViewTicketRequestSA onClose={closeViewTicketRequestSA} />
        </PortalPopup>
      )}
    </>
  );
});

export default TicketTable;
