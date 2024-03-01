import { memo, useMemo } from "react";

const SubmitButton = memo(
  ({
    ticketActionLabel,
    actionButtonText,
    typeDefaultBackgroundColor,
    typeDefaultPadding,
    typeDefaultAlignSelf,
    taskCompletedIconMinHeight,
    closeTicketDisplay,
    closeTicketFontSize,
    onSubmitButtonContainerClick,
  }) => {
    const typeDefaultStyle = useMemo(() => {
      return {
        backgroundColor: typeDefaultBackgroundColor,
        padding: typeDefaultPadding,
        alignSelf: typeDefaultAlignSelf,
      };
    }, [typeDefaultBackgroundColor, typeDefaultPadding, typeDefaultAlignSelf]);

    const taskCompletedIconStyle = useMemo(() => {
      return {
        minHeight: taskCompletedIconMinHeight,
      };
    }, [taskCompletedIconMinHeight]);

    const closeTicketStyle = useMemo(() => {
      return {
        display: closeTicketDisplay,
        fontSize: closeTicketFontSize,
      };
    }, [closeTicketDisplay, closeTicketFontSize]);

    return (
      <div
        className="rounded-[6.45px] box-border overflow-hidden flex flex-row items-center justify-start py-[5.656579971313477px] px-[11.313159942626953px] gap-[0px_6.45px] text-left text-base-1 text-steelblue-300 font-h5-d self-stretch border-[2px] border-solid border-steelblue-300"
        style={typeDefaultStyle}
        onClick={onSubmitButtonContainerClick}
      >
        <img
          className="w-5 relative h-5 object-cover"
          alt=""
          src={ticketActionLabel}
          style={taskCompletedIconStyle}
        />
        <b className="relative" style={closeTicketStyle}>
          {actionButtonText}
        </b>
      </div>
    );
  }
);

export default SubmitButton;
