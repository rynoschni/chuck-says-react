import React, { Component } from 'react';
import ChuckSays from './components/ChuckSays';
import './App.css';

class App extends Component {
  state = {
    chuckData: [],
  };

  loadData = async () =>{
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    return data;
  }

  handleClick = async () => {
    const chuckData = await this.loadData();
    
      this.setState({
        chuckData: chuckData,
      });
  }

  async componentDidMount(){
    const chuckData = await this.loadData();
    
      this.setState({
        chuckData: chuckData,
      });
    
  }

  render(){
    const { chuckData } = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Chuck Norris Quotes</h1>
      </header>
      <button onClick={this.handleClick}>Load more users</button>
      {this.state.chuckData ? (
        <ChuckSays chuckData={chuckData.value} />
      ):(
        <p> No User Data Loaded!</p>
      
      )}
      
    </div>
  );
  }
};

export default App;