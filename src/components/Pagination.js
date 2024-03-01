import { memo, useMemo } from "react";

const Pagination = memo(
  ({
    paginationWidth,
    pageIconOpacity,
    pageIconMinHeight,
    pageWidth,
    pagePosition,
    pageHeight,
    pageFlex,
    pageDisplay,
    pageFlexDirection,
    pageActivePosition,
    pageActiveHeight,
    pageActiveWidth,
    pageActiveTop,
    pageActiveRight,
    pageActiveBottom,
    pageActiveLeft,
    pageActiveFlex,
    pageActiveDisplay,
    pageActiveFlexDirection,
    pageActivePadding,
    caratIconPosition,
    caratIconHeight,
    caratIconWidth,
    caratIconTop,
    caratIconRight,
    caratIconBottom,
    caratIconLeft,
    caratIconOverflow,
    caratIconMaxHeight,
    numPosition,
    numHeight,
    numWidth,
    numTop,
    numLeft,
    pageWidth1,
    pagePosition1,
    pageHeight1,
    pageFlex1,
    pageDisplay1,
    pageFlexDirection1,
    pagePadding,
    numPosition1,
    numHeight1,
    numWidth1,
    numTop1,
    numLeft1,
    pageWidth2,
    pagePosition2,
    pageHeight2,
    pageFlex2,
    pageDisplay2,
    pageFlexDirection2,
    pagePadding1,
    numPosition2,
    numHeight2,
    numWidth2,
    numTop2,
    numLeft2,
    pageWidth3,
    pagePosition3,
    pageHeight3,
    pageFlex3,
    pageDisplay3,
    pageFlexDirection3,
    pagePadding2,
    numPosition3,
    numHeight3,
    numWidth3,
    numTop3,
    numLeft3,
    pageWidth4,
    pagePosition4,
    pageHeight4,
    pageFlex4,
    pageDisplay4,
    pageFlexDirection4,
    pagePadding3,
    numPosition4,
    numHeight4,
    numWidth4,
    numTop4,
    numLeft4,
    pageIconMinHeight1,
  }) => {
    const paginationStyle = useMemo(() => {
      return {
        width: paginationWidth,
      };
    }, [paginationWidth]);

    const pageIconStyle = useMemo(() => {
      return {
        opacity: pageIconOpacity,
        minHeight: pageIconMinHeight,
      };
    }, [pageIconOpacity, pageIconMinHeight]);

    const pageStyle = useMemo(() => {
      return {
        width: pageWidth,
        position: pagePosition,
        height: pageHeight,
        flex: pageFlex,
        display: pageDisplay,
        flexDirection: pageFlexDirection,
      };
    }, [
      pageWidth,
      pagePosition,
      pageHeight,
      pageFlex,
      pageDisplay,
      pageFlexDirection,
    ]);

    const pageActiveStyle = useMemo(() => {
      return {
        position: pageActivePosition,
        height: pageActiveHeight,
        width: pageActiveWidth,
        top: pageActiveTop,
        right: pageActiveRight,
        bottom: pageActiveBottom,
        left: pageActiveLeft,
        flex: pageActiveFlex,
        display: pageActiveDisplay,
        flexDirection: pageActiveFlexDirection,
        padding: pageActivePadding,
      };
    }, [
      pageActivePosition,
      pageActiveHeight,
      pageActiveWidth,
      pageActiveTop,
      pageActiveRight,
      pageActiveBottom,
      pageActiveLeft,
      pageActiveFlex,
      pageActiveDisplay,
      pageActiveFlexDirection,
      pageActivePadding,
    ]);

    const caratIconStyle = useMemo(() => {
      return {
        position: caratIconPosition,
        height: caratIconHeight,
        width: caratIconWidth,
        top: caratIconTop,
        right: caratIconRight,
        bottom: caratIconBottom,
        left: caratIconLeft,
        overflow: caratIconOverflow,
        maxHeight: caratIconMaxHeight,
      };
    }, [
      caratIconPosition,
      caratIconHeight,
      caratIconWidth,
      caratIconTop,
      caratIconRight,
      caratIconBottom,
      caratIconLeft,
      caratIconOverflow,
      caratIconMaxHeight,
    ]);

    const numStyle = useMemo(() => {
      return {
        position: numPosition,
        height: numHeight,
        width: numWidth,
        top: numTop,
        left: numLeft,
      };
    }, [numPosition, numHeight, numWidth, numTop, numLeft]);

    const page1Style = useMemo(() => {
      return {
        width: pageWidth1,
        position: pagePosition1,
        height: pageHeight1,
        flex: pageFlex1,
        display: pageDisplay1,
        flexDirection: pageFlexDirection1,
        padding: pagePadding,
      };
    }, [
      pageWidth1,
      pagePosition1,
      pageHeight1,
      pageFlex1,
      pageDisplay1,
      pageFlexDirection1,
      pagePadding,
    ]);

    const num1Style = useMemo(() => {
      return {
        position: numPosition1,
        height: numHeight1,
        width: numWidth1,
        top: numTop1,
        left: numLeft1,
      };
    }, [numPosition1, numHeight1, numWidth1, numTop1, numLeft1]);

    const page2Style = useMemo(() => {
      return {
        width: pageWidth2,
        position: pagePosition2,
        height: pageHeight2,
        flex: pageFlex2,
        display: pageDisplay2,
        flexDirection: pageFlexDirection2,
        padding: pagePadding1,
      };
    }, [
      pageWidth2,
      pagePosition2,
      pageHeight2,
      pageFlex2,
      pageDisplay2,
      pageFlexDirection2,
      pagePadding1,
    ]);

    const num2Style = useMemo(() => {
      return {
        position: numPosition2,
        height: numHeight2,
        width: numWidth2,
        top: numTop2,
        left: numLeft2,
      };
    }, [numPosition2, numHeight2, numWidth2, numTop2, numLeft2]);

    const page3Style = useMemo(() => {
      return {
        width: pageWidth3,
        position: pagePosition3,
        height: pageHeight3,
        flex: pageFlex3,
        display: pageDisplay3,
        flexDirection: pageFlexDirection3,
        padding: pagePadding2,
      };
    }, [
      pageWidth3,
      pagePosition3,
      pageHeight3,
      pageFlex3,
      pageDisplay3,
      pageFlexDirection3,
      pagePadding2,
    ]);

    const num3Style = useMemo(() => {
      return {
        position: numPosition3,
        height: numHeight3,
        width: numWidth3,
        top: numTop3,
        left: numLeft3,
      };
    }, [numPosition3, numHeight3, numWidth3, numTop3, numLeft3]);

    const page4Style = useMemo(() => {
      return {
        width: pageWidth4,
        position: pagePosition4,
        height: pageHeight4,
        flex: pageFlex4,
        display: pageDisplay4,
        flexDirection: pageFlexDirection4,
        padding: pagePadding3,
      };
    }, [
      pageWidth4,
      pagePosition4,
      pageHeight4,
      pageFlex4,
      pageDisplay4,
      pageFlexDirection4,
      pagePadding3,
    ]);

    const num4Style = useMemo(() => {
      return {
        position: numPosition4,
        height: numHeight4,
        width: numWidth4,
        top: numTop4,
        left: numLeft4,
      };
    }, [numPosition4, numHeight4, numWidth4, numTop4, numLeft4]);

    const pageIcon1Style = useMemo(() => {
      return {
        minHeight: pageIconMinHeight1,
      };
    }, [pageIconMinHeight1]);

    return (
      <div
        className="flex flex-row items-center justify-start gap-[0px_8px] text-center text-sm text-dark-grey-400 font-h5-d"
        style={paginationStyle}
      >
        <img
          className="w-8 relative rounded h-8 opacity-[0.5]"
          alt=""
          src="/page.svg"
          style={pageIconStyle}
        />
        <div className="w-8 relative h-8 text-steelblue-300" style={pageStyle}>
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-gray-0 box-border overflow-hidden border-[1px] border-solid border-steelblue-300"
            style={pageActiveStyle}
          >
            <img
              className="absolute h-3/4 w-9/12 top-[12.5%] right-[12.5%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/carat.svg"
              style={caratIconStyle}
            />
            <b
              className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_8px)] top-[5px] left-[4px] leading-[20px] inline-block"
              style={numStyle}
            >
              1
            </b>
          </div>
        </div>
        <div
          className="w-8 relative rounded bg-gray-0 box-border h-8 border-[1px] border-solid border-gainsboro-200"
          style={page1Style}
        >
          <b
            className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_8px)] top-[5px] left-[4px] leading-[20px] inline-block"
            style={num1Style}
          >
            2
          </b>
        </div>
        <div
          className="w-8 relative rounded bg-gray-0 box-border h-8 border-[1px] border-solid border-gainsboro-200"
          style={page2Style}
        >
          <b
            className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_8px)] top-[5px] left-[4px] leading-[20px] inline-block"
            style={num2Style}
          >
            ...
          </b>
        </div>
        <div
          className="w-8 relative rounded bg-gray-0 box-border h-8 border-[1px] border-solid border-gainsboro-200"
          style={page3Style}
        >
          <b
            className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_8px)] top-[5px] left-[4px] leading-[20px] inline-block"
            style={num3Style}
          >
            9
          </b>
        </div>
        <div
          className="w-8 relative rounded bg-gray-0 box-border h-8 border-[1px] border-solid border-gainsboro-200"
          style={page4Style}
        >
          <b
            className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_8px)] top-[5px] left-[4px] leading-[20px] inline-block"
            style={num4Style}
          >
            10
          </b>
        </div>
        <img
          className="w-8 relative rounded h-8"
          alt=""
          src="/page-1.svg"
          style={pageIcon1Style}
        />
      </div>
    );
  }
);

export default Pagination;
