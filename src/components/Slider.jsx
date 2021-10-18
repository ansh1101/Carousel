import React,{useState} from 'react'
import axios from 'axios';

export default function Slider() {


    const[ photo , setPhoto] = useState(1);
    const[ num , setNum]= useState(1);
    const fetchBlock = () => {
        axios.get("https://api.unsplash.com/search/photos/?client_id=j771nZfmeKXo3gHKQ63Tk_gmAgrsnQMH0xki8sYhm0o&page=1&query=house")
        .then((res) => {
            setPhoto(res.data.results[num].urls.raw);
        })
        .catch((err) => {
            console.error(err);
        })
        
    };
 
    fetchBlock();
    return (
        <div className= "frames"> 
        <img onClick={function inc(){setNum(num => num+1)}} src={photo}  alt="" />
        <img src={photo}  alt="" />
        <img src={photo}  alt="" />
        <img src={photo}  alt="" />
        <img src={photo}  alt="" />
        <img src={photo}  alt="" />
        <img src={photo}  alt="" />

        </div>

            
    )
}
