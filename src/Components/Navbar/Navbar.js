import React from "react"
import "./Navbar.css"
import { NavLink } from "react-router-dom";

class Navbar extends React.Component{
    
    render(){
        return(
            <div className="navbar">
                
              <div className="maxnavbar">
                <ul>
                
                <NavLink to="/homepage" style={{ textDecoration: "none" ,color:"#ffffff" }}><li className="home">
                    HOME</li></NavLink>
                    <li className="about">ABOUT&nbsp;US</li>
                    <li className="productinfo">PRODUCTION&nbsp;INFO</li>
                    <li className="termsandconditions">TERMS&nbsp;&&nbsp;CONDITIONS</li>
                    <li className="contact">CONTACT</li>
                    <li className="rightbar" onClick={this.handleclick}>
                    <NavLink to="/minnavbar" style={{ textDecoration: "none" ,color:"#ffffff" }}>
                        <i className="fa fa-bars" aria-hidden="true"></i></NavLink>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}
export default Navbar;

export class  Minnavbar extends React.Component{
    // constructor(){
    //     super();
    //    this.state={
    //        show:false,
    //        hide:false
    //    } 
    // }
    // handleclick = () => {
    //     this.setState({
    //         hide:this.state.show,
    //         show:!this.state.show
    //     },()=>{console.log(this.state.show,this.state.hide)})
    //   }
    // // otherclick = () => {
    // //     this.setState({
    // //         hide:!this.state.hide
    // //     },()=>{console.log(this.state.show)})
    // //   }
    // componentDidUpdate(){
    //     this.state={
    //         show:false,
    //         hide:false
    //     } 
    // }
    render(){
        return(

                           
                <div className="minnavbar">
                 <ul>
                     <div className="mdivrightbar">
                     <NavLink to="/homepage" style={{ textDecoration: "none" ,color:"#ffffff" }}>
                         <li className="mrightbar" onClick={this.handleclick}>
                         X</li></NavLink>
                     </div>
                     
                     <NavLink to="/homepage" style={{ textDecoration: "none" ,color:"#ffffff" }}><li className="minhome" onClick={this.otherclick}>
                   HOME</li></NavLink>
                   <NavLink to="/homepage" style={{ textDecoration: "none" ,color:"#ffffff" }}>
                     <li className="minabout" onClick={this.otherclick}>
                     
                         ABOUT&nbsp;US</li></NavLink>
                         <NavLink to="/homepage" style={{ textDecoration: "none" ,color:"#ffffff" }}>
                          
                     <li className="minproductinfo" onClick={this.otherclick}>
                    PRODUCTION&nbsp;INFO</li></NavLink>
                    <NavLink to="/homepage" style={{ textDecoration: "none" ,color:"#ffffff" }}>
                          
                     <li className="mintermsandconditions" onClick={this.otherclick}>
                   
                         TERMS&nbsp;&&nbsp;CONDITIONS</li></NavLink>
                         <NavLink to="/homepage" style={{ textDecoration: "none" ,color:"#ffffff" }}>
                          
                     <li className="mincontact" onClick={this.otherclick}>
                     
                         CONTACT</li></NavLink>
                 </ul>
                 </div>
                  
        )
    }
}
