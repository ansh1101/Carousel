import React from "react";
 import logo from '../caraousel1.png'

const Header = () => {

    
    return( 
        <div style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}  className="log">
         <nav className = "navbar"> 
         

            <img className="icon" src= {logo}  width = "200px" alt = "logo" />
           
     </nav>
           </div>
   
      
    )

}
export default Header;