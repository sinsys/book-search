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

  setShowAddForm(show) {
    this.setState({
      showAddForm: show
    });
  }

  addBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
      showAddForm: false
    })
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
      ? <AddBookmark 
          showForm={show => this.setShowAddForm(show)}
          handleAdd={bookmark => this.addBookmark(bookmark)}
        />
      : <BookmarkApp
          bookmarks={this.state.bookmarks}
          showForm={show => this.setShowAddForm(show)}
        />
    return (
      <div className="App">
        {page}
      </div>
    );    
  }

}

export default App;


