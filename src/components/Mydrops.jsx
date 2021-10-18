
import React from 'react';
import './comp.css'


export default function Mydrops(props) {

  return(
    <div className = "category">
    <h1  id="hex" className= "myTitle">{props.name}</h1>
      <select className = "selectCategory"  >
    <option className="opt"  value = "Technology">House</option>
        <option  value = "Setup">Setup</option>
        <option  value = "Science">Science</option>
        <option  value = "Business">Business</option>
        <option  value = "Office">Office</option>
        <option  value = "Fitness">Fitness</option>
        <option  value = "Audio">Audio</option>
        <option  value = "People">People</option>
        <option  value = "Automobile">Automobile</option>
        <option  value = "Stocks">Stocks</option>
      </select>
      <span className = "custom-arrow"> </span>
    </div>
  )
}