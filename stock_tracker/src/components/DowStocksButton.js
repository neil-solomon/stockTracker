import React from "react";
import { Button } from "antd";

class DowStocksButton extends React.Component {
  state = {
    hover: false
  };

  styles1 = {
    background: "rgb(255,0,0,.1)",
    color: "rgb(0,0,255,.7)",
    border: "2px solid rgb(255,0,0,.2)",
    margin: "1px",
    fontWeight: "bold"
  };

  styles2 = {
    background: "rgb(255,0,0,.1)",
    color: "rgb(0,0,255,.8)",
    border: "2px solid rgb(255,0,0,.4)",
    margin: "1px",
    fontWeight: "bold"
  };

  styles3 = {
    background: "rgb(255,0,0,.2)",
    color: "rgb(0,0,255,.8)",
    border: "2px solid rgb(255,0,0,.4)",
    margin: "1px",
    fontWeight: "bold"
  };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
    //console.log("hover");
  };

  render() {
    var styles = this.styles1;
    if (this.state.hover && !this.props.activated) {
      styles = this.styles2;
    } else if (this.props.activated) {
      styles = this.styles3;
    }

    return (
      <Button
        style={styles}
        size="small"
        type="primary"
        onMouseEnter={() => this.toggleHover()}
        onMouseLeave={() => this.toggleHover()}
        onClick={() => this.props.handleClick(this.props.id, this.props.name)}
      >
        {this.props.name}
      </Button>
    );
  }
}

export default DowStocksButton;
