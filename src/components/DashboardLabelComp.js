import { memo, useMemo } from "react";

const DashboardLabelComp = memo(
  ({
    dimensionsCode,
    showDashboard,
    property1DefaultAlignSelf,
    property1DefaultPadding,
    dashboardWidth,
    dashboardColor,
  }) => {
    const property1DefaultStyle = useMemo(() => {
      return {
        alignSelf: property1DefaultAlignSelf,
        padding: property1DefaultPadding,
      };
    }, [property1DefaultAlignSelf, property1DefaultPadding]);

    const dashboardStyle = useMemo(() => {
      return {
        width: dashboardWidth,
        color: dashboardColor,
      };
    }, [dashboardWidth, dashboardColor]);

    return (
      <div
        className="flex flex-row items-center justify-start gap-[0px_20px] text-left text-2xl text-azure font-h5-d"
        style={property1DefaultStyle}
      >
        <img
          className="w-[23.4px] relative h-[23.4px] overflow-hidden shrink-0"
          alt=""
          src={dimensionsCode}
        />
        {showDashboard && (
          <div className="relative" style={dashboardStyle}>
            Dashboard
          </div>
        )}
      </div>
    );
  }
);

export default DashboardLabelComp;
