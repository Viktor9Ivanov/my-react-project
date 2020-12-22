import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div className={classes.images}>
                <img src='https://img.freepik.com/free-vector/vector-images-forest-daytime_46176-155.jpg?size=626&ext=jpg&ga=GA1.2.1571184816.1602547200' alt='Profile images' />
            </div>
            <div className={classes.ava}>
                ava+discription
            </div>
            <MyPosts />
        </div>
    );
}
export default Profile