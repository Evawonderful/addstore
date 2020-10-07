import React , {Component} from 'react';
import thelogo from 'C:/Users/User/Desktop/my-app/src/assets/thelogo.png';


class Brand extends Component{
    render(){

        const centerstyle={
            display:"block",
            marginLeft:"auto",
            marginRight:"auto",
            width:"30%",
            height:"100px",
            backgrounColor:"inherit",
        };

        return(
            <div className="wrapper">
                <img alt="brand logo"src={thelogo} style={centerstyle }></img>
            </div>
        );
    }
}

export default Brand;