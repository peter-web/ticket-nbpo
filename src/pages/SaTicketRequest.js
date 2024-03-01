import { useState, useCallback } from "react";
import AssignTicket from "../components/AssignTicket";
import PortalPopup from "../components/PortalPopup";
import ViewTicketRequestSA from "../components/ViewTicketRequestSA";

const SaTicketRequest = () => {
  const [isAssignTicketPopupOpen, setAssignTicketPopupOpen] = useState(false);
  const [isViewTicketRequestSAOpen, setViewTicketRequestSAOpen] =
    useState(false);

  const onLogoutContainerClick = useCallback(() => {
    // Please sync "Desktop/Login" to the project
  }, []);

  const openAssignTicketPopup = useCallback(() => {
    setAssignTicketPopupOpen(true);
  }, []);

  const closeAssignTicketPopup = useCallback(() => {
    setAssignTicketPopupOpen(false);
  }, []);

  const openViewTicketRequestSA = useCallback(() => {
    setViewTicketRequestSAOpen(true);
  }, []);

  const closeViewTicketRequestSA = useCallback(() => {
    setViewTicketRequestSAOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-gray1-600 overflow-hidden flex flex-row items-start justify-start tracking-[normal] text-left text-2xl text-azure font-paragraph-d">
        <div className="h-[1080px] w-20 bg-gray1-600 shadow-[8px_4px_15px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[30px] px-[15px] box-border gap-[50px_0px] mq1275:pt-5 mq1275:pb-5 mq1275:box-border">
          <div className="self-stretch flex flex-row items-start justify-start">
            <img
              className="h-[71px] w-[50px] relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/logo-solo-2@2x.png"
            />
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-between">
            <div className="flex flex-col items-center justify-center gap-[41px_0px]">
              <div className="flex flex-row items-center justify-start py-0 pr-3.5 pl-[13px] gap-[0px_20px]">
                <img
                  className="h-[23.4px] w-[23.4px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/layout-dashboard1.svg"
                />
                <div className="w-[109px] relative hidden mq450:text-mid">
                  Dashboard
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-0 pr-3.5 pl-[13px] gap-[0px_20px] text-aquamarine">
                <img
                  className="h-[23.4px] w-[23.4px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/ticket1.svg"
                />
                <div className="w-[149px] relative hidden mq450:text-mid">
                  Ticket Request
                </div>
              </div>
              <div className="hidden flex-row items-center justify-start">
                <img
                  className="h-[24.4px] w-[24.4px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/settings.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[18px_0px]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-start">
                  <div className="h-[50px] w-[50px] relative flex items-center justify-center">
                    <img
                      className="h-full w-full object-contain absolute left-[0px] top-[2px] [transform:scale(1.44)]"
                      loading="lazy"
                      alt=""
                      src="/component-2@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-10 bg-gray1-800 box-border flex flex-row items-center justify-center py-2 px-[7px] cursor-pointer border-[1px] border-solid border-gray1-900"
                onClick={onLogoutContainerClick}
              >
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/logout.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className="flex-1 bg-azure flex flex-col items-start justify-start pt-5 pb-[520px] pr-5 pl-[30px] box-border gap-[26px_15px] max-w-[calc(100%_-_80px)] text-center text-20xl-1 text-black font-paragraph-d mq900:pb-[220px] mq900:box-border mq1275:pb-[338px] mq1275:box-border">
          <b className="relative inline-block text-steelblue-300 text-left min-w-[300px] mq450:text-[23px] mq900:text-12xl">
            Tickets Request
          </b>
          <div className="w-[60.6px] hidden flex-row items-center justify-end z-[2] text-5xl">
            <div className="rounded-xl bg-gray-0 shadow-[-3px_4px_10.3px_rgba(0,_0,_0,_0.25)] overflow-hidden hidden flex-row items-center justify-center py-2.5 px-[15px] gap-[0px_10px]">
              <div className="overflow-hidden flex flex-row items-center justify-start py-[3px] px-[5px] box-border w-[px] h-[px]">
                <img
                  className="h-[24.4px] w-[20.6px] relative"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="h-[29px] rounded-3xs bg-gray1-900 overflow-hidden hidden flex-row items-center justify-center">
                <div className="self-stretch relative flex items-center justify-center whitespace-nowrap mq450:text-lgi">
                  Notification
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1570px] hidden flex-row flex-wrap items-start justify-start gap-[20px] max-w-full z-[1] text-6xl">
            <div className="flex-[0.9796] rounded-3xs bg-gray-0 shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start py-2.5 px-[15px] box-border gap-[15px] min-w-[335px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-center relative max-w-full">
                <div className="flex-1 flex flex-row items-center justify-center pt-2.5 px-[30px] pb-0 box-border gap-[0px_10px] max-w-full z-[0]">
                  <div className="h-[30px] flex-1 relative inline-block max-w-full mq450:text-xl">
                    Total Tickets
                  </div>
                  <div className="w-[81px] relative hidden mq450:text-xl">
                    See All
                  </div>
                </div>
                <img
                  className="h-6 w-6 absolute !m-[0] top-[12.6px] right-[-1px] object-cover z-[1]"
                  alt=""
                  src="/ellipsis@2x.png"
                />
              </div>
              <div className="self-stretch h-0 relative box-border border-t-[5px] border-solid border-steelblue-200" />
              <div className="self-stretch flex flex-col items-center justify-start text-[52.5px]">
                <div className="w-[245.6px] h-[245.6px] relative">
                  <img
                    className="absolute top-[14.1px] left-[calc(50%_+_42.9px)] w-[79.9px] h-[108.7px]"
                    alt=""
                    src="/group.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[calc(50%_-_55.9px)] w-[113.2px] h-[41.3px]"
                    alt=""
                    src="/group-1.svg"
                  />
                  <img
                    className="absolute top-[13.5px] left-[calc(50%_-_122.8px)] w-[80.8px] h-[216.3px]"
                    alt=""
                    src="/group-2.svg"
                  />
                  <img
                    className="absolute top-[122.8px] left-[calc(50%_-_60.3px)] w-[183.1px] h-[122.8px]"
                    alt=""
                    src="/group-3.svg"
                  />
                  <div className="absolute top-[calc(50%_-_31.9px)] left-[calc(50%_-_55.9px)] flex items-center justify-center w-[112.1px] mq450:text-12xl mq900:text-[42px]">
                    690
                  </div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-between pt-5 px-2.5 pb-2.5 gap-[20px] text-xl">
                <div className="h-6 flex flex-row items-center justify-start py-0 px-[3px] box-border gap-[10px]">
                  <div className="flex flex-row items-center justify-start">
                    <div className="h-2.5 w-2.5 relative bg-steelblue-400" />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="self-stretch relative flex items-center justify-center mq450:text-base">
                      Overdue
                    </div>
                  </div>
                </div>
                <div className="h-6 flex flex-row items-center justify-start py-0 px-[3px] box-border gap-[10px]">
                  <div className="h-2.5 w-2.5 relative bg-forestgreen" />
                  <div className="self-stretch relative flex items-center justify-center mq450:text-base">
                    Open
                  </div>
                </div>
                <div className="h-6 flex flex-row items-center justify-start py-0 px-[3px] box-border gap-[10px]">
                  <div className="h-2.5 w-2.5 relative bg-darkolivegreen" />
                  <div className="self-stretch relative flex items-center justify-center mq450:text-base">
                    Closed
                  </div>
                </div>
                <div className="h-6 flex flex-row items-center justify-start py-0 px-[3px] box-border gap-[10px]">
                  <div className="h-2.5 w-2.5 relative bg-palegoldenrod" />
                  <div className="self-stretch relative flex items-center justify-center mq450:text-base">
                    Pending
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[0.9796] rounded-3xs bg-gray-0 shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start py-2.5 px-[15px] box-border gap-[15px] min-w-[335px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start pt-2.5 px-0 pb-0 box-border relative gap-[0px_10px] max-w-full">
                <div className="h-[30px] flex-1 relative inline-block max-w-full z-[0] mq450:text-xl">
                  Annually Trend Issued
                </div>
                <img
                  className="h-6 w-6 absolute !m-[0] top-[12.6px] right-[-1px] object-cover z-[1]"
                  alt=""
                  src="/ellipsis1@2x.png"
                />
              </div>
              <div className="self-stretch h-0 relative box-border border-t-[5px] border-solid border-steelblue-200" />
              <div className="self-stretch flex flex-col items-start justify-center pt-5 px-5 pb-0 box-border max-w-full text-left">
                <div className="w-[480px] h-[193px] flex flex-row items-center justify-start py-0 px-5 box-border gap-[0px_10px] max-w-[109%] shrink-0">
                  <div className="flex flex-col items-center justify-start py-[5px] px-0 gap-[23px_0px]">
                    <div className="relative mq450:text-xl">163</div>
                    <div className="relative mq450:text-xl">145</div>
                    <div className="relative mq450:text-xl">98</div>
                    <div className="relative mq450:text-xl">81</div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center py-[5px] px-0 box-border gap-[26px_0px] max-w-[calc(100%_-_54px)]">
                    <div className="self-stretch h-[26px] flex flex-row items-center justify-start max-w-full">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-start max-w-full">
                        <div className="self-stretch flex-1 relative rounded-tl-none rounded-tr-smi rounded-br-smi rounded-bl-none bg-steelblue-400 max-w-full" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[31px] pl-0 box-border max-w-full">
                      <div className="flex-1 flex flex-col items-start justify-center max-w-full">
                        <div className="self-stretch h-[26px] relative rounded-tl-none rounded-tr-smi rounded-br-smi rounded-bl-none bg-goldenrod" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                      <div className="w-[325px] flex flex-col items-start justify-center max-w-full">
                        <div className="self-stretch h-[26px] relative rounded-tl-none rounded-tr-smi rounded-br-smi rounded-bl-none bg-blanchedalmond" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="w-[300px] flex flex-col items-start justify-center">
                        <div className="self-stretch h-[26px] relative rounded-tl-none rounded-tr-smi rounded-br-smi rounded-bl-none bg-gray1-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-between pt-5 px-2.5 pb-2.5 gap-[20px] text-xl">
                <div className="h-6 w-[130px] flex flex-row items-center justify-start py-0 pr-3.5 pl-[3px] box-border">
                  <div className="h-2.5 w-2.5 relative bg-steelblue-400" />
                  <div className="self-stretch flex-1 relative flex items-center justify-center mq450:text-base">
                    Software
                  </div>
                </div>
                <div className="h-6 w-[130px] flex flex-row items-center justify-start py-0 pr-5 pl-[3px] box-border">
                  <div className="h-2.5 w-2.5 relative bg-blanchedalmond" />
                  <div className="self-stretch flex-1 relative flex items-center justify-center mq450:text-base">
                    Network
                  </div>
                </div>
                <div className="h-6 w-[130px] flex flex-row items-center justify-start py-0 pr-1.5 pl-[3px] box-border">
                  <div className="h-2.5 w-2.5 relative bg-goldenrod" />
                  <div className="self-stretch flex-1 relative flex items-center justify-center mq450:text-base">
                    Hardware
                  </div>
                </div>
                <div className="h-6 w-[130px] flex flex-row items-center justify-start py-0 pr-10 pl-[3px] box-border">
                  <div className="h-2.5 w-2.5 relative bg-gray1-500" />
                  <div className="self-stretch flex-1 relative flex items-center justify-center mq450:text-base">
                    Others
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-gray-0 shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[15px] min-w-[335px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start pt-2.5 px-0 pb-0 box-border relative gap-[0px_10px] max-w-full shrink-0">
                <div className="self-stretch flex-1 relative inline-block max-w-full z-[0] mq450:text-xl">
                  All Time Ticket Catered
                </div>
                <img
                  className="h-6 w-6 absolute !m-[0] top-[12.6px] right-[-1px] object-cover z-[1]"
                  alt=""
                  src="/ellipsis2@2x.png"
                />
              </div>
              <div className="self-stretch h-0 relative box-border border-t-[5px] border-solid border-steelblue-200" />
              <div className="self-stretch box-border flex flex-col items-start justify-start max-w-full shrink-0 text-left text-xl border-[2px] border-solid border-whitesmoke">
                <div className="self-stretch h-[45px] bg-aliceblue overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border max-w-full mq450:h-auto">
                  <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-[35px] box-border gap-[0px_10px] max-w-full mq450:flex-wrap">
                    <div className="self-stretch flex-1 relative inline-block overflow-hidden text-ellipsis min-w-[246px] max-w-full mq450:text-base">
                      Veah Ranario
                    </div>
                    <div className="relative text-center mq450:text-base">
                      113
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[45px] bg-gray1-100 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border max-w-full mq450:h-auto">
                  <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] box-border gap-[0px_10px] max-w-full mq450:flex-wrap">
                    <div className="h-6 flex-1 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[244px] max-w-full mq450:text-base">
                      Rendell Yap
                    </div>
                    <div className="relative text-center mq450:text-base">
                      109
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[45px] bg-aliceblue overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border max-w-full mq450:h-auto">
                  <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] box-border gap-[0px_10px] max-w-full mq450:flex-wrap">
                    <div className="h-6 flex-1 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full mq450:text-base">
                      Hannie Nakila
                    </div>
                    <div className="relative text-center mq450:text-base">
                      89
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[45px] bg-gray-0 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border max-w-full mq450:h-auto">
                  <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] box-border gap-[0px_10px] max-w-full mq450:flex-wrap">
                    <div className="h-6 flex-1 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full mq450:text-base">
                      Pauline Bins
                    </div>
                    <div className="relative text-center mq450:text-base">
                      62
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[45px] bg-aliceblue overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border max-w-full mq450:h-auto">
                  <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] box-border gap-[0px_10px] max-w-full mq450:flex-wrap">
                    <div className="h-6 flex-1 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full mq450:text-base">
                      Ed Christian Bate
                    </div>
                    <div className="relative text-center mq450:text-base">
                      58
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[45px] bg-gray-0 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border max-w-full mq450:h-auto">
                  <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] box-border gap-[0px_10px] max-w-full mq450:flex-wrap">
                    <div className="h-6 flex-1 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full mq450:text-base">
                      Rainier Windsor Von Yniguez
                    </div>
                    <div className="relative text-center mq450:text-base">
                      47
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[45px] bg-aliceblue overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border max-w-full mq450:h-auto">
                  <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] box-border gap-[0px_10px] max-w-full mq450:flex-wrap">
                    <div className="h-6 flex-1 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full mq450:text-base">
                      Ed Christian Bate
                    </div>
                    <div className="relative text-center mq450:text-base">
                      58
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="self-stretch rounded-xl bg-gray-0 shadow-[-4px_4px_10px_7px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-5 px-0 pb-[15px] box-border gap-[20px_10px] min-w-[900px] max-w-full text-left text-xl text-black font-paragraph-d">
            <header className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[35px] pl-[25px] box-border gap-[10px_6.83px] top-[0] z-[99] sticky max-w-full text-left text-5xl text-black font-paragraph-d">
              <div className="w-[632px] flex flex-col items-start justify-center gap-[5px_0px] min-w-[200px] max-w-full">
                <div className="relative tracking-[0.01em] leading-[100%] whitespace-nowrap">
                  All Tickets
                </div>
                <div className="self-stretch relative text-smi-8 text-gray1-400 inline-block min-w-[200px] whitespace-nowrap mq1625:hidden">
                  Displays all tickets from IT, HR, Accounting, and Servicing
                </div>
              </div>
              <div className="w-[632px] flex flex-col items-center justify-start min-w-[222px] max-w-full">
                <button className="cursor-pointer py-[9.161931991577148px] pr-[13px] pl-[12.826704025268555px] bg-gray-0 rounded-8xs overflow-hidden flex flex-row items-center justify-start border-[0.9px] border-solid border-gray1-700">
                  <div className="flex flex-row items-center justify-start gap-[0px_9px]">
                    <img
                      className="h-6 w-6 relative object-cover min-h-[24px]"
                      alt=""
                      src="/collaborating-in-circle@2x.png"
                    />
                    <div className="relative text-[18.3px] font-paragraph-d text-black text-left whitespace-nowrap">
                      All Department
                    </div>
                    <img
                      className="h-6 w-6 relative object-cover min-h-[24px]"
                      alt=""
                      src="/expand-arrow1@2x.png"
                    />
                  </div>
                </button>
              </div>
              <div className="rounded-5xs-5 bg-steelblue-300 box-border overflow-hidden flex flex-row items-center justify-start py-[7.5px] pr-[11px] pl-2.5 min-w-[45px] border-[0.8px] border-solid border-gray-0">
                <img
                  className="h-6 w-6 relative object-cover"
                  alt=""
                  src="/filter@2x.png"
                />
              </div>
              <div className="w-[400px] rounded-3xs bg-gray-0 box-border overflow-hidden flex flex-row items-center justify-start py-2.5 pr-[35px] pl-[25px] gap-[0px_10px] max-w-[400px] flex-[0.845] border-[1px] border-solid border-gray1-1000 mq450:max-w-full">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/search.svg"
                />
                <input
                  className="w-[calc(100%_-_84px)] [border:none] [outline:none] font-paragraph-d text-xl bg-[transparent] h-6 flex-1 relative text-gainsboro-300 text-left flex items-center min-w-[184px] whitespace-nowrap"
                  placeholder="Search Ticket"
                  type="text"
                />
              </div>
            </header>
            <div className="self-stretch flex flex-col items-center justify-start max-w-full">
              <div className="w-[1790px] bg-gray1-600 overflow-x-auto flex flex-row items-start justify-start py-0 pr-4 pl-2.5 box-border max-w-full text-center text-gray-0">
                <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[15px] box-border">
                  <b className="w-[156px] relative flex items-center justify-center mq450:text-base">
                    Ticket No.
                  </b>
                  <img
                    className="h-5 w-2.5 relative hidden z-[2]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[15px] box-border">
                  <b className="w-[156px] relative flex items-center justify-center mq450:text-base">
                    Topic
                  </b>
                  <img
                    className="h-5 w-2.5 relative hidden z-[2]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="w-[196px] shrink-0 flex flex-col items-start justify-start py-0 px-0 box-border">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[15px]">
                    <b className="w-[156px] relative flex items-center justify-center mq450:text-base">
                      Category
                    </b>
                    <img
                      className="h-5 w-2.5 relative hidden z-[2]"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
                <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[15px] box-border">
                  <b className="w-[156px] relative flex items-center justify-center mq450:text-base">
                    Status
                  </b>
                  <img
                    className="h-5 w-2.5 relative hidden z-[2]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[15px] box-border">
                  <b className="w-[156px] relative flex items-center justify-center">
                    Department
                  </b>
                  <img
                    className="h-5 w-2.5 relative hidden z-[2]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="w-[196px] shrink-0 flex flex-col items-start justify-start py-0 px-0 box-border">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[15px]">
                    <b className="w-[156px] relative flex items-center justify-center mq450:text-base">
                      Owner
                    </b>
                    <img
                      className="h-5 w-2.5 relative hidden z-[2]"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
                <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[15px] box-border">
                  <b className="w-[156px] relative flex items-center justify-center mq450:text-base">
                    Date Created
                  </b>
                  <img
                    className="h-5 w-2.5 relative hidden z-[2]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[15px] box-border">
                  <b className="w-[156px] relative flex items-center justify-center mq450:text-base">
                    Date Closed
                  </b>
                  <img
                    className="h-5 w-2.5 relative hidden z-[2]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="w-[196px] shrink-0 flex flex-col items-start justify-start py-0 px-0 box-border">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-center p-[15px]">
                    <b className="w-[156px] relative flex items-center justify-center mq450:text-base">
                      Action
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start py-1.5 pr-[13px] pl-[88px] gap-[0px_19px] border-b-[2px] border-solid border-gray1-1000 mq1625:flex-wrap mq900:pl-[22px] mq900:box-border mq1275:pl-11 mq1275:box-border">
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
                <div className="w-[156px] relative text-center flex items-center justify-center min-w-[5px] mq450:text-base mq1625:flex-1">
                  -
                </div>
                <div className="flex-[0.4133] overflow-hidden flex flex-row items-start justify-start py-2.5 pr-[58px] pl-[57px] box-border gap-[0px_9px] min-w-[72px] mq1625:flex-1">
                  <img
                    className="h-9 w-9 relative object-cover min-h-[36px] cursor-pointer"
                    loading="lazy"
                    alt=""
                    src="/plus@3x.png"
                    onClick={openAssignTicketPopup}
                  />
                  <img
                    className="h-9 w-9 relative object-cover min-h-[36px] cursor-pointer"
                    alt=""
                    src="/eye@3x.png"
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
                    <div className="relative mq450:text-base">
                      Hardware Issue
                    </div>
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
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/plus1@3x.png"
                    />
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
                    <div className="relative mq450:text-base">
                      Hardware Issue
                    </div>
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
                    <div className="relative mq450:text-base">
                      Ethel Volkman
                    </div>
                  </div>
                  <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[17px] box-border">
                    <div className="flex-1 relative mq450:text-base">
                      Sun Jan 28 2024
                    </div>
                  </div>
                  <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-4">
                    <div className="relative mq450:text-base">
                      Tue Feb 11 2025
                    </div>
                  </div>
                  <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[0px_10px] flex-[0.963]">
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/plus1@3x.png"
                    />
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
                    <div className="flex-1 relative mq450:text-base">
                      Others
                    </div>
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
                    <div className="relative mq450:text-base">
                      Clifford Lehner
                    </div>
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
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/plus@3x.png"
                    />
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
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/plus@3x.png"
                    />
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
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/plus@3x.png"
                    />
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
                    <div className="flex-1 relative mq450:text-base">
                      Others
                    </div>
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
                    <div className="relative mq450:text-base">
                      Clifford Lehner
                    </div>
                  </div>
                  <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                    <div className="w-[156px] relative flex items-center mq450:text-base">
                      Sun Sep 03 2023
                    </div>
                  </div>
                  <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="relative mq450:text-base">
                      Fri Oct 04 2024
                    </div>
                  </div>
                  <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[0px_10px]">
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/plus1@3x.png"
                    />
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
                    <div className="flex-1 relative mq450:text-base">
                      Others
                    </div>
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
                    <div className="relative mq450:text-base">
                      Clifford Lehner
                    </div>
                  </div>
                  <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border">
                    <div className="w-[156px] relative flex items-center mq450:text-base">
                      Sun Sep 03 2023
                    </div>
                  </div>
                  <div className="overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5">
                    <div className="relative mq450:text-base">
                      Fri Oct 04 2024
                    </div>
                  </div>
                  <div className="w-[196px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[0px_10px]">
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/plus@3x.png"
                    />
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
                  <div className="w-[610px] flex flex-row items-center justify-between py-0 pr-[118px] pl-0 box-border gap-[20px] max-w-full">
                    <div className="flex flex-col items-start justify-start py-0 pr-[9px] pl-0">
                      <div className="relative mq450:text-base">Category</div>
                    </div>
                    <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-row items-center justify-center p-[3px]">
                      <div className="flex flex-row items-center justify-start py-0 px-2 gap-[0px_3px]">
                        <div className="h-2.5 w-2.5 relative rounded-[50%] box-border border-[0px] border-solid border-lime" />
                        <div className="relative mq450:text-base">Open</div>
                      </div>
                    </div>
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
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/plus@3x.png"
                    />
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
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/plus@3x.png"
                    />
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/eye@3x.png"
                    />
                  </div>
                </div>
                <div className="w-[1790px] box-border overflow-y-auto flex flex-row items-center justify-start py-1.5 pr-[13px] pl-[89px] gap-[0px_19px] z-[2] border-b-[2px] border-solid border-gray1-1000">
                  <div className="w-[349px] flex flex-row items-start justify-between py-0 pr-14 pl-0 box-border max-w-full gap-[20px]">
                    <div className="relative mq450:text-base">648</div>
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
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/plus@3x.png"
                    />
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
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/plus@3x.png"
                    />
                    <img
                      className="h-9 w-9 relative object-cover min-h-[36px]"
                      alt=""
                      src="/eye@3x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[1730px] overflow-hidden flex flex-row items-center justify-between p-2.5 box-border gap-[20px] max-w-full text-lg mq900:flex-wrap">
                <div className="relative tracking-[0.01em] leading-[100%] font-medium whitespace-pre-wrap">
                  Showing 1 to 11 of 783 results
                </div>
                <div className="w-[272px] flex flex-row items-start justify-start gap-[0px_8px] text-center text-sm text-dark-grey-400">
                  <img
                    className="h-8 w-8 relative rounded min-h-[32px]"
                    loading="lazy"
                    alt=""
                    src="/page.svg"
                  />
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
                  <img
                    className="h-8 w-8 relative rounded min-h-[32px]"
                    alt=""
                    src="/page-1.svg"
                  />
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
      {isAssignTicketPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAssignTicketPopup}
        >
          <AssignTicket onClose={closeAssignTicketPopup} />
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
};

export default SaTicketRequest;
