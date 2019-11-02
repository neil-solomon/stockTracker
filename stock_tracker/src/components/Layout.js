import React from "react";
import ChartTest from "./ChartTest.js";
import ChartTest2 from "./ChartTest2.js";
import ChangeDataButton from "./ChangeDataButton.js";
import LineChart from "./LineChart.js";
//import json;

class Layout extends React.Component {
  state = {
    dataSet: [true, false],

    data: [
      { country: "USA", men: 125, women: 135, children: 100 },
      { country: "CAN", men: 35, women: 25, children: 15 },
      { country: "MEX", men: 95, women: 85, children: 60 }
    ],

    dataKeys: ["men", "women", "children"],

    lineData: [
      {
        id: "MSFT",
        color: "red",
        data: [
          { x: 1, y: 51 },
          { x: 2, y: 43 },
          { x: 3, y: 59 },
          { x: 4, y: 52 },
          { x: 5, y: 45 }
        ]
      },
      {
        id: "TSLA",
        color: "blue",
        data: [
          { x: 1, y: 41 },
          { x: 2, y: 33 },
          { x: 3, y: 69 },
          { x: 4, y: 57 },
          { x: 5, y: 39 }
        ]
      }
    ],

    keyCount: 3,

    countryInput: "",

    indexBy: "country"
  };

  styles = {
    width: "75vw"
  };

  componentDidMount() {
    //var countryInput = this.refs.countryInput.value;
    //this.setState({ countryInput });
  }

  handleOneUp = () => {
    //console.log("handleOneUp");
    var data = [...this.state.data];
    for (var i = 0; i < data.length; i++) {
      data[i]["men"] += 10;
    }
    this.setState({ data });
  };

  handleOneDown = () => {
    //console.log("handleOneDown");
    var data = [...this.state.data];
    for (var i = 0; i < data.length; i++) {
      data[i]["men"] -= 10;
    }
    this.setState({ data });
  };

  handleAddCountry = () => {
    var countryInput = this.inputCountryRef.value;
    var goodEntry = true;
    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i]["country"] == countryInput) {
        goodEntry = false;
      }
    }
    if (goodEntry) {
      var keyCount = this.state.keyCount + 1;
      var menInput = this.inputMenRef.value;
      var womenInput = this.inputWomenRef.value;
      var childrenInput = this.inputChildrenRef.value;
      var data = [...this.state.data];
      var dataKeys = [...this.state.dataKeys];

      data.push({
        country: countryInput,
        men: menInput,
        women: womenInput,
        children: childrenInput
      });
      dataKeys.push(countryInput);

      this.setState({ keyCount });
      this.setState({ data });
      this.setState({ dataKeys });
    }
  };

  handleRemoveLastCountry = () => {
    var keyCount = this.state.keyCount - 1;
    this.setState({ keyCount });

    var data = [...this.state.data];
    data.pop();
    this.setState({ data });

    var dataKeys = [...this.state.dataKeys];
    dataKeys.pop();
    this.setState({ dataKeys });
  };

  handleSwapData = () => {
    var data = [
      {
        player: "neil",
        "2013 wins": 9,
        "2014 wins": 11,
        "2015 wins": 10,
        "2016 wins": 6
      },
      {
        player: "mark",
        "2013 wins": 7,
        "2014 wins": 9,
        "2015 wins": 8,
        "2016 wins": 11
      },
      {
        player: "doni",
        "2013 wins": 8,
        "2014 wins": 6,
        "2015 wins": 12,
        "2016 wins": 9
      },
      {
        player: "chris",
        "2013 wins": 10,
        "2014 wins": 7,
        "2015 wins": 9,
        "2016 wins": 5
      }
    ];

    var dataKeys = ["2013 wins", "2014 wins", "2015 wins", "2016 wins"];

    this.setState({ data });
    this.setState({ dataKeys });
    this.setState({ indexBy: "player" });
  };

  render() {
    var tester = false;
    if (tester) {
      return (
        <div style={this.styles}>
          <ChangeDataButton
            name="Men Up!"
            type="primary"
            handleClick={this.handleOneUp}
          ></ChangeDataButton>
          <ChangeDataButton
            name="Men Down!"
            type="primary"
            handleClick={this.handleOneDown}
          ></ChangeDataButton>
          <ChangeDataButton
            name="Add Country!"
            type="secondary"
            handleClick={this.handleAddCountry}
          ></ChangeDataButton>
          <ChangeDataButton
            name="Remove Last Country!"
            type="secondary"
            handleClick={this.handleRemoveLastCountry}
          ></ChangeDataButton>
          <ChangeDataButton
            name="Swap Data!"
            type="danger"
            handleClick={this.handleSwapData}
          ></ChangeDataButton>

          {/*
					<ChangeDataButton
						name = "Get Data!"
						type = "primary"
						handleClick = {this.fetchData}
					></ChangeDataButton>
					*/}

          <div>
            Country:
            <input
              id="inputCountry"
              ref={n => (this.inputCountryRef = n)}
              type="text"
            ></input>
            Men:
            <input
              id="inputMen"
              ref={n => (this.inputMenRef = n)}
              type="text"
            ></input>
            Women:
            <input
              id="inputWomen"
              ref={n => (this.inputWomenRef = n)}
              type="text"
            ></input>
            Children:
            <input
              id="inputChildren"
              ref={n => (this.inputChildrenRef = n)}
              type="text"
            ></input>
          </div>

          <ChartTest2
            data={this.state.data}
            keys={this.state.dataKeys}
            indexBy={this.state.indexBy}
          ></ChartTest2>
        </div>
      );
    } else {
      return (
        <div>
          <LineChart data={this.state.lineData}></LineChart>
        </div>
      );
    }
  }
}

export default Layout;
