import React from "react";
import "./Carousel.css"

class Carousel extends React.Component{
    render(){
        return(
        <div className="carousel">
                <img src="/images/carousel.png" alt="carousel_image" className="carousel_img"/>
                <ul className="carousel_text">
                <li className="carousel_text1">YOUR&nbsp;FUL&nbsp;LINE</li>
                <li className="carousel_text2">FASTENER&nbsp;HOUSE</li>
                </ul>
</div>
        )
    }

}
export default Carousel;