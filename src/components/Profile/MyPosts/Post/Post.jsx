import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={classes.images}>
                <img src={props.img} alt='Post images' />
            </div>
            {props.message}
        </div>
    );
}
export default Post