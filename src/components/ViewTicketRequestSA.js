import { memo, useState, useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import ReassignTicket from "./ReassignTicket";
import PortalPopup from "./PortalPopup";

const ViewTicketRequestSA = memo(({ onClose }) => {
  const [isReassignTicketOpen, setReassignTicketOpen] = useState(false);

  const openReassignTicket = useCallback(() => {
    setReassignTicketOpen(true);
  }, []);

  const closeReassignTicket = useCallback(() => {
    setReassignTicketOpen(false);
  }, []);

  return (
    <>
      <div className="w-[705px] rounded-8xs bg-azure shadow-[0px_3px_5.8px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start tracking-[normal] max-w-full max-h-full">
        <header className="self-stretch bg-steelblue-300 overflow-hidden flex flex-row items-center justify-between py-[5px] pr-2.5 pl-[15px] sticky top-[0] z-[99] gap-[20px] text-left text-6xl text-gray-0 font-paragraph-d">
          <div className="relative whitespace-nowrap">Ticket Request</div>
          <div className="h-[27.8px] w-[27.8px] relative rounded-[60.33px] bg-gray-0 overflow-hidden shrink-0">
            <img
              className="absolute top-[4.2px] left-[4.2px] w-[18.7px] h-[18.7px] object-cover"
              alt=""
              src="/close1@2x.png"
            />
          </div>
        </header>
        <section className="self-stretch h-[781px] overflow-y-auto shrink-0 flex flex-col items-center justify-start p-5 box-border gap-[15px_0px] max-w-full text-left text-xl text-black font-paragraph-d mq600:h-auto">
          <section className="self-stretch rounded-[8.07px] bg-gray-0 shadow-[0px_3.2px_6.46px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start py-[16.14937400817871px] pr-[17px] pl-[16.14937400817871px] box-border gap-[8.88px_0px] shrink-0 max-w-full text-left text-xl text-gray-900 font-paragraph-d">
            <div className="self-stretch flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 relative inline-block max-w-full mq450:text-base">
                Ticket Info
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8.07px_0px] text-base text-gray-600">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-between gap-[20px] shrink-0">
                <div className="flex flex-row items-center justify-start gap-[0px_11.3px]">
                  <div className="relative">Ticket ID:</div>
                  <div className="relative text-black">608</div>
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[0px_11.3px]">
                  <div className="relative">Priority:</div>
                  <div className="rounded-[40.37px] bg-lightgoldenrodyellow overflow-hidden flex flex-row items-center justify-start py-[1.614937424659729px] pr-1.5 pl-[6.459749698638916px] text-center text-3xs-7 text-lime border-[0.8px] border-solid border-lime">
                    <div className="relative leading-[12.92px] font-medium">
                      Normal
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-between gap-[20px] shrink-0">
                <div className="h-[19.4px] flex flex-row items-center justify-start gap-[0px_11.3px]">
                  <div className="relative">Category:</div>
                  <div className="relative text-gray-900">Sub-Category 1</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_11.3px]">
                  <div className="relative">Created :</div>
                  <div className="relative text-gray-900">23 Feb 20224</div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-between gap-[20px] shrink-0">
                <div className="h-[19.4px] flex flex-row items-center justify-start gap-[0px_11.3px]">
                  <div className="relative">Status:</div>
                  <div className="w-[44.9px] rounded-[40.37px] bg-lightgoldenrodyellow box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[1.614937424659729px] pr-1.5 pl-[6.459749698638916px] text-center text-3xs-7 text-lime border-[0.8px] border-solid border-lime">
                    <div className="flex-1 relative leading-[12.92px] font-medium">
                      Open
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_11.3px]">
                  <div className="relative">Last message :</div>
                  <div className="relative text-gray-900">- - -</div>
                </div>
              </div>
            </div>
          </section>
          <section className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px_15.12px] max-w-full text-left text-xl text-gray-900 font-paragraph-d">
            <div className="flex-1 rounded-[7.25px] bg-gray-0 shadow-[0px_2.9px_5.8px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[14.507041931152344px] px-[21.760562896728516px] pb-[21.760562896728516px] box-border gap-[7.98px_0px] min-w-[200px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <div className="w-[205.5px] relative inline-block shrink-0 mq450:text-base">
                  Assigned to
                </div>
                <img
                  className="h-5 w-5 relative object-cover min-h-[20px] cursor-pointer"
                  alt=""
                  src="/ellipsis3@2x.png"
                  onClick={openReassignTicket}
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0px_21.76px] text-base">
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="h-8 w-8 relative object-cover"
                    alt=""
                    src="/component-21@2x.png"
                  />
                </div>
                <div className="h-[33px] w-[228.2px] hidden flex-col items-start justify-start">
                  <div className="self-stretch flex-1 relative">
                    James Rohan
                  </div>
                  <div className="self-stretch h-[13.1px] relative text-smi-8 text-gray-600 inline-block overflow-hidden text-ellipsis shrink-0 whitespace-nowrap">
                    username@Nextbposolutions1.onemicrosoft.com
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-[7.25px] bg-gray-0 shadow-[0px_2.9px_5.8px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[14.507041931152344px] px-[21.760562896728516px] pb-[21.760562896728516px] box-border gap-[7.98px_0px] min-w-[200px] max-w-full text-xs-6">
              <div className="self-stretch relative text-xl mq450:text-base">
                Request by
              </div>
              <div className="w-[137px] h-[17px] hidden flex-row items-center justify-between gap-[20px]">
                <div className="h-[18px] w-[30.5px] relative leading-[17.41px] font-medium inline-block shrink-0">
                  Team
                </div>
                <img
                  className="h-[14.5px] w-[14.5px] relative"
                  alt=""
                  src="/phosphor-icons--plus.svg"
                />
              </div>
              <div className="w-[137.1px] hidden flex-row items-center justify-center gap-[0px_10.88px]">
                <img
                  className="h-[24.3px] w-[29px] relative rounded-[3.63px] object-cover"
                  alt=""
                  src="/unsplashqckxruozjrg@2x.png"
                />
                <div className="h-[33.4px] flex flex-col items-start justify-between">
                  <div className="w-[92.1px] flex-1 relative leading-[17.41px] font-medium inline-block">
                    Team Sneak
                  </div>
                  <div className="w-[92.1px] relative text-[10.2px] leading-[14.51px] text-gray-600 inline-block h-[13.1px] shrink-0">
                    @sneakyteam
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0px_21.76px] text-base">
                <div className="flex flex-row items-center justify-start">
                  <div className="h-8 w-8 relative flex items-center justify-center">
                    <img
                      className="h-full w-full object-contain absolute left-[0px] top-[2px] [transform:scale(1.688)]"
                      loading="lazy"
                      alt=""
                      src="/component-2-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[175.7px] relative inline-block">
                    Sonal Gupta
                  </div>
                  <div className="w-[225px] h-[13.1px] relative text-smi-8 text-gray-600 inline-block overflow-hidden text-ellipsis shrink-0 whitespace-nowrap">
                    username@Nextbposolutions1.onemicrosoft.com
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="self-stretch rounded-[7.25px] bg-gray-0 shadow-[0px_2.9px_5.8px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[5px] px-0 pb-2.5 box-border gap-[5px_0px] max-w-full text-center text-base text-black font-paragraph-d">
            <div className="self-stretch box-border flex flex-row items-center justify-start py-[5px] px-2.5 max-w-full border-b-[2px] border-solid border-steelblue-200">
              <input
                className="w-full [border:none] [outline:none] font-paragraph-d text-xl bg-[transparent] h-6 flex-1 relative text-black text-left flex items-center min-w-[250px] max-w-full mq450:text-base"
                placeholder="Ticket Logs:"
                type="text"
              />
            </div>
            <div className="self-stretch hidden flex-row flex-wrap items-center justify-center py-0 px-2.5 [row-gap:20px] border-b-[2px] border-solid border-gray1-1000">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border min-w-[121px] max-w-[161px]">
                <div className="h-[19px] flex-1 relative flex items-center justify-center">
                  James Rohan
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border min-w-[121px] max-w-[161px]">
                <div className="h-[19px] flex-1 relative flex items-center justify-center">
                  Sent a message
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-[18px] box-border min-w-[126px] max-w-[161px]">
                <div className="h-[38px] flex-1 relative flex items-center justify-center">
                  Sat Feb 24 2024
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border min-w-[121px] max-w-[161px]">
                <div className="h-[19px] flex-1 relative flex items-center justify-center whitespace-nowrap">
                  06:10 AM
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row flex-wrap items-center justify-center py-0 px-2.5 [row-gap:20px] border-b-[2px] border-solid border-gray1-1000">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border min-w-[121px] max-w-[161px]">
                <div className="h-[19px] flex-1 relative flex items-center justify-center">
                  James Rohan
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border min-w-[126px] max-w-[161px]">
                <div className="h-[38px] flex-1 relative flex items-center justify-center">
                  Accepts the ticket
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-[18px] box-border min-w-[126px] max-w-[161px]">
                <div className="h-[38px] flex-1 relative flex items-center justify-center">
                  Sat Feb 24 2024
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border min-w-[121px] max-w-[161px]">
                <div className="h-[19px] flex-1 relative flex items-center justify-center whitespace-nowrap">
                  06:10 AM
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[11px] pl-2.5 [row-gap:20px] border-b-[2px] border-solid border-gray1-1000 mq600:flex-wrap">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border min-w-[105px] text-gray-900 mq600:flex-1">
                <div className="flex-1 relative">Sonal Gupta</div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-center py-2.5 px-[18px]">
                <div className="relative">Initiated a ticket</div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-center py-2.5 px-[17px]">
                <div className="relative">Fri Feb 23 2024</div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border min-w-[105px] mq600:flex-1">
                <div className="flex-1 relative whitespace-nowrap">
                  11:44 PM
                </div>
              </div>
            </div>
          </section>
          <div className="self-stretch rounded-[7.25px] bg-gray-0 shadow-[0px_2.9px_5.8px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-col items-center justify-start py-2.5 px-0 box-border gap-[5px_0px] max-w-full">
            <div className="self-stretch box-border flex flex-row items-center justify-start pt-0 px-2.5 pb-[5px] max-w-full border-b-[2px] border-solid border-steelblue-200">
              <div className="flex-1 relative inline-block max-w-full mq450:text-base">
                Description:
              </div>
            </div>
            <textarea
              className="bg-gray1-200 h-[212px] w-auto [outline:none] self-stretch box-border flex flex-col items-center justify-start p-5 font-paragraph-d text-[17.8px] text-black border-[1px] border-solid border-gainsboro-300"
              placeholder="I have some issue in my sofware app."
              rows={11}
              cols={33}
            />
          </div>
          <div className="self-stretch rounded-[7.25px] bg-gray-0 shadow-[0px_2.9px_5.8px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-col items-center justify-center py-2.5 px-0 box-border gap-[10px_0px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-2.5 gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[0px_10px]">
                <div className="overflow-hidden flex flex-row items-start justify-start py-[5px] pr-1.5 pl-2.5">
                  <div className="relative mq450:text-base">Mark as:</div>
                </div>
                <div className="w-[85px] flex flex-col items-start justify-start">
                  <FormControl
                    className="self-stretch h-[27px] font-paragraph-d text-mini-3 text-black"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "85px",
                      height: "27px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "27px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "27px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "27px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "27px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="primary">Status</InputLabel>
                    <Select
                      color="primary"
                      label="Status"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="Open">Open</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Closed">Closed</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
              <button className="cursor-pointer py-[5.656579971313477px] pr-[11px] pl-[11.313159942626953px] bg-[transparent] rounded-[6.45px] overflow-hidden flex flex-row items-center justify-start gap-[0px_6.45px] border-[2px] border-solid border-steelblue-300 hover:bg-steelblue-500 hover:box-border hover:border-[2px] hover:border-solid hover:border-steelblue-100">
                <img
                  className="h-5 w-5 relative object-cover min-h-[20px]"
                  alt=""
                  src="/task-completed@2x.png"
                />
                <b className="relative text-[16.1px] font-paragraph-d text-steelblue-300 text-left">
                  Done
                </b>
              </button>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-2.5">
              <textarea className="bg-[transparent] [outline:none] self-stretch h-[199px] box-border overflow-hidden shrink-0 border-[1px] border-solid border-gainsboro-300" />
            </div>
            <div className="self-stretch bg-gray-0 flex flex-col items-end justify-start p-5 box-border max-w-full text-mini-3 text-gainsboro-300">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-px pl-0 box-border gap-[0px_10px] max-w-full">
                <div className="flex-1 rounded-8xs box-border overflow-hidden flex flex-row items-center justify-start py-[9px] px-5 min-w-[200px] max-w-full border-[1px] border-solid border-gainsboro-300">
                  <div className="h-[17px] w-[200px] relative font-medium flex items-center">
                    Write your resolution here . . .
                  </div>
                </div>
                <div className="h-[35px] w-[77px] rounded-[5.7px] bg-steelblue-300 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[5px] pr-[9px] pl-2.5 gap-[0px_5.7px] text-gray-0 border-[0.6px] border-solid border-gray-0">
                  <img
                    className="h-4 w-4 relative object-cover"
                    alt=""
                    src="/email-send@2x.png"
                  />
                  <b className="h-[17px] flex-1 relative flex items-center">
                    Send
                  </b>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {isReassignTicketOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeReassignTicket}
        >
          <ReassignTicket onClose={closeReassignTicket} />
        </PortalPopup>
      )}
    </>
  );
});

export default ViewTicketRequestSA;
