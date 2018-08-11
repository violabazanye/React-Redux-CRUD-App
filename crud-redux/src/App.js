import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPosts from './AllPosts';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Hey there! Welcome.</h1>
        <div className="row">
          <div className="col-8"><AllPosts /></div>
          <div className="col-4"><PostForm /></div>
        </div>       
      </div>
    );
  }
}

export default App;
