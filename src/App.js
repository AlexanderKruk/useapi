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

async componentDidMount(){
  const resp = await fetch('https://swapi.co/api/people');
  const data = await resp.json();
  this.setState({data: data.results});
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
