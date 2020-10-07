import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";




class Navbar extends Component{
  
  render(){


    // function changebgcolor(e) {
    //   e.target.style.background = "#505050";
    //   e.target.style.color = "white"
    //   e.target.style.border = " 2px groove black"

    // };  
    // changebgcolor = (e) => e.target.style.background= "#505050";


    const navstyle= {
      backgroundColor: "#e0ebeb",
      color: "#505050",
      width: "100%",
      padding: "5px",
      margin: "0",
      //sticky style
      // position: "fixed",
      // width:"100%",

  
    };
    
    const inputStyle={
     border: "none",
     marginLeft: "15px",
     marginRight: "49%",
     backgroundColor: "inherit",
     fontSize: "20px",
     outline: "none",
    };
    const btnstyle = {      
       font: "Montserrat, sans-serif",
       padding: "8px",
       outline: "none",
       border: "0",
       borderRight: "1px groove #505050",
       marginRight: "15px",
       backgroundColor: "inherit",
    };
   

    return(
      <div className="wrapper" style={navstyle}>
        <FontAwesomeIcon icon={faSearch} style={{marginLeft: "15px"}}/>
        <input type="text" placeholder="Search" style={inputStyle}></input>
        <button style={btnstyle}><a href="./login" style={{textDecoration: "none", color: "inherit"}}>Log In</a></button>
        <button style= {btnstyle}><a href="./account" style={{textDecoration: "none", color: "inherit"}}>Create Account</a> </button>
        <button 
        //  onMouseOver= { changebgcolor}
        style ={btnstyle} >
          <FontAwesomeIcon icon={faShoppingCart}/> 0
           <a href="./cart" style={{textDecoration: "none", color: "inherit", border: "none !important"}}> Cart</a>
        </button>

      </div>

    )
    
    
  }
}

export default Navbar;