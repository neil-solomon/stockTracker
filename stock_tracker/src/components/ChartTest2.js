import React from "react";
import { ResponsiveBar } from "@nivo/bar";

import data from "./data.js";
import config from "./config.js";

import "./chart.css";

class ChartTest2 extends React.Component {
  render() {
    return (
      <div class="chart">
        <ResponsiveBar
          /*data={[
            { country: "USA", men: 125, women: 135, children: 100 },
            { country: "CAN", men: 35, women: 25, children: 15 },
            { country: "MEX", men: 95, women: 85, children: 60 }
          ]}*/
          data={this.props.data}
          keys={["men", "women", "children"]}
          indexBy={this.props.indexBy}
          margin={config.margin}
          padding={0.3}
          colors="nivo"
          colorBy="id"
          //defs={config.defs}
          //fill={config.fill}
          borderColor="inherit:darker(1.6)"
          colors={{ scheme: "spectral" }}
          axisTop={null}
          axisRight={null}
          axisBottom={config.axisBottom}
          axisLeft={config.axisLeft}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="inherit:darker(1.6)"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={config.legends}
        />
      </div>
    );
  }
}

export default ChartTest2;
