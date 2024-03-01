import { memo, useCallback } from "react";
import OptionDepartment from "./OptionDepartment";
import SelectUserDropDown from "./SelectUserDropDown";

const ReassignTicket1 = memo(() => {
  const onSubmitButtonContainerClick = useCallback(() => {
    // Please sync "Section 1" to the project
  }, []);

  return (
    <div className="w-[776px] rounded-3xs bg-gray-0 overflow-hidden flex flex-col items-end justify-start p-2.5 box-border gap-[10px_0px] max-w-full max-h-full text-left text-20xl-1 text-black font-h5-d">
      <div className="self-stretch flex flex-row items-start justify-start p-2.5 gap-[0px_9px] border-b-[3px] border-solid border-steelblue-200">
        <div className="flex-1 relative">Reassign Ticket</div>
        <img
          className="w-[30px] relative h-[30px] object-cover"
          alt=""
          src="/close@2x.png"
        />
      </div>
      <div className="self-stretch relative text-12xl-3">Department</div>
      <OptionDepartment
        optionDefaultSelectedNoAlignSelf="stretch"
        optionDefaultSelectedNoFlexWrap="unset"
        optionDefaultSelectedNoRowGap="unset"
        buttonWidth="unset"
        buttonHeight="58px"
        buttonFlex="1"
        buttonMinWidth="unset"
        textAlignSelf="stretch"
        textHeight="unset"
        buttonWidth1="unset"
        buttonHeight1="58px"
        buttonFlex1="1"
        buttonMinWidth1="unset"
        textAlignSelf1="stretch"
        textHeight1="unset"
        buttonWidth2="unset"
        buttonHeight2="58px"
        buttonFlex2="1"
        buttonMinWidth2="unset"
        textAlignSelf2="stretch"
        textHeight2="unset"
        buttonWidth3="unset"
        buttonHeight3="58px"
        buttonFlex3="1"
        buttonMinWidth3="unset"
        textAlignSelf3="stretch"
        textHeight3="unset"
      />
      <SelectUserDropDown
        property1DefaultMinHeight="unset"
        property1DefaultHeight="59px"
        frameDivFlexWrap="unset"
        selectUserMinWidth="unset"
      />
      <div
        className="rounded-[8.18px] bg-steelblue-300 overflow-hidden flex flex-row items-center justify-start py-[16.363636016845703px] px-[40.90909194946289px] cursor-pointer text-xl-5 text-gray-0 border-[0.8px] border-solid border-gray-0"
        onClick={onSubmitButtonContainerClick}
      >
        <b className="relative">Done</b>
      </div>
    </div>
  );
});

export default ReassignTicket1;
