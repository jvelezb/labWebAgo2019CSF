import React from 'react';

class Evento2 extends React.Component{
	 constructor(props){
	    super(props);
	    this.state ={
	    	cuenta: 0
	    };
	    this.incremento = this.incremento.bind(this);
	  }

	  incremento(e){
	  	var temp = this.state.cuenta;
	  	console.log(e.target.id);
	  	if(e.target.id=="b1"){
	  			if(e.shiftKey){
			  		temp +=10;
			  	} else{
			  		temp += 1;
			  	}
			  }else{

			  	if(e.shiftKey){
			  		temp -=10;
			  	} else{
			  		temp -= 1;
			  	}

			  }
	  
	  	this.setState(
	  		{
	  			cuenta: temp
	  		});
	  }


	render(){
		return(
			<div>
			<h1>{this.state.cuenta}</h1>
			<button onClick={this.incremento} id="b1"> + </button>
			
			<button onClick={this.incremento} id="b2"> - </button>
			</div>
			);
	}

}
export default Evento2;
