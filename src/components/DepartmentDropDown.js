import { memo, useMemo } from "react";

const DepartmentDropDown = memo(
  ({
    uniqueIdentifierText,
    uniqueIdentifierCode,
    frameDivFlex,
    frameDivWidth,
    collaboratingInCircleMinHeight,
    allDepartmentFlex,
    allDepartmentDisplay,
    allDepartmentTextAlign,
    expandArrowIconMinHeight,
  }) => {
    const frameDivStyle = useMemo(() => {
      return {
        flex: frameDivFlex,
        width: frameDivWidth,
      };
    }, [frameDivFlex, frameDivWidth]);

    const collaboratingInCircleStyle = useMemo(() => {
      return {
        minHeight: collaboratingInCircleMinHeight,
      };
    }, [collaboratingInCircleMinHeight]);

    const allDepartmentStyle = useMemo(() => {
      return {
        flex: allDepartmentFlex,
        display: allDepartmentDisplay,
        textAlign: allDepartmentTextAlign,
      };
    }, [allDepartmentFlex, allDepartmentDisplay, allDepartmentTextAlign]);

    const expandArrowIconStyle = useMemo(() => {
      return {
        minHeight: expandArrowIconMinHeight,
      };
    }, [expandArrowIconMinHeight]);

    return (
      <div className="rounded-8xs bg-gray-0 box-border overflow-hidden flex flex-row items-center justify-start py-[9.161931991577148px] px-[12.826704025268555px] text-left text-lg-3 text-black font-h5-d border-[0.9px] border-solid border-gray1-700">
        <div
          className="flex-1 flex flex-row items-center justify-start gap-[0px_9px]"
          style={frameDivStyle}
        >
          <img
            className="w-6 relative h-6 object-cover"
            alt=""
            src={uniqueIdentifierText}
            style={collaboratingInCircleStyle}
          />
          <div className="flex-1 relative" style={allDepartmentStyle}>
            All Department
          </div>
          <img
            className="w-6 relative h-6 object-cover"
            alt=""
            src={uniqueIdentifierCode}
            style={expandArrowIconStyle}
          />
        </div>
      </div>
    );
  }
);

export default DepartmentDropDown;
