import React from "react";
import LineChart from "./LineChart.js";
import stockPrices from "./data/dowPrices_2019-11-01.json";
import DowStocksButton from "./DowStocksButton.js";

class DowStocks extends React.Component {
  state = {
    lineData: [],
    activeLineData: []
  };

  componentDidMount() {
    var stockPriceData = stockPrices;
    console.log(stockPriceData);
    var lineData = [];
    var oldLineData = [];
    for (let i = 0; i < stockPriceData.length; i++) {
      var firm = {};
      var firmData = [];
      firm["idNumber"] = i;
      firm["id"] = stockPriceData[i]["symbol"];
      firm["name"] = stockPriceData[i]["name"];
      firm["active"] = false;
      firm["color"] = "hsl(150,50%,50%)";
      for (let j = 0; j < stockPriceData[i]["days"].length; j++) {
        var dayData = {};
        dayData["x"] = stockPriceData[i]["days"][j];
        dayData["y"] = stockPriceData[i]["prices"][j];
        firmData.push(dayData);
      }
      firm["key"] = i;
      firm["data"] = firmData;
      lineData.push(firm);
      oldLineData.push(false);
    }
    this.setState({ lineData });
    this.setState({ oldLineData });
  }

  toggleActiveFirms = (idNumber, id) => {
    var lineData = [...this.state.lineData];
    var activeLineData = [...this.state.activeLineData];

    lineData[idNumber]["active"] = !lineData[idNumber]["active"];

    if (lineData[idNumber]["active"]) {
      activeLineData.push(lineData[idNumber]);
    } else {
      for (let i = 0; i < activeLineData.length; i++) {
        if (activeLineData[i]["name"] == id) {
          activeLineData.splice(i, 1);
        }
      }
    }
    this.setState({ lineData });
    this.setState({ activeLineData });
  };

  render() {
    return (
      <div>
        {this.state.lineData.map(firm => (
          <DowStocksButton
            id={firm["idNumber"]}
            name={firm["name"]}
            activated={firm["active"]}
            handleClick={this.toggleActiveFirms}
          ></DowStocksButton>
        ))}
        <LineChart data={this.state.activeLineData}></LineChart>
      </div>
    );
  }
}

export default DowStocks;
