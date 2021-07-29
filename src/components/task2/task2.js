import React from 'react'
import {Carousel} from '3d-react-carousal';
import "./task2.css"

function task2() {

    
    let slides = [
      
        <div className="container">  <img class="image" src="https://picsum.photos/800/300/?random" alt="1"></img><h2 className="centered">Image 1</h2></div>,
        <div className="container"><img class="image"  src="https://picsum.photos/800/303/?random" alt="2" /><h2 className="centered">Image 2</h2></div>  ,
        <div className="container"><img class="image" src="https://picsum.photos/800/304/?random" alt="3" /> <h2 className="centered">Image 3</h2></div> ,
        <div className="container"><img class="image" src="https://picsum.photos/800/302/?random" alt="4" /> <h2 className="centered">Image 4</h2></div> ,
        <div className="container"> <img class="image" src="https://picsum.photos/800/301/?random" alt="5" /><h2 className="centered">Image 5</h2></div>   ];
    return (
        <div className="main">
               <div> <Carousel slides={slides}/></div>
                <div className="video-responsive">
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    width="200" height="200" 
                        title='video'
                    />
            </div>
        </div>
    )
}

export default task2
