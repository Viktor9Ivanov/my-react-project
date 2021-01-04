import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, removePost } from './redux/state';
import { BrowserRouter } from "react-router-dom";



export let renderFunction = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter >
        <App state={state} addPost={addPost} removePost={removePost} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}