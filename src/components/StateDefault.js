import { memo, useMemo } from "react";

const StateDefault = memo(({ statusLabel, stateDefaultPosition }) => {
  const stateDefaultStyle = useMemo(() => {
    return {
      position: stateDefaultPosition,
    };
  }, [stateDefaultPosition]);

  return (
    <div
      className="w-20 bg-gray-0 box-border h-[25px] overflow-hidden text-left text-mini-3 text-black font-h5-d border-b-[1px] border-solid border-gainsboro-300"
      style={stateDefaultStyle}
    >
      <div className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_30px)]">
        {statusLabel}
      </div>
    </div>
  );
});

export default StateDefault;
