import React from "react";
import Tours from './components/Tours';
import data from './data'
import {useState} from 'react'




const App = () => {

  const [tours,setTour] = useState(data);     // to make the updated tours value update on UI

  function removeTour (id){                   // typical child to parent communication, Parent declared that it wants to do some action on (id) and it is with the 2nd level child, in 2nd level child the fuction is 
    const newTour = tours.filter((tour)=>{return tour.id !=id })
    setTour(newTour);
  }

  if (tours.length===0){
    return(
      <div className="refresh">
          <h2>No Tours left</h2>

          <button className="btn-white" onClick={()=>{setTour(data)}}>
            Refresh
          </button>

      </div>
    )
  }


  return (


    <div className="App">
          <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>


  );
};

export default App;
