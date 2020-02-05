import React, { Component } from 'react';
import './App.css';

import AddBookmark from './components/AddBookmark/AddBookmark';
import BookmarkApp from './components/BookmarkApp/BookmarkApp';

import BOOKMARKS from './BOOKMARKS';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <AddBookmark />
        <BookmarkApp
          bookmarks={ BOOKMARKS }
        />
      </div>
    );    
  }

}

export default App;
