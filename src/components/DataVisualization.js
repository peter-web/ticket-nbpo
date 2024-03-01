import { memo } from "react";

const DataVisualization = memo(() => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] text-center text-6xl text-black font-h5-d">
      <div className="flex-1 rounded-3xs bg-gray-0 shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.25)] h-[402px] overflow-hidden flex flex-col items-center justify-start py-2.5 px-[15px] box-border gap-[15px] min-w-[335px] min-h-[402px] max-h-[403px]">
        <div className="self-stretch flex flex-row items-center justify-center pt-2.5 px-0 pb-0 relative">
          <div className="flex-1 relative z-[0]">Total Tickets</div>
          <div className="w-[81px] relative hidden z-[1]">See All</div>
          <img
            className="w-6 absolute !m-[0] top-[12.6px] right-[-1px] h-6 object-cover hidden z-[2]"
            alt=""
            src="/ellipsis@2x.png"
          />
        </div>
        <div className="self-stretch relative box-border h-[5px] border-t-[5px] border-solid border-steelblue-200" />
      </div>
      <div className="flex-1 rounded-3xs bg-gray-0 shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.25)] h-[402px] overflow-hidden flex flex-col items-start justify-start py-2.5 px-[15px] box-border gap-[15px] min-w-[335px] min-h-[402px] max-h-[403px]">
        <div className="self-stretch flex flex-row items-center justify-start pt-2.5 px-0 pb-0 relative gap-[0px_10px]">
          <div className="flex-1 relative z-[0]">My Annually Trend Issued</div>
          <img
            className="w-6 absolute !m-[0] top-[12.6px] right-[-1px] h-6 object-cover hidden z-[1]"
            alt=""
            src="/ellipsis@2x.png"
          />
        </div>
        <div className="self-stretch relative box-border h-[5px] border-t-[5px] border-solid border-steelblue-200" />
      </div>
      <div className="flex-1 rounded-3xs bg-gray-0 shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.25)] h-[402px] overflow-hidden flex flex-col items-start justify-start py-2.5 px-[15px] box-border gap-[15px] min-w-[335px] min-h-[402px] max-h-[403px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-2.5 px-0 pb-0 relative gap-[0px_10px]">
          <div className="flex-1 relative z-[0]">All-Time Top Performers</div>
          <img
            className="w-6 absolute !m-[0] top-[12.6px] right-[-1px] h-6 object-cover hidden z-[1]"
            alt=""
            src="/ellipsis@2x.png"
          />
        </div>
        <div className="self-stretch relative box-border h-[5px] border-t-[5px] border-solid border-steelblue-200" />
        <div className="self-stretch flex-1 overflow-y-auto flex flex-col items-start justify-start text-left text-xl border-[2px] border-solid border-whitesmoke">
          <div className="self-stretch bg-steelblue-300 flex flex-row items-start justify-start py-[5px] px-0 gap-[0px_10px] z-[5] text-center text-gray-0">
            <div className="self-stretch flex-1 relative flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
              Top Performers
            </div>
            <div className="self-stretch flex-1 relative flex items-center justify-center">
              Total Tickets Catered
            </div>
          </div>
          <div className="self-stretch bg-aliceblue overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 z-[4]">
            <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-[35px] gap-[0px_10px]">
              <div className="flex-1 relative [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                Veah Ranario
              </div>
              <div className="flex-1 relative text-center">113</div>
            </div>
          </div>
          <div className="self-stretch bg-gray1-100 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 z-[3]">
            <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] gap-[0px_10px]">
              <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
                Rendell Yap
              </div>
              <div className="flex-1 relative text-center">109</div>
            </div>
          </div>
          <div className="self-stretch bg-aliceblue overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 z-[2]">
            <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] gap-[0px_10px]">
              <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
                Hannie Nakila
              </div>
              <div className="flex-1 relative text-center">89</div>
            </div>
          </div>
          <div className="self-stretch bg-gray-0 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 z-[1]">
            <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] gap-[0px_10px]">
              <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
                Pauline Bins
              </div>
              <div className="flex-1 relative text-center">62</div>
            </div>
          </div>
          <div className="self-stretch bg-aliceblue overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 z-[0]">
            <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] gap-[0px_10px]">
              <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
                Ed Christian Bate
              </div>
              <div className="flex-1 relative text-center">58</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DataVisualization;
