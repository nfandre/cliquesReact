import React from 'react';
import './App.css';

class Count extends React.Component {
  constructor(props){
    super(props);
	  this.state = {
	  	cookie:0,
		fogao:0,
		vovo:0,
		cliques:1
	  };
	this.clique  = this.clique.bind(this);
	this.comprarFogao = this.comprarFogao.bind(this);

  }
  clique(e){
  	this.setState({
		cookie: this.state.cookie + this.state.cliques
	});
  }
  comprarFogao(e){
     this.setState({
     	cookie: this.state.cookie - 50,
	fogao: this.state.fogao + 1,
	clique: this.state.cliques + 1
     });
  }
  render(){
  return (
    <div className="Count">
	 
	<h1 onClick={this.clique} >Cookie: {this.state.cookie}</h1>
	<h1> Fogao(50cookies): {this.state.fogao}</h1>
	<h1 onCLick={this.comprarFogao} > comprar</h1>
	<h1> vóvó </h1>
		<button> comprar</button>
    </div>
  
  );
  }
}
export default Count;
