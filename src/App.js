import React from 'react'
import Mydrops from './components/Mydrops';
import Header from './components/Header';
import Entry from './components/Entry';
import Slider from './components/Slider';
const  App = (props) => {

  


  return (
    <div>
      <Header  />
      <Mydrops name={"Categories"} />
      <Entry />
      <Slider />
    </div>

  );

}

export default App;
