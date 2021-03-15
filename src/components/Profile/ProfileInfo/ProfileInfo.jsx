import React from 'react'
import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div className={styles.images}>
        <img src='https://img.freepik.com/free-vector/vector-images-forest-daytime_46176-155.jpg?size=626&ext=jpg&ga=GA1.2.1571184816.1602547200' alt='Profile images' />
      </div>
      <div className={styles.ava}>
        ava+discription
      </div>
    </div>
  )
}

export default ProfileInfo