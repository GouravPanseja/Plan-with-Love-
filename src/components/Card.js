import {useState} from 'react';

export default function Card({id, image, info ,price,name , removeTour}){

    const [readmore, setReadmore] = useState(false);   {/* so that we can change the text visible on UI too when its value will get true on being clicked upon and reverse also */}

    const description = `${info.substring(0,200)}....`;    {/* Extracting substring of first 200 characters*/}

    function readmoreHandler(){
        setReadmore(!readmore);   { /*switching the value of readmore between true and false on being clicked */}
    }

    return(
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">

                <div className="tour-details">
                    <h4 className="tour-price">&#8377; {price}</h4>
                    <h4 classNmae="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {readmore ? info : description}


                    <span className="read-more" onClick={readmoreHandler}>

                        {readmore ? ' Show less' :' Read more' }    {/* if readmore is true return 'show less' else return 'read more'.....ternary operator are basically javascript functions therefore, we need to put it it{} */}
                                                {/*as readmore is a State function we the content re-renders when its state changes */}
                    </span>            
                    
                </div>
            </div> 

            <button className="btn-red" onClick={()=>{ removeTour(id);}}>   {/* we called a function that in turn calls the remove Tour function because we also wanted to pass the "id" argument which wouldn't have been possibel with onClick=removeTour(id)  <---- this would be wrong */}
                Not Interested
            </button>   {/*on clicking the perticular tour will be removed from the Tours data and as Tours is a State variable it will cause re-rendering and all other cads will be there except the click one */}
        </div>  ); 
        {/* since the data needs to be removed from the Tours data we need to go to the app.js file where we had all the Tours data and define the function there */}
    
}