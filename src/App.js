import React, { Component } from 'react';
import './App.css';

import AddBookmark from './components/AddBookmark/AddBookmark';
import BookmarkApp from './components/BookmarkApp/BookmarkApp';

import KEY from './KEY';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  componentDidMount() {
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${KEY}`
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong');
        }
        return res;
      })
      .then(res => (
        res.json()
      ))
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    const page = this.state.showAddForm
      ? <AddBookmark />
      : <BookmarkApp
          bookmarks={this.state.bookmarks}
        />
    return (
      <div className="App">
        {page}
      </div>
    );    
  }

}

export default App;


