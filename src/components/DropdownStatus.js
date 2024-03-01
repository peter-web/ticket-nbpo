import { memo, useMemo } from "react";

const DropdownStatus = memo(
  ({
    stateCollapsedPosition,
    stateCollapsedMargin,
    stateCollapsedTop,
    stateCollapsedLeft,
    stateCollapsedBorderRadius,
    stateCollapsedBoxShadow,
    stateCollapsedBorder,
  }) => {
    const stateCollapsedStyle = useMemo(() => {
      return {
        position: stateCollapsedPosition,
        margin: stateCollapsedMargin,
        top: stateCollapsedTop,
        left: stateCollapsedLeft,
        borderRadius: stateCollapsedBorderRadius,
        boxShadow: stateCollapsedBoxShadow,
        border: stateCollapsedBorder,
      };
    }, [
      stateCollapsedPosition,
      stateCollapsedMargin,
      stateCollapsedTop,
      stateCollapsedLeft,
      stateCollapsedBorderRadius,
      stateCollapsedBoxShadow,
      stateCollapsedBorder,
    ]);

    return (
      <div
        className="w-[85px] bg-powderblue flex flex-row items-center justify-start py-[5px] px-1.5 box-border relative gap-[0px_5px] text-left text-mini-3 text-black font-h5-d"
        style={stateCollapsedStyle}
      >
        <div className="flex-1 relative z-[2]">Status</div>
        <img
          className="w-2.5 relative h-2.5 object-contain z-[1]"
          alt=""
          src="/expand-arrow@2x.png"
        />
        <div className="!m-[0] absolute top-[calc(50%_-_89.5px)] left-[calc(50%_-_39.5px)] flex flex-col items-start justify-start z-[0]">
          <div className="w-20 relative bg-gray-0 box-border h-[25px] overflow-hidden shrink-0 border-b-[1px] border-solid border-gainsboro-300">
            <div className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_30px)]">
              Open
            </div>
          </div>
          <div className="w-20 relative bg-gray-0 box-border h-[25px] overflow-hidden shrink-0 border-b-[1px] border-solid border-gainsboro-300">
            <div className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_30px)]">
              Pending
            </div>
          </div>
          <div className="w-20 relative bg-gray-0 box-border h-[25px] overflow-hidden shrink-0 border-b-[1px] border-solid border-gainsboro-300">
            <div className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_30px)]">
              Closed
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default DropdownStatus;
