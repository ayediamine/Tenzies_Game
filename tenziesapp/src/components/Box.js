import React from "react"
import  './box.css'

export default function Box(props){
    const styles =  {
        backgroundColor: props.color ? "rgba(89, 227, 145, 1)" : "rgba(255, 255, 255, 1)"

    }
    

    return (
        <button 
        style={styles}           
        onClick={props.toggle}
      
        className="boxStyle">
               <div   className="number">
                {props.number}
               </div>       
        
        </button>
    )
}