import { memo, useMemo } from "react";

const StateDefaultSelectedNo = memo(
  ({
    textContent,
    stateDefaultSelectedNoWidth,
    stateDefaultSelectedNoHeight,
    stateDefaultSelectedNoFlex,
    stateDefaultSelectedNoMinWidth,
    textAlignSelf,
    textHeight,
  }) => {
    const stateDefaultSelectedNoStyle = useMemo(() => {
      return {
        width: stateDefaultSelectedNoWidth,
        height: stateDefaultSelectedNoHeight,
        flex: stateDefaultSelectedNoFlex,
        minWidth: stateDefaultSelectedNoMinWidth,
      };
    }, [
      stateDefaultSelectedNoWidth,
      stateDefaultSelectedNoHeight,
      stateDefaultSelectedNoFlex,
      stateDefaultSelectedNoMinWidth,
    ]);

    const text4Style = useMemo(() => {
      return {
        alignSelf: textAlignSelf,
        height: textHeight,
      };
    }, [textAlignSelf, textHeight]);

    return (
      <div
        className="bg-steelblue-300 h-[58px] flex flex-row items-start justify-center text-center text-5xl text-gray-0 font-h5-d flex-1"
        style={stateDefaultSelectedNoStyle}
      >
        <div
          className="self-stretch flex-1 relative font-medium flex items-center justify-center"
          style={text4Style}
        >
          {textContent}
        </div>
      </div>
    );
  }
);

export default StateDefaultSelectedNo;
