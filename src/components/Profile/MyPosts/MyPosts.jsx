import React, { useState } from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    let [text, setText] = useState('')
    return (
        <div className={styles.styles}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea value={text} onChange={t => setText(t.target.value)} />
            </div>
            <button onClick={() => { props.addPost(text); setText('') }}>
                Add post
            </button>
            <div>
                {props.posts.map(p => {
                    return (
                        <div key={p.id}>
                            <Post message={p.message} img={p.img} />
                            <br />
                            <button onClick={() => { props.removePost(p.id) }}>
                                Remove post
                            </button>
                            <br /><br />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MyPosts