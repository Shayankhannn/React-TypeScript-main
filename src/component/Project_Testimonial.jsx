import React, { useState } from 'react'

const Project_Testimonial = () => {
  
    const [ currentIndex,setCurrentIndex] = useState(0)

    const quotes = [
        { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
        { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
        { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "Do not watch the clock. Do what it does. Keep going.", author: "Sam Levenson" },
        { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
        { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
        { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" }
      ];
  

      const handlePrev = ()=>{
        setCurrentIndex((currentIndex + quotes.length - 1) % quotes.length )
      }

      const handleNext = ()=>
        setCurrentIndex((currentIndex + 1)  % quotes.length)
    
    return (
    <div>

<h1>{quotes[currentIndex].quote}</h1>
<h4>{quotes[currentIndex].author}</h4>

<button onClick={handleNext}>Next</button>
<button onClick={handlePrev}>Prev</button>

    </div>
  )
}

export default Project_Testimonial