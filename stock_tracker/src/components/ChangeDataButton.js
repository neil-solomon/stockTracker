import React from 'react';
import { Button, Tooltip } from 'antd';

class ChangeDataButton extends React.Component
{
	styles = {
		color: "rgb(100,100,100,1)",
		fontWeight: "bold",
		border: "5px solid blue"
	};

	render(){
		return(
			<Button
				//style = {this.styles}
				size = "large"
				type = {this.props.type}
				onClick = {()=>this.props.handleClick()}
			>
				{this.props.name}
			</Button>
		);
	}
};

export default ChangeDataButton;

