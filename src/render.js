import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, removePost } from './redux/state';
import { BrowserRouter as Router, Switch } from "react-router-dom";



export let renderFunction = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router >
        <Switch>
          <App state={state} addPost={addPost} removePost={removePost} />
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  )
}