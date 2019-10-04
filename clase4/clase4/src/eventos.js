import React from 'react';


 class Eventos extends React.Component{

 	constructor(props){
 		super(props);
 		this.state= {
 			tiempos: 0
 		};
 		this.cambios = this.cambios.bind(this);
 	}

 	cambios(){
 		this.setState({
 			tiempos: this.state.tiempos + 100
 		});
 		//this.props.valor = this.props.valor +10;
 	}

 	componentDidMount(){
 		setInterval(this.cambios, 1000);
 	}


 	render(){
 		var textStyle ={
 			 fontSize: 72,
          	fontFamily: "sans-serif",
          	color: "#333",
          	fontWeight: "bold"
 		 };

 		return(
 			<div style={textStyle}>
 					 {this.state.tiempos} 
 					 -
 					 {this.props.valor}
 			</div>
 		);
 	}



}

export default Eventos;