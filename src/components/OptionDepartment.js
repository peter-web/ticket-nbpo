import { memo, useMemo } from "react";

const OptionDepartment = memo(
  ({
    optionDefaultSelectedNoAlignSelf,
    optionDefaultSelectedNoFlexWrap,
    optionDefaultSelectedNoRowGap,
    buttonWidth,
    buttonHeight,
    buttonFlex,
    buttonMinWidth,
    textAlignSelf,
    textHeight,
    buttonWidth1,
    buttonHeight1,
    buttonFlex1,
    buttonMinWidth1,
    textAlignSelf1,
    textHeight1,
    buttonWidth2,
    buttonHeight2,
    buttonFlex2,
    buttonMinWidth2,
    textAlignSelf2,
    textHeight2,
    buttonWidth3,
    buttonHeight3,
    buttonFlex3,
    buttonMinWidth3,
    textAlignSelf3,
    textHeight3,
  }) => {
    const optionDefaultSelectedNoStyle = useMemo(() => {
      return {
        alignSelf: optionDefaultSelectedNoAlignSelf,
        flexWrap: optionDefaultSelectedNoFlexWrap,
        rowGap: optionDefaultSelectedNoRowGap,
      };
    }, [
      optionDefaultSelectedNoAlignSelf,
      optionDefaultSelectedNoFlexWrap,
      optionDefaultSelectedNoRowGap,
    ]);

    const buttonStyle = useMemo(() => {
      return {
        width: buttonWidth,
        height: buttonHeight,
        flex: buttonFlex,
        minWidth: buttonMinWidth,
      };
    }, [buttonWidth, buttonHeight, buttonFlex, buttonMinWidth]);

    const textStyle = useMemo(() => {
      return {
        alignSelf: textAlignSelf,
        height: textHeight,
      };
    }, [textAlignSelf, textHeight]);

    const button1Style = useMemo(() => {
      return {
        width: buttonWidth1,
        height: buttonHeight1,
        flex: buttonFlex1,
        minWidth: buttonMinWidth1,
      };
    }, [buttonWidth1, buttonHeight1, buttonFlex1, buttonMinWidth1]);

    const text1Style = useMemo(() => {
      return {
        alignSelf: textAlignSelf1,
        height: textHeight1,
      };
    }, [textAlignSelf1, textHeight1]);

    const button2Style = useMemo(() => {
      return {
        width: buttonWidth2,
        height: buttonHeight2,
        flex: buttonFlex2,
        minWidth: buttonMinWidth2,
      };
    }, [buttonWidth2, buttonHeight2, buttonFlex2, buttonMinWidth2]);

    const text2Style = useMemo(() => {
      return {
        alignSelf: textAlignSelf2,
        height: textHeight2,
      };
    }, [textAlignSelf2, textHeight2]);

    const button3Style = useMemo(() => {
      return {
        width: buttonWidth3,
        height: buttonHeight3,
        flex: buttonFlex3,
        minWidth: buttonMinWidth3,
      };
    }, [buttonWidth3, buttonHeight3, buttonFlex3, buttonMinWidth3]);

    const text3Style = useMemo(() => {
      return {
        alignSelf: textAlignSelf3,
        height: textHeight3,
      };
    }, [textAlignSelf3, textHeight3]);

    return (
      <div
        className="flex flex-row items-start justify-start text-center text-5xl text-gray-0 font-h5-d"
        style={optionDefaultSelectedNoStyle}
      >
        <div
          className="w-[189px] bg-steelblue-300 h-[58px] flex flex-row items-start justify-center"
          style={buttonStyle}
        >
          <div
            className="self-stretch flex-1 relative font-medium flex items-center justify-center"
            style={textStyle}
          >
            IT
          </div>
        </div>
        <div
          className="w-[189px] bg-steelblue-300 h-[58px] flex flex-row items-start justify-center"
          style={button1Style}
        >
          <div
            className="self-stretch flex-1 relative font-medium flex items-center justify-center"
            style={text1Style}
          >
            HR
          </div>
        </div>
        <div
          className="w-[189px] bg-steelblue-300 h-[58px] flex flex-row items-start justify-center"
          style={button2Style}
        >
          <div
            className="self-stretch flex-1 relative font-medium flex items-center justify-center"
            style={text2Style}
          >
            Accounting
          </div>
        </div>
        <div
          className="w-[189px] bg-steelblue-300 h-[58px] flex flex-row items-start justify-center"
          style={button3Style}
        >
          <div
            className="self-stretch flex-1 relative font-medium flex items-center justify-center"
            style={text3Style}
          >
            Servicing
          </div>
        </div>
      </div>
    );
  }
);

export default OptionDepartment;
