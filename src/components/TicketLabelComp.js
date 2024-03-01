import { memo, useMemo } from "react";

const TicketLabelComp = memo(
  ({
    dimensions,
    showTicketRequest,
    property1DefaultAlignSelf,
    property1DefaultPadding,
    ticketRequestColor,
    ticketRequestWidth,
  }) => {
    const property1Default1Style = useMemo(() => {
      return {
        alignSelf: property1DefaultAlignSelf,
        padding: property1DefaultPadding,
      };
    }, [property1DefaultAlignSelf, property1DefaultPadding]);

    const ticketRequestStyle = useMemo(() => {
      return {
        color: ticketRequestColor,
        width: ticketRequestWidth,
      };
    }, [ticketRequestColor, ticketRequestWidth]);

    return (
      <div
        className="flex flex-row items-center justify-start gap-[0px_20px] text-left text-2xl text-gray-0 font-h5-d"
        style={property1Default1Style}
      >
        <img
          className="w-[23.4px] relative h-[23.4px] overflow-hidden shrink-0"
          alt=""
          src={dimensions}
        />
        {showTicketRequest && (
          <div className="relative" style={ticketRequestStyle}>
            Ticket Request
          </div>
        )}
      </div>
    );
  }
);

export default TicketLabelComp;
