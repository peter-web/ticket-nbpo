import { memo, useCallback } from "react";

const ReassignTicket = memo(({ onClose }) => {
  const onSubmitButtonClick = useCallback(() => {
    // Please sync "Super Admin/IT Department" to the project
  }, []);

  return (
    <div className="w-[776px] rounded-3xs bg-gray-0 overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[10px_0px] tracking-[normal] max-w-full max-h-full text-center text-12xl-3 text-black font-h5-d">
      <header className="self-stretch box-border flex flex-row items-start justify-start p-2.5 gap-[0px_9px] top-[0] z-[99] sticky max-w-full text-left text-20xl-1 text-black font-h5-d border-b-[1px] border-solid border-black">
        <div className="flex-1 flex flex-row items-start justify-center max-w-full">
          <div className="flex-1 relative inline-block whitespace-nowrap max-w-full">
            Reassign Ticket
          </div>
        </div>
        <div className="h-[38px] w-[38px] rounded-[60.33px] bg-gray-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-row items-start justify-start p-1 box-border">
          <img
            className="h-[30px] w-[30px] relative object-contain"
            loading="lazy"
            alt=""
            src="/close@2x.png"
          />
        </div>
      </header>
      <div className="flex flex-row items-start justify-start py-0 px-2.5">
        <div className="relative mq450:text-lgi mq750:text-6xl">Department</div>
      </div>
      <footer className="self-stretch flex flex-row flex-wrap items-start justify-center [row-gap:20px] text-center text-5xl text-gray-0 font-h5-d">
        <div className="flex-1 bg-steelblue-300 flex flex-row items-start justify-center min-w-[174px] max-w-[189px]">
          <div className="h-[58px] flex-1 relative font-medium flex items-center justify-center mq450:text-lgi">
            IT
          </div>
        </div>
        <div className="flex-1 bg-steelblue-300 flex flex-row items-start justify-center min-w-[174px] max-w-[189px]">
          <div className="h-[58px] flex-1 relative font-medium flex items-center justify-center mq450:text-lgi">
            HR
          </div>
        </div>
        <div className="flex-1 bg-steelblue-300 flex flex-row items-start justify-center min-w-[174px] max-w-[189px]">
          <div className="h-[58px] flex-1 relative font-medium flex items-center justify-center mq450:text-lgi">
            Accounting
          </div>
        </div>
        <div className="flex-1 bg-steelblue-300 flex flex-row items-start justify-center min-w-[174px] max-w-[189px]">
          <div className="h-[58px] flex-1 relative font-medium flex items-center justify-center mq450:text-lgi">
            Servicing
          </div>
        </div>
      </footer>
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start p-2.5 box-border max-w-full text-left text-gray1-300">
        <div className="self-stretch rounded-8xs bg-gray-0 box-border flex flex-col items-start justify-center py-0 pr-3 pl-[18px] min-h-[59px] max-w-full border-[2px] border-solid border-black">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_10px] max-w-full">
            <div className="flex-1 relative inline-block min-w-[134px] max-w-full mq450:text-lgi mq750:text-6xl">{`Select User `}</div>
            <div className="flex flex-row items-center justify-start">
              <img
                className="h-[30px] w-[30px] relative object-cover"
                alt=""
                src="/expand-arrow2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start py-2.5 px-0">
        <button
          className="cursor-pointer py-[16.363636016845703px] pr-10 pl-[40.90909194946289px] bg-steelblue-300 rounded-[8.18px] overflow-hidden flex flex-row items-center justify-start border-[0.8px] border-solid border-gray-0 hover:bg-steelblue-100 hover:box-border hover:border-[0.8px] hover:border-solid hover:border-gainsboro-100"
          onClick={onSubmitButtonClick}
        >
          <b className="relative text-xl-5 font-h5-d text-gray-0 text-left mq450:text-base">
            Done
          </b>
        </button>
      </div>
    </div>
  );
});

export default ReassignTicket;
