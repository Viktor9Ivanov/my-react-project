import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  const imgAddress = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2csVHl_EBoGPADSH-4tF2g6NFnhWKDp72MA&usqp=CAU' 
    return (
        <div className={classes.styles}>
            My posts
            <div>
                New posts
            </div>
            <Post message='Hi,how are you?' img= {imgAddress}/>
            <Post message='It s my new first post' img= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYT4Qvc173e0aILWEmg0AYHzN16twSw7_NSg&usqp=CAU' />
        </div>
    );
}
export default MyPosts