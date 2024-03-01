import { memo, useState, useCallback } from "react";
import ReassignTicket1 from "./ReassignTicket1";
import PortalPopup from "./PortalPopup";
import DropdownStatus from "./DropdownStatus";
import SubmitButton from "./SubmitButton";
import TypeNormal from "./TypeNormal";

const ViewTRSA = memo(() => {
  const [isReassignTicketOpen, setReassignTicketOpen] = useState(false);

  const onSubmitButtonContainerClick = useCallback(() => {
    // Please sync "Section 1" to the project
  }, []);

  const openReassignTicket = useCallback(() => {
    setReassignTicketOpen(true);
  }, []);

  const closeReassignTicket = useCallback(() => {
    setReassignTicketOpen(false);
  }, []);

  return (
    <>
      <div className="w-[705px] rounded-8xs bg-azure shadow-[0px_3px_5.8px_rgba(0,_0,_0,_0.25)] h-[873px] overflow-hidden flex flex-col items-center justify-start relative max-w-full max-h-full text-left text-xl text-gray-0 font-h5-d">
        <div className="self-stretch bg-steelblue-300 overflow-hidden flex flex-row items-center justify-between py-2.5 pr-2.5 pl-[15px] z-[2] text-6xl">
          <div className="relative">Ticket Request</div>
          <div className="w-[27.8px] rounded-[60.33px] bg-gray-0 overflow-hidden shrink-0 flex flex-row items-center justify-between p-1 box-border">
            <img
              className="w-[18.7px] relative h-[18.7px] object-cover"
              alt=""
              src="/close@2x.png"
            />
          </div>
        </div>
        <div className="w-[705px] !m-[0] absolute top-[826px] left-[0px] bg-azure h-[47px] flex flex-row items-center justify-between py-[5px] px-2.5 box-border z-[1] text-black">
          <div className="flex flex-row items-center justify-start relative gap-[0px_10px]">
            <div className="overflow-hidden flex flex-row items-start justify-start py-[5px] px-2.5 z-[0]">
              <div className="relative">Mark as:</div>
            </div>
            <DropdownStatus
              stateCollapsedPosition="absolute"
              stateCollapsedMargin="0 !important"
              stateCollapsedTop="3.5px"
              stateCollapsedLeft="111px"
              stateCollapsedBorderRadius="5px"
              stateCollapsedBoxShadow="0px 0px 5px rgba(0, 0, 0, 0.25)"
              stateCollapsedBorder="1px solid #000"
            />
          </div>
          <SubmitButton
            ticketActionLabel="/task-completed@2x.png"
            actionButtonText="Submit"
            typeDefaultBackgroundColor="#fff"
            typeDefaultPadding="10px 20px"
            typeDefaultAlignSelf="stretch"
            taskCompletedIconMinHeight="unset"
            closeTicketDisplay="inline-block"
            closeTicketFontSize="20px"
            onSubmitButtonContainerClick={onSubmitButtonContainerClick}
          />
        </div>
        <div className="self-stretch h-[776px] overflow-y-auto shrink-0 flex flex-col items-center justify-start p-5 box-border gap-[15px_0px] z-[0] text-gray-900">
          <div className="self-stretch rounded-[8.07px] bg-gray-0 shadow-[0px_3.2px_6.46px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start p-[16.14937400817871px] gap-[8.88px_0px]">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 relative inline-block h-[22.6px]">
                Ticket Info
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8.07px_0px] text-base text-gray-600">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-between">
                <div className="flex flex-row items-center justify-start gap-[0px_11.3px]">
                  <div className="relative">Ticket ID:</div>
                  <div className="relative text-black">608</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_11.3px]">
                  <div className="relative">Priority:</div>
                  <TypeNormal
                    statusType="Normal"
                    typeNormalWidth="unset"
                    typeNormalHeight="16.2px"
                    normalFlex="unset"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-between">
                <div className="h-[19.4px] flex flex-row items-center justify-start gap-[0px_11.3px]">
                  <div className="relative">Category:</div>
                  <div className="relative text-gray-900">Sub-Category 1</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_11.3px]">
                  <div className="relative">Created :</div>
                  <div className="relative text-gray-900">23 Feb 20224</div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-between">
                <div className="h-[19.4px] flex flex-row items-center justify-start gap-[0px_11.3px]">
                  <div className="relative">Status:</div>
                  <TypeNormal
                    statusType="Open"
                    typeNormalWidth="44.9px"
                    typeNormalHeight="16.2px"
                    normalFlex="1"
                  />
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_11.3px]">
                  <div className="relative">Last message :</div>
                  <div className="relative text-gray-900">- - -</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px]">
            <div className="flex-1 rounded-[7.25px] bg-gray-0 shadow-[0px_2.9px_5.8px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[14.507041931152344px] px-[21.760562896728516px] pb-[21.760562896728516px] box-border gap-[7.98px_0px] min-w-[200px]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="w-[205.5px] relative inline-block h-[20.3px] shrink-0">
                  Assigned to
                </div>
                <img
                  className="w-5 relative h-5 object-cover cursor-pointer"
                  alt=""
                  src="/ellipsis3@2x.png"
                  onClick={openReassignTicket}
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0px_21.76px] text-base">
                <div className="flex flex-row items-center justify-start">
                  <div className="w-8 relative h-8 flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[2px] [transform:scale(1.688)]"
                      alt=""
                      src="/component-2@2x.png"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative inline-block h-[20.3px] shrink-0">
                    James Rohan
                  </div>
                  <div className="self-stretch relative text-smi-8 text-gray-600 inline-block overflow-hidden text-ellipsis h-[13.1px] shrink-0">
                    username@Nextbposolutions1.onemicrosoft.com
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-[7.25px] bg-gray-0 shadow-[0px_2.9px_5.8px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[14.507041931152344px] px-[21.760562896728516px] pb-[21.760562896728516px] box-border gap-[7.98px_0px] min-w-[200px] text-xs-6">
              <div className="self-stretch relative text-xl inline-block h-[20.3px] shrink-0">
                Request by
              </div>
              <div className="w-[279px] hidden flex-row items-center justify-between">
                <div className="w-[30.5px] relative leading-[17.41px] font-medium inline-block shrink-0">
                  Team
                </div>
                <img
                  className="w-[14.5px] relative h-[14.5px]"
                  alt=""
                  src="/phosphor-icons--plus.svg"
                />
              </div>
              <div className="w-[137.1px] hidden flex-row items-center justify-center gap-[0px_10.88px]">
                <img
                  className="w-[29px] relative rounded-[3.63px] h-[24.3px] object-cover"
                  alt=""
                  src="/unsplashqckxruozjrg@2x.png"
                />
                <div className="h-[33.4px] flex flex-col items-start justify-between">
                  <div className="w-[92.1px] relative leading-[17.41px] font-medium inline-block h-[20.3px] shrink-0">
                    Team Sneak
                  </div>
                  <div className="w-[92.1px] relative text-2xs-2 leading-[14.51px] text-gray-600 inline-block h-[13.1px] shrink-0">
                    @sneakyteam
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0px_21.76px] text-base">
                <div className="flex flex-row items-center justify-start">
                  <div className="w-8 relative h-8 flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[2px] [transform:scale(1.688)]"
                      alt=""
                      src="/component-2@2x.png"
                    />
                  </div>
                </div>
                <div className="flex-1 h-[33.4px] flex flex-col items-start justify-start">
                  <div className="w-[175.7px] flex-1 relative inline-block">
                    Sonal Gupta
                  </div>
                  <div className="self-stretch relative text-smi-8 text-gray-600 inline-block overflow-hidden text-ellipsis h-[13.1px] shrink-0">
                    username@Nextbposolutions1.onemicrosoft.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-[7.25px] bg-gray-0 shadow-[0px_2.9px_5.8px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[5px] px-0 pb-2.5 gap-[5px_0px] text-center text-base text-black">
            <div className="self-stretch flex flex-row items-center justify-start py-[5px] px-2.5 text-left text-xl border-b-[2px] border-solid border-steelblue-200">
              <div className="flex-1 relative">Ticket Logs:</div>
            </div>
            <div className="w-[665px] box-border hidden flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                <div className="flex-1 relative">James Rohan</div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                <div className="flex-1 relative">Sent a message</div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                <div className="flex-1 relative">Sat Feb 24 2024</div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                <div className="flex-1 relative">06:10 AM</div>
              </div>
            </div>
            <div className="w-[665px] box-border hidden flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                <div className="flex-1 relative">James Rohan</div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                <div className="flex-1 relative">Accepts the ticket</div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                <div className="flex-1 relative">Sat Feb 24 2024</div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                <div className="flex-1 relative">06:10 AM</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-2.5 border-b-[2px] border-solid border-gray1-1000">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-gray-900">
                <div className="flex-1 relative">Sonal Gupta</div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                <div className="flex-1 relative">Initiated a ticket</div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                <div className="flex-1 relative">Fri Feb 23 2024</div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5">
                <div className="flex-1 relative">11:44 PM</div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-[7.25px] bg-gray-0 shadow-[0px_2.9px_5.8px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-col items-center justify-start py-2.5 px-0 gap-[5px_0px] text-black">
            <div className="self-stretch flex flex-row items-center justify-start pt-0 px-2.5 pb-[5px] border-b-[2px] border-solid border-steelblue-200">
              <div className="flex-1 relative">Description:</div>
            </div>
            <div className="self-stretch h-[212px] flex flex-col items-center justify-start p-2.5 box-border text-mid-8">
              <div className="self-stretch flex-1 bg-gray1-200 overflow-hidden flex flex-row items-start justify-start p-2.5 border-[1px] border-solid border-gainsboro-300">
                <div className="relative">
                  I have some issue in my sofware app.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-[7.25px] bg-gray-0 shadow-[0px_2.9px_5.8px_rgba(0,_0,_0,_0.25)] h-[348px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-2.5 px-0 box-border gap-[10px_0px] text-mini-3 text-gainsboro-300">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-2.5 z-[1]">
              <div className="self-stretch flex-1 overflow-hidden border-[1px] border-solid border-gainsboro-300" />
            </div>
            <div className="self-stretch bg-gray-0 flex flex-col items-end justify-start p-5 z-[0]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[0px_10px]">
                <div className="flex-1 rounded-8xs overflow-hidden flex flex-row items-center justify-start py-[9px] px-5 border-[1px] border-solid border-gainsboro-300">
                  <div className="relative font-medium">
                    Write your resolution here . . .
                  </div>
                </div>
                <div className="self-stretch rounded-7xs-7 bg-steelblue-300 overflow-hidden flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_5.7px] text-gray-0 border-[0.6px] border-solid border-gray-0">
                  <img
                    className="w-4 relative h-4 object-cover"
                    alt=""
                    src="/email-send@2x.png"
                  />
                  <b className="relative">Send</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isReassignTicketOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeReassignTicket}
        >
          <ReassignTicket1 onClose={closeReassignTicket} />
        </PortalPopup>
      )}
    </>
  );
});

export default ViewTRSA;
