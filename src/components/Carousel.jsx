import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [currIndex,setIndex] = useState(0)
    const DecreaseCount =()=>{
        if (currIndex == 0) {
            setIndex(images.length - 1)
        }
        else{setIndex(currIndex - 1)}
    }
    const IncreaseCount =()=>{
        if (currIndex == (images.length - 1)) {
            setIndex(0)
        }
        else{setIndex(currIndex + 1)}
    }
    
    return (
        <>
            <h1>Carousel</h1>
            <div className="carousel-container flex">
                <div className="left-arrow arrowDiv flex" onClick={DecreaseCount}>
                    <ArrowBackIosIcon/> 
                </div>
                <h2 className="title">{images[currIndex].title}</h2>
                <img src={images[currIndex].img} alt="" />
                <h4 className="subtitle">{images[currIndex].subtitle}</h4>
                <div className="right-arrow arrowDiv flex" onClick={IncreaseCount}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
        </>
    )
}

export default Carousel;