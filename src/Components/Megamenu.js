import React from 'react';
import "C:/Users/User/Desktop/my-app/src/Styles/megamenu.css";
import {faChevronDown} from "C:/Users/User/Desktop/my-app/node_modules/@fortawesome/free-solid-svg-icons/faChevronDown.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Megamenu extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <div className="navbar">
                         
                 <ul className="menu">
                    <li className="menu-item">
                        <a href="#">MEN </a>
                        <FontAwesomeIcon icon={faChevronDown} />
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="column">
                                    <h3>Styles</h3>
                                    <a href="#">T-shirts </a>
                                    <a href="#">Hoodies</a>
                                    <a href="#">Sweaters</a>
                                    <a href="#">Others</a>
                                </div>
                                <div className="column">
                                    <h3>Holidays</h3>
                                    <a href="#">Christmas </a>
                                    <a href="#">Easter </a>
                                    <a href="#">Valentine's day</a>
                                    <a href="#">Others</a>
                                </div>
                                <div className="column">
                                    <h3>Popular Themes</h3>
                                    <a href="#">Food </a>
                                    <a href="#">Pet</a>
                                    <a href="#">Football</a>
                                    <a href="#">New Ins</a>
                                </div>
                            </div>
                        </div>

                    
                    </li>
                    <li className="menu-item">
                        <a href="#">WOMEN </a>
                        <FontAwesomeIcon icon={faChevronDown}/>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="column">
                                    <h3>Styles</h3>
                                    <a href="#">T-shirts </a>
                                    <a href="#">Hoodies</a>
                                    <a href="#">Sweaters</a>
                                    <a href="#">Others</a>
                                </div>
                                <div className="column">
                                    <h3>Holidays</h3>
                                    <a href="#">Christmas </a>
                                    <a href="#">Easter </a>
                                    <a href="#">Valentine's day</a>
                                    <a href="#">Others</a>
                                </div>
                                <div className="column">
                                    <h3>Popular Themes</h3>
                                    <a href="#">Food </a>
                                    <a href="#">Pet</a>
                                    <a href="#">Football</a>
                                    <a href="#">New Ins</a>
                                </div>
                            </div>
                        </div>
                        
                    </li>
                    <li className="menu-item">
                        <a href="#">KIDS </a>
                        <FontAwesomeIcon icon={faChevronDown} />
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="column">
                                    <h3>Styles</h3>
                                    <a href="#">T-shirts </a>
                                    <a href="#">Hoodies</a>
                                    <a href="#">Sweaters</a>
                                    <a href="#">Others</a>
                                </div>
                                <div className="column">
                                    <h3>Holidays</h3>
                                    <a href="#">Christmas </a>
                                    <a href="#">Easter </a>
                                    <a href="#">Valentine's day</a>
                                    <a href="#">Others</a>
                                </div>
                                <div className="column">
                                   
                                </div>
                            </div>
                        </div>

                    </li>
                    <li className="menu-item">
                        <a href="#">ACCESSORIES </a>
                    </li>

                    <li className="menu-item">
                        <a href="#section">CUSTOM TEES </a>                    

                    </li>
               
                 </ul>

                </div>
            </div>
        );
    }
}
export default Megamenu;