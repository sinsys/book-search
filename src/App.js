import React, { Component } from 'react';
import './App.css';

import CountrySelector from './components/CountrySelector/CountrySelector';
import Demonym from './components/Demonym/Demonym';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    }
  };

  setSelected(selected) {
    this.setState({
      selected
    });
  }

  componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong')
        }
        return res;
      })
      .then(res => (
        res.json()
      ))
      .then(data => {
        const countries = Object.keys(data)
          .map(key => data[key].item[0]);
        this.setState({
          countries,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  render(){
    const demonym = this.state.selected
      ? <Demonym
          name={this.state.selected['citizen-names']}
          country={this.state.selected.name}
        />
      : <div
          className="demonym_app__placeholder"
        >
          Select a country above
        </div>;
    const error = this.state.error
      ? <div
          className="demonym_app__error"
        >
          {this.state.error}
        </div>
      : " ";
    return (
      <div className="App">
        {error}
        <CountrySelector
          countries={this.state.countries}
          changeHandler={selected => this.setSelected(selected)}
        />
        {demonym}
      </div>
    );    
  }
}

export default App;
