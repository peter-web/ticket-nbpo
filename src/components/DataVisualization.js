import { memo } from "react";

const DataVisualization = memo(() => {
  return (
    <section className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[9px] pl-0 box-border gap-[20px_16.05px] max-w-full text-center text-6xl text-black font-paragraph-d">
      <div
        className="flex-[0.9822] rounded-3xs bg-gray-0 shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start pt-5 px-[15px] pb-[337px] box-border gap-[15px] min-w-[500px] min-h-[402px] max-h-[403px] max-w-full mq450:pb-[219px] mq450:box-border"
        id="card1ID"
      >
        <div className="self-stretch relative mq450:text-xl">Total Tickets</div>
        <div className="w-[81px] relative hidden mq450:text-xl">See All</div>
        <img
          className="w-6 h-6 relative object-cover hidden"
          alt=""
          src="/ellipsis@2x.png"
        />
        <div className="self-stretch h-[5px] relative box-border border-t-[5px] border-solid border-steelblue-200" />
      </div>
      <div
        className="flex-[0.9822] rounded-3xs bg-gray-0 shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start pt-5 px-[15px] pb-[337px] box-border gap-[15px] min-w-[500px] min-h-[402px] max-h-[403px] max-w-full mq450:pb-[219px] mq450:box-border"
        id="card2ID"
      >
        <div className="self-stretch relative mq450:text-xl">
          My Annually Trend Issued
        </div>
        <img
          className="w-6 h-6 relative object-cover hidden"
          alt=""
          src="/ellipsis@2x.png"
        />
        <div className="self-stretch h-[5px] relative box-border border-t-[5px] border-solid border-steelblue-200" />
      </div>
      <div
        className="flex-1 rounded-3xs bg-gray-0 shadow-[-4px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start pt-5 px-2.5 pb-2.5 box-border gap-[15px] min-w-[500px] min-h-[402px] max-h-[403px] max-w-full"
        id="card3ID"
      >
        <div className="self-stretch relative mq450:text-xl">
          All-Time Top Performers
        </div>
        <img
          className="w-6 h-6 relative object-cover hidden"
          alt=""
          src="/ellipsis@2x.png"
        />
        <div className="self-stretch h-[5px] relative box-border border-t-[5px] border-solid border-steelblue-200" />
        <form className="m-0 self-stretch flex flex-col items-start justify-start border-[2px] border-solid border-whitesmoke">
          <button className="cursor-pointer [border:none] py-[5px] px-0 bg-steelblue-300 self-stretch overflow-hidden flex flex-row items-start justify-start gap-[0px_10px] mq850:flex-wrap">
            <div className="h-[42px] flex-1 relative text-xl font-paragraph-d text-gray-0 text-center flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap min-w-[176px] mq450:text-base">
              Top Performers
            </div>
            <div className="h-[42px] flex-1 relative text-xl font-paragraph-d text-gray-0 text-center flex items-center justify-center min-w-[176px] mq450:text-base">
              Total Tickets Catered
            </div>
          </button>
          <div className="self-stretch h-[52px] bg-aliceblue overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border mq850:h-auto">
            <div className="self-stretch flex flex-row items-center justify-start py-2.5 pr-9 pl-[35px] gap-[0px_10px] shrink-0 mq850:flex-wrap">
              <div className="h-6 flex-1 relative text-xl font-paragraph-d text-black text-left inline-block overflow-hidden text-ellipsis min-w-[153px] mq450:text-base">
                Veah Ranario
              </div>
              <input
                className="w-full [border:none] [outline:none] font-paragraph-d text-xl bg-[transparent] h-6 flex-1 relative text-black text-center inline-block min-w-[153px] mq450:text-base"
                placeholder="113"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch h-[52px] bg-gray1-100 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border mq850:h-auto">
            <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] gap-[0px_10px] mq850:flex-wrap">
              <div className="flex-1 relative text-xl font-paragraph-d text-black text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[153px] mq450:text-base">
                Rendell Yap
              </div>
              <div className="flex-1 relative text-xl font-paragraph-d text-black text-center inline-block min-w-[153px] mq450:text-base">
                109
              </div>
            </div>
          </div>
          <div className="self-stretch h-[52px] bg-aliceblue overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border mq850:h-auto">
            <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] gap-[0px_10px] mq850:flex-wrap">
              <div className="flex-1 relative text-xl font-paragraph-d text-black text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[153px] mq450:text-base">
                Hannie Nakila
              </div>
              <div className="flex-1 relative text-xl font-paragraph-d text-black text-center inline-block min-w-[153px] mq450:text-base">
                89
              </div>
            </div>
          </div>
          <div className="self-stretch h-[52px] bg-gray-0 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border mq850:h-auto">
            <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] gap-[0px_10px] mq850:flex-wrap">
              <div className="flex-1 relative text-xl font-paragraph-d text-black text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[153px] mq450:text-base">
                Pauline Bins
              </div>
              <div className="flex-1 relative text-xl font-paragraph-d text-black text-center inline-block min-w-[153px] mq450:text-base">
                62
              </div>
            </div>
          </div>
          <div className="self-stretch h-[52px] bg-aliceblue overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-0 box-border mq850:h-auto">
            <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[35px] gap-[0px_10px] mq850:flex-wrap">
              <div className="flex-1 relative text-xl font-paragraph-d text-black text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[153px] mq450:text-base">
                Ed Christian Bate
              </div>
              <div className="flex-1 relative text-xl font-paragraph-d text-black text-center inline-block min-w-[153px] mq450:text-base">
                58
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
});

export default DataVisualization;
