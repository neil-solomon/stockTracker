import React from "react";
import { ResponsiveLine } from "@nivo/line";

import "./chart.css";

class LineChart extends React.Component {
  render() {
    var markers;
    if (this.props.data.length > 0) {
      markers = [
        {
          axis: "x",
          anchor: "bottom-left",
          //value: this.props.data[0]["data"][49]["x"],
          lineStyle: { stroke: "#b0413e", strokeWidth: 0 },
          legend: "XXX"
        }
      ];
    }
    return (
      <div class="chart">
        <ResponsiveLine
          data={this.props.data}
          enablePoints={false}
          markers={markers}
          lineWidth={1}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", stacked: false, min: "auto", max: "auto" }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickValues: [],
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 45,
            legend: "Date",
            legendOffset: 36,
            legendPosition: "middle"
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Price",
            legendOffset: -40,
            legendPosition: "middle"
          }}
          //colors={{ scheme: "nivo" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 8,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        ></ResponsiveLine>
      </div>
    );
  }
}

export default LineChart;
