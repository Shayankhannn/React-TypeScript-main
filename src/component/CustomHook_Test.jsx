    import React from 'react'
    import useFetch from './CustomHook_Data'


    const CustomHook_Test = () => {

    const [Data] = useFetch("https://jsonplaceholder.typicode.com/todos/")
        return (
        <div>

    {/* {Data && Data.map((Data)=>{
        return <p key={Data.id}>{Data.title}</p>
    })} */}

{Data && Data.length>0 && <p><b>Custom Hook Data Fetched :  </b>{Data[77].title}</p> }

        </div>
    )
    }

    export default CustomHook_Test