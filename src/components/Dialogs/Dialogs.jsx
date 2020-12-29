import React from 'react'
import styles from './Dialogs.module.css'
import DialogsLink from './DialogsItem/DialogsLink'
import DialogsMessages from './DialogsItem/DialogsMessages'



const Dialogs = () => {
    const names = {
        Aaaaa: '/dialogs/1',
        Bbbbb: '/dialogs/2',
        Ccccc: '/dialogs/3',
        Eeeee: '/dialogs/4',
        Fffff: '/dialogs/5'
    }

    const messages = {
        hi:'Hi!',
        hi2:'Hi hi !',
        hi3:'Hi hi hi!',
        Yo:'Yo !',
        Yo2:'Yo yo !',
        Yo3:'Yo yo yo!'
    }

    return (
        <div className={styles.div}>
           <DialogsLink  name={names} styles={styles}/>
           <DialogsMessages messages={messages} styles={styles} />
            {/* <div>
                {Object.keys(messages).map(message => {
                    return(
                       <Message key ={message} message={messages[message]} /> 
                    )})}
            </div> */}
        </div>
    );
}
export default Dialogs

