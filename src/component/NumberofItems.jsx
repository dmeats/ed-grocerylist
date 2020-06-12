import React, {useContext} from 'react'
import {APPLContext} from '../App'


import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const NumberofItems = (props) => {
    const {cat} = props
    const aPPLContext = useContext(APPLContext)
    
    
    let itemqty = []
   
    let i = 1
    let insidecntr = 1
   
    
    
    
    for (i = 1; i < aPPLContext.data.length; i++) {
        //console.log(aPPLContext.data[i].Catorgory)
        if(aPPLContext.data[i].Catorgory===cat && aPPLContext.data[i].YesNo==='1'){
            
            //console.log(aPPLContext.data[i].FoodItem)
            
            
            
            insidecntr = insidecntr + 1
        }
        
      } 
    let items = insidecntr
    
   
    
   
   

    console.log(items)
 
    
    return(
        
        
           <h2>{cat} items: <Badge variant="warning">{items-1}</Badge></h2>
     
      
        
    )
}
export default NumberofItems;