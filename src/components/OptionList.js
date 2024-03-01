import { memo, useMemo } from "react";

const OptionList = memo(
  ({
    property1DefaultMargin,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  }) => {
    const property1Default3Style = useMemo(() => {
      return {
        margin: property1DefaultMargin,
        position: property1DefaultPosition,
        top: property1DefaultTop,
        left: property1DefaultLeft,
      };
    }, [
      property1DefaultMargin,
      property1DefaultPosition,
      property1DefaultTop,
      property1DefaultLeft,
    ]);

    return (
      <div
        className="flex flex-col items-start justify-start text-left text-mini-3 text-black font-h5-d"
        style={property1Default3Style}
      >
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
    );
  }
);

export default OptionList;
