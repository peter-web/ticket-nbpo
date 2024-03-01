import { memo, useMemo } from "react";

const TypeNormal = memo(
  ({ statusType, typeNormalWidth, typeNormalHeight, normalFlex }) => {
    const typeNormalStyle = useMemo(() => {
      return {
        width: typeNormalWidth,
        height: typeNormalHeight,
      };
    }, [typeNormalWidth, typeNormalHeight]);

    const normalStyle = useMemo(() => {
      return {
        flex: normalFlex,
      };
    }, [normalFlex]);

    return (
      <div
        className="rounded-[40.37px] bg-lightgoldenrodyellow box-border h-[16.2px] overflow-hidden flex flex-row items-center justify-start py-[1.614937424659729px] px-[6.459749698638916px] text-center text-3xs-7 text-lime font-h5-d border-[0.8px] border-solid border-lime"
        style={typeNormalStyle}
      >
        <div
          className="relative leading-[12.92px] font-medium"
          style={normalStyle}
        >
          {statusType}
        </div>
      </div>
    );
  }
);

export default TypeNormal;
