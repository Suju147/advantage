import React from 'react';
import data from './data';

function structure() {



    const result=data.map((item)=>{
        return(
            <div className="item" id={item.id}>
                <img src={item.src}/>
                <div className="wrapper"><h2 className="heading">{item.heading}</h2>
                <div className="rating"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                </div>
                <div className="wrapper">
                    <div className="icon"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                    <button className="btn"><a href={item.src} target="_blank">Buy Now</a></button></div>
            </div>)

       
    })

    return (
        <div className="container">
            {result}
        </div>
    )
}

export default structure;
