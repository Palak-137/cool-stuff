import React, { useState } from 'react'
import  './homepage.css'
import child from '../../constants/child.png'

const Homepage = () => {

  const [text,setText] = useState("");
  
  const handleChange = (e)=>{
    //console.log(e.target.value);
    setText( e.target.value)
  }
  var count=0;
 

  return (
    <>
    <div className='container home'>
      <input className='form-control text' name="text" placeholder="Enter text" type='text' onChange={e=>handleChange(e)}></input>
    </div>
        <section className="boxes p-5">
          <div className="container" id="card">
            <div className="col-lg-12">
              <div className="row">
                {
                text.split("").map(letter=>{
                  console.log(letter);
                  count++;

                  if(count%3===0){
                    return( 
                     
                    <div className="col-md-5 card card-hover changeShadow">
                    <div className="card-content">
                      {letter}
                      <img src={child} width="60px" height="60px" alt="image of child"></img>
                      </div>
                    </div>
                  )
                  }else{
                    return( 
                     
                      <div className="col-md-5 card box8 card-hover ">
                      <div className="card-content">
                        {letter}
                        <img src={child} width="60px" height="60px" alt="image of child"></img>
                        </div>
                      </div>
                    )
                  }
                    })}
                </div>
              </div>
            </div>
        </section>
  </>
  )
}

export default Homepage
