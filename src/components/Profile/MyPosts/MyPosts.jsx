import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    return (
        <div className={styles.styles}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                {props.posts.map( p => {
                 return   <Post key={p.message} message={p.message} 
                            img={p.img} />
                })}
            </div>
        </div>
    );
}
export default MyPosts