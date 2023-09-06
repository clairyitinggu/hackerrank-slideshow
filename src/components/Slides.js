import React,{useState} from "react";


function Slides({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === slides.length - 1;


  const handleRestart = ()=>{
    setCurrentIndex(0);
  }

  const handlePrev = ()=>{
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
    }
  }

  const handleNext = ()=>{
    if(currentIndex < slides.length - 1 ){
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={handleRestart} disabled={isAtStart}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={handlePrev} disabled={isAtStart}>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={handleNext} disabled={isAtEnd}>
          Next
        </button>
      </div>
     
     
    
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentIndex].title}</h1>
        <p data-testid="text">{slides[currentIndex].text}</p>
      </div>
     
      
     
      
    </div>
  );
}

export default Slides;
