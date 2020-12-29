import React from 'react'
import styles from './Dialogs.module.css'
import DialogsLink from './DialogsItem/DialogsLink'
import DialogsMessages from './DialogsItem/DialogsMessages'



const Dialogs = (props) => {
    return (
        <div className={styles.div}>
           <DialogsLink  name={props.names} styles={styles}/>
           <DialogsMessages messages={props.messages} styles={styles} />
        </div>
    );
}
export default Dialogs

