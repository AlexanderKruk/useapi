import React, { Component } from 'react';
import './App.css';
import InfoList from './InfoList';

class App extends Component {
  constructor(){
    super()
    this.state = {
      people: [],
      planets: [],
      starships: []
    }
  }

async componentDidMount(){
  const urls = [
    'https://swapi.co/api/people',
    'https://swapi.co/api/planets',
    'https://swapi.co/api/starships'
  ]
  const [ people, planets, starships ] = await Promise.all(urls.map(async function (url){
    const resp = await fetch(url);
    const data = await resp.json();
    return data.results;
  }));
  // await fetch('https://swapi.co/api/people');
  // const data = await resp.json();
  this.setState({people: people, planets: planets, starships: starships});
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
