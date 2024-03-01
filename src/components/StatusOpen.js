import { memo } from "react";

const StatusOpen = memo(() => {
  return (
    <div className="rounded-31xl bg-lightgoldenrodyellow overflow-hidden flex flex-row items-center justify-center p-[3px] text-left text-xl text-black font-h5-d">
      <div className="flex flex-row items-center justify-start py-0 px-2 gap-[0px_3px]">
        <div className="h-2.5 w-2.5 relative rounded-[50%] box-border border-[0px] border-solid border-lime" />
        <div className="relative mq450:text-base">Open</div>
      </div>
    </div>
  );
});

export default StatusOpen;
