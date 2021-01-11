import React,  { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    let [text,setText] = useState('')
    return (
        <div className={styles.styles}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea value= {text} onChange={t =>setText(t.target.value)}>
                </textarea>                   
            </div>
            <div>
                <button onClick={() =>{ props.addPost(text) = setText('')}}>
                        Add post
                </button>
            </div>
            <div>
                {props.posts.map( p => {
                 return ( 
                    <div>
                        <Post key={p.id} message={p.message} 
                            img={p.img} />
                        <button  onClick={() =>{props.removePost(p.id)}}>
                            Remove post
                        </button>
                    </div>
                )})}
            </div>
        </div>
    );
}
export default MyPosts