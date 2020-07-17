import React from 'react';
import './Homepage.css';

import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Carousel from "../Carousel/Carousel"
import Multiplecard from "../Card/Multiplecard/Multiplecard"
import Footer from "../Footer/Footer"


class Homepage extends React.Component{
  render(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <Carousel/>
            <Multiplecard/>
            <Footer/>
        </div>
      
      
    );
  }
}

export default Homepage;
