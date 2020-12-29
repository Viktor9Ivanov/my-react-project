import React from 'react'

const DialogsMessages = (props) =>{
  return (
      <div >
        {Object.keys(props.messages).map(m => {
            return(
              <div key={m} className={props.styles}>{m}</div>
                )})}
      </div>
  )
}

export default DialogsMessages
