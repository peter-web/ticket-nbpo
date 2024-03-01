import { memo } from "react";

const StatusPending = memo(() => {
  return (
    <button className="cursor-pointer [border:none] py-[3px] px-2 bg-navajowhite rounded-31xl overflow-hidden flex flex-col items-start justify-start">
      <div className="flex flex-row items-center justify-start py-0 px-[3px] gap-[0px_5px]">
        <img className="h-1 w-2.5 relative" alt="" src="/line-5.svg" />
        <div className="relative text-xl font-h5-d text-black text-left mq450:text-base">
          Pending
        </div>
      </div>
    </button>
  );
});

export default StatusPending;
