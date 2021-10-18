import React from "react"
import axios from "axios"
import { useState } from "react";
 const Entry = (props) => {

    const [ gotImage , setGotImage] = useState();
    const[ num , setNum] = useState(1);
    const[ num2 , setNum2] = useState(num)
    const fetchImage = () => {
        axios.get("https://api.unsplash.com/search/photos/?client_id=j771nZfmeKXo3gHKQ63Tk_gmAgrsnQMH0xki8sYhm0o&page=1&query=house")
        .then((res) => {
            setGotImage(res.data.results[num].urls.raw);
        })
        .catch((err) => {
            console.error(err);
        })
    };
    function numInc() {
        setNum(num+1)
    }
    function numDec() {
        setNum2(num-1)
    }
  fetchImage();
  
    return (
        <div  className="imageContainer">
        <button className="btn3" onClick={numDec}>See Prev «</button>
        <button className="btn1" onClick={numInc} >See Next »</button>
        <img className="images" src={gotImage} alt="" />
        </div>
    )
}

export default Entry;

