import React, { useState } from 'react'

const ArrayObject = () => {
    const  movies = [
      { id: 1, name: "Movie1", year: 2020 },
      { id: 2, name: "Movie2", year: 2021 }
    ]
  const [movie,setMovies] = useState(movies)

  const handleAdd =  () => {
      const newArr = {id:3,name:"test2",year:2024};
  setMovies((prevMovies)=>[...prevMovies,newArr])  
  }

  const handleUpdate = () => {
    setMovies(movie.map((m) =>
      m.id === 1 ? { ...m, name: "updated" } : m 
    ));
  };

  const handleRemove =  () => {
setMovies((prevMovies)=>prevMovies.filter((filteredMovie)=>filteredMovie.id !== 1 ))

}



    return (
    <div>
<ul>{movie.map((m)=>(
    <li key={m.id}>{m.name}
    <button onClick={handleRemove}>Remove</button>   
    </li>
    
))}</ul>

    </div>
  )
}



export default ArrayObject

