import React, { Component } from 'react';
import './App.css';
import InfoList from './InfoList';



class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

componentDidMount(){
  fetch('https://swapi.co/api/people')
  .then(response => response.json())
  .then(data => {this.setState({data: data.results})})
} 


  render() {
    const { data } = this.state;
    return (
      <div>
      <InfoList 
        data={data}
      />
      </div>
    );
  }
}

export default App;
