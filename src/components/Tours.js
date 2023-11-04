import Card from './Card'

export default function Tours({tours, removeTour}){

    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>

            <div className="cards">

            {/* Instead of giving writing the Card 7 times and passing each tour data one by one we use map function 
            on the data we have gotten in the form of array ... which returns the Cards formed from the data of each tour they recived */}
                {                                        /* doing by this method is also helpful because in future when the tours will be altered cards will be formed properly */
                    tours.map((tour)=>{    
                        return(
                            <Card {...tour} removeTour={removeTour} key={tour.id}> </Card>   
                        );

                    })
                }
            </div>

        </div>
        

    );

}