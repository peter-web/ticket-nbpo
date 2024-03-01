import { memo, useCallback } from "react";

const Filter = memo(() => {
  const onFilterTextClick = useCallback(() => {
    // Please sync "Section 1" to the project
  }, []);

  return (
    <div className="w-[839px] rounded-8xs bg-gray-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[328px] overflow-hidden flex flex-col items-start justify-start py-0 px-[5px] box-border gap-[10px] max-w-full max-h-full text-left text-xl text-black font-h5-d">
      <div className="self-stretch flex flex-row items-start justify-start py-[15px] px-5 gap-[0px_10px] text-[30px] border-b-[3px] border-solid border-steelblue-200">
        <div className="flex-1 relative font-medium">Filter</div>
        <img
          className="w-[30px] relative h-[30px] object-cover"
          alt=""
          src="/close@2x.png"
        />
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap items-center justify-between py-0 px-[25px]">
        <div className="flex flex-row items-center justify-start gap-[0px_10px]">
          <div className="relative whitespace-pre-wrap">{`Topic:                  `}</div>
          <div className="rounded-8xs bg-gray-0 overflow-hidden flex flex-row items-center justify-start py-1.5 px-2.5 gap-[0px_10px] text-gray1-1000 border-[1px] border-solid border-silver">
            <div className="relative">Select Topic</div>
            <img
              className="self-stretch w-[22px] relative max-h-full object-cover"
              alt=""
              src="/expand-arrow@2x.png"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_10px]">
          <div className="relative">Category:</div>
          <div className="rounded-8xs bg-gray-0 overflow-hidden flex flex-row items-center justify-start py-1.5 px-2.5 gap-[0px_10px] text-gray1-1000 border-[1px] border-solid border-silver">
            <div className="relative">Select a Category</div>
            <img
              className="self-stretch w-[22px] relative max-h-full object-cover"
              alt=""
              src="/expand-arrow@2x.png"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_10px]">
          <div className="relative">Status:</div>
          <div className="rounded-8xs bg-gray-0 overflow-hidden flex flex-row items-center justify-start py-1.5 px-2.5 gap-[0px_10px] text-gray1-1000 border-[1px] border-solid border-silver">
            <div className="relative">Select a Status</div>
            <img
              className="self-stretch w-[22px] relative max-h-full object-cover"
              alt=""
              src="/expand-arrow@2x.png"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_10px]">
          <div className="relative">From:</div>
          <div className="w-[136px] rounded-8xs bg-gray-0 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-1.5 px-2.5 gap-[0px_5px] text-gray1-1000 border-[1px] border-solid border-silver">
            <div className="flex-1 relative">Date</div>
            <img
              className="w-6 relative h-6 object-cover"
              alt=""
              src="/calendar@2x.png"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_10px]">
          <div className="relative">To:</div>
          <div className="w-[161px] rounded-8xs bg-gray-0 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-1.5 px-2.5 gap-[0px_5px] text-gray1-1000 border-[1px] border-solid border-silver">
            <div className="flex-1 relative">Date</div>
            <img
              className="w-6 relative h-6 object-cover"
              alt=""
              src="/calendar@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-end py-[15px] px-5 text-gray-0">
        <div className="rounded-3xs bg-steelblue-300 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 border-[1px] border-solid border-gray-0">
          <div className="relative cursor-pointer" onClick={onFilterTextClick}>
            Filter
          </div>
        </div>
      </div>
    </div>
  );
});

export default Filter;
