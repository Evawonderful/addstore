import React, {Component} from 'react';
import PromoBar from "./Components/PromoBar";
import Navbar from './Components/Navbar';
import Brand from "./Components/Brand";
import Slideshow from './Components/Slideshow';
import Megamenu from './Components/Megamenu';


class App extends Component{
  render(){




    return(
      <div className="wrapper">
        <PromoBar promotext="Free Shipping for bulk orders within Ibadan"/>
        <Navbar/>
        <Brand/>
         <Megamenu/>
        <Slideshow/>
       
       
     
        
      </div>




    )
    
    
  }
}

export default App;