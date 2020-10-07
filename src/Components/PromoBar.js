import React, {Component} from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGift} from "@fortawesome/free-solid-svg-icons/faGift.js";


class PromoBar extends Component{


  render(){
      const promostyle= {
          backgroundColor: "Dodgerblue",
          color: "white",
          padding: "10px",
          fontFamily: "Arial",
          width: "100%",
          textAlign: "center",
           //sticky style
          // position: "fixed",
          // top: "0",
          // width:"100%",
      };

    return(
      <div className="wrapper">
         <div className="promo" style={promostyle}>
            <FontAwesomeIcon icon={faGift} style={{width:"30px"}}/>
            <text className="promotext">{this.props.promotext} </text>
            <FontAwesomeIcon icon={faGift} fixedWidth/>

        </div>

      </div>

    )
    
    
  }
}

export default PromoBar;