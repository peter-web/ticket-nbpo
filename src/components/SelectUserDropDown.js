import { memo, useMemo } from "react";

const SelectUserDropDown = memo(
  ({
    property1DefaultMinHeight,
    property1DefaultHeight,
    frameDivFlexWrap,
    selectUserMinWidth,
  }) => {
    const property1Default2Style = useMemo(() => {
      return {
        minHeight: property1DefaultMinHeight,
        height: property1DefaultHeight,
      };
    }, [property1DefaultMinHeight, property1DefaultHeight]);

    const frameDiv1Style = useMemo(() => {
      return {
        flexWrap: frameDivFlexWrap,
      };
    }, [frameDivFlexWrap]);

    const selectUserStyle = useMemo(() => {
      return {
        minWidth: selectUserMinWidth,
      };
    }, [selectUserMinWidth]);

    return (
      <div
        className="rounded-8xs bg-gray-0 box-border h-[59px] flex flex-col items-start justify-center py-0 pr-2.5 pl-5 text-left text-12xl-3 text-gray1-300 font-h5-d self-stretch border-[2px] border-solid border-black"
        style={property1Default2Style}
      >
        <div
          className="self-stretch flex flex-row items-center justify-start gap-[0px_10px]"
          style={frameDiv1Style}
        >
          <div
            className="flex-1 relative"
            style={selectUserStyle}
          >{`Select User `}</div>
          <div className="flex flex-row items-center justify-start">
            <img
              className="w-[30px] relative h-[30px] object-cover"
              alt=""
              src="/expand-arrow2@2x.png"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default SelectUserDropDown;
