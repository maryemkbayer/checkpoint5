import React, {Component} from "react";


class Box extends Component{
	render() {
			const images = {
				height: '400px',
				width: '300px',
				marginLeft: '30px',
			};
			const popo={
				
					marginLeft: '30px',
					fontFamily: 'Courier New, Courier, monospace',
					fontSize:'30px',
				  
			}
		return(
			
			<div className="Box">
				<img style={images} src={this.props.img}/>
				<p style={popo}>{this.props.name}</p>
			</div>

		);
	}
}

export default Box;