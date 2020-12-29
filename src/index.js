import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const names = {
  Aaaaa: '/dialogs/1',
  Bbbbb: '/dialogs/2',
  Ccccc: '/dialogs/3',
  Eeeee: '/dialogs/4',
  Fffff: '/dialogs/5'
}
const messages = {
  hi: 'Hi!',
  hi2: 'Hi hi !',
  hi3: 'Hi hi hi!',
  Yo: 'Yo !',
  Yo2: 'Yo yo !',
  Yo3: 'Yo yo yo!'
}
const posts = [
  { id: 1, message: 'Hi,how are you?', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2csVHl_EBoGPADSH-4tF2g6NFnhWKDp72MA&usqp=CAU' },
  { id: 2, message: 'It s my new first post', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYT4Qvc173e0aILWEmg0AYHzN16twSw7_NSg&usqp=CAU' }
]

ReactDOM.render(
  <React.StrictMode>
    <App names={names} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();
