import React from 'react';
import './App.css';

class Count extends React.Component {
  constructor(props){
    super(props);
	  this.state = {
	  	cookie:0,
		fogao:0
	  };
	this.clique  = this.clique.bind(this);

  }
  clique(e){
  	this.setState({
		cookie: this.state.cookie+1
	});
  }
  
  render(){
  return (
    <div className="Count">
	 
      <h1 onClick={this.clique} >Cookie: {this.state.cookie}</h1>
    </div>
  
  );
  }
}
export default Count;
