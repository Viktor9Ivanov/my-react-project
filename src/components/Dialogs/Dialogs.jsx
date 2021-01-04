import React from 'react'
import styles from './Dialogs.module.css'
import DialogsLink from './DialogsItem/DialogsLink'
import DialogsMessages from './DialogsItem/DialogsMessages'



const Dialogs = (props) => {
    
    return (
        <div className={styles.div}>
           <DialogsLink  name={props.state.names} styles={styles}/>
           <DialogsMessages messages={props.state.messages} styles={styles} />
        </div>
    );
}
export default Dialogs

