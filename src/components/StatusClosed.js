import { memo } from "react";

const StatusClosed = memo(() => {
  return (
    <button className="cursor-pointer [border:none] py-[3px] px-2 bg-lightpink rounded-31xl overflow-hidden flex flex-col items-start justify-center">
      <div className="flex flex-row items-center justify-start py-0 px-[3px] gap-[0px_3px]">
        <div className="flex flex-row items-center justify-start">
          <img className="h-2.5 w-2.5 relative" alt="" src="/frame-frame.svg" />
        </div>
        <div className="relative text-xl font-h5-d text-black text-left mq450:text-base">
          Closed
        </div>
      </div>
    </button>
  );
});

export default StatusClosed;
