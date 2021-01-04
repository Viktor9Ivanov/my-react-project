import { renderFunction } from '../render'

let state = {
  profilePage: {
    posts: [
      { id: 0, message: 'Hi,how are you?', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2csVHl_EBoGPADSH-4tF2g6NFnhWKDp72MA&usqp=CAU' },
      { id: 1, message: 'It s my new first post', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYT4Qvc173e0aILWEmg0AYHzN16twSw7_NSg&usqp=CAU' }
    ]
  },
  dialogsPage: {
    names: {
      Aaaaa: '/dialogs/1',
      Bbbbb: '/dialogs/2',
      Ccccc: '/dialogs/3',
      Eeeee: '/dialogs/4',
      Fffff: '/dialogs/5'
    },
    messages: {
      hi: 'Hi!',
      hi2: 'Hi hi !',
      hi3: 'Hi hi hi!',
      Yo: 'Yo !',
      Yo2: 'Yo yo !',
      Yo3: 'Yo yo yo!'
    }
  },
}
export let addPost = (postMessage) => {
  let newPost = {
    id: state.profilePage.posts.length,
    message: postMessage,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYT4Qvc173e0aILWEmg0AYHzN16twSw7_NSg&usqp=CAU'
  }
  state.profilePage.posts.push(newPost)
  renderFunction(state)
}
export let removePost = (postId) => {
  delete state.profilePage.posts[postId]
  renderFunction(state)
}

export default state