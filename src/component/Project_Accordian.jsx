    import { useState } from 'react'

    const Project_Accordian = ({title, content}) => {

    const [isActive,setisActive] = useState(false)

    return (
        <div key={Math.random()*100}>
    <div className="head" onClick={()=>setisActive(!isActive)}>

    {title}
    <p>{isActive ? '-' : '+'}</p>
    </div>
    <div className="body">

    {isActive && <p>{content}</p>}

    </div>


        </div>
    )
    }

    export default Project_Accordian