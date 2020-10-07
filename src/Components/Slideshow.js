import React, {Component}  from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from 'C:/Users/User/Desktop/my-app/src/assets/slide1.jpg';
import slide2 from 'C:/Users/User/Desktop/my-app/src/assets/slide2.jpeg';
import slide3 from 'C:/Users/User/Desktop/my-app/src/assets/slide3.png';
import slide4 from 'C:/Users/User/Desktop/my-app/src/assets/slide4.jpeg';
import 'C:/Users/User/Desktop/my-app/src/Styles/overrides.css'
 


class Slideshow extends Component{



    render(){
        
    
    const wrapperStyle={
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "10%",
        display: "block",
        zIndex: "-1",

     
        
    }

       
        return(
           <div className="wrapper" style={wrapperStyle}>
               <div className="screen" >
               <Carousel    width="1050px" infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false} stopOnHover={false}>
               
                    <img src={slide1} alt="img"    />
               
                    <img src={slide2} alt="img"  />
               
                    <img src={slide3} alt="img" />
            
                    <img src={slide4} alt="img"  />
               
            </Carousel>
               </div>

               
           </div>
        );
    }
}

export default Slideshow;