import React from 'react';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartTest extends React.Component
{
	chartOptions = {
		responsive: "true",
	};

	render() {
		return(
			//<MDBContainer>
	        	<Line data={this.props.dataLine} options={this.chartOptions}/>
	    	//</MDBContainer>
		);
	}
};

export default ChartTest;