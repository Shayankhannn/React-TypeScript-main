import React from 'react'
import { createPortal } from 'react-dom'


const ComponentPopup = ({copied}) => {
  return createPortal(
    <div>

{copied && (
    <div>Copied To ClipBoard</div>
)}

    </div>,document.querySelector('#popup-content')
  )
}

export default ComponentPopup