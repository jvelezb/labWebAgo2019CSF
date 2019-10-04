import React,{ Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import {  accion1 } from './actions/action1';
import { connect } from 'react-redux';

const mapearProps = dispatch => ({
  loquesea: () => dispatch(accion1())
});

const mapaerEstado = state =>({
  ...state
});

class App extends Component {

  saludar =  (event) => {
    this.props.loquesea();

  }


  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1> Practica Redux </h1>
          </header>
          <p>{JSON.stringify(this.props)}</p>
          <button onClick={this.saludar}> Test Action</button>
        </div>
    );
  }
}
export default connect(mapaerEstado,mapearProps )(App);
