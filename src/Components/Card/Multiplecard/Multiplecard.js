import React from 'react';
import Singlecard from '../Singlecard/Singlecard';
import './Multiplecard.css'; 
import Data from '../Data/Data'

class Multiplecard extends React.Component{
    render(){
        const withData = Data.map(item=>
         <Singlecard 
           key={item.id}
           title={item.title}
           description={item.description}
           img={item.img}
           />)
        return(
            <div className="Dispaly">
            <ul className="Dispalyul">
                <li className="DispalyCard">{withData}</li>
            </ul>
            </div>
        );
    }
}
export default Multiplecard;