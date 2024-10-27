import { ChartDuration } from "@/enums";
import {
  AreaData,
  createChart,
  ColorType,
  CrosshairMode,
  LineStyle,
} from "lightweight-charts";
import { useRef, useEffect } from "react";

export default function LineChartSeries({
  data,
  duration,
}: {
  duration: ChartDuration;
  data: AreaData[];
}) {
  const backgroundColor = "transparent";
  const lineColor = "rgba(81,85,166,0.5)";
  const textColor = "rgb(111, 113, 131)";
  const areaTopColor = "rgba(81,85,166,0.6)";
  const areaBottomColor = "rgba(81,85,166,.02)";

  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef?.current?.clientWidth });
    };

    const chart = createChart(chartContainerRef.current as HTMLElement, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        attributionLogo: false,
        textColor,
      },
      width: chartContainerRef?.current?.clientWidth,
      height: 300,
      crosshair: {
        // Allows the crosshair to move freely without snapping to datapoints
        mode: CrosshairMode.Normal,
        // Vertical crosshair line (showing Date in Label)
        vertLine: {
          width: 4,
          color: areaTopColor,
          style: LineStyle.Solid,
          labelBackgroundColor: lineColor,
        },
        // Horizontal crosshair line (showing Price in Label)
        horzLine: {
          color: "#9B7DFF",
          labelBackgroundColor: lineColor,
        },
      },
      grid: { horzLines: { visible: false }, vertLines: { visible: false } },
    });
    chart.timeScale().fitContent();
    chart.timeScale().applyOptions({
      timeVisible: true,
      borderColor: "transparent",
      secondsVisible: false,
    });

    chart.priceScale("right").applyOptions({
      borderColor: "transparent",
    });

    const lineSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    lineSeries.setData(data);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
    duration,
  ]);

  return <div ref={chartContainerRef} />;
}
