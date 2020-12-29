import React from 'react'

const DialogsMessages = (props) =>{
  return (
      <div>
        {Object.keys(props.messages).map(message => {
            return(
              <div className={props.styles}>{message}</div>
                )})}
      </div>
  )
}

export default DialogsMessages
