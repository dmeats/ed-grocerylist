
import React, {useContext} from 'react'
import {APPLContext} from './../App'


import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const List = (props) => {
    const {cat} = props
    const aPPLContext = useContext(APPLContext)
    
    let itemname = []
    let itemqty = []
   
    let i = 1
    let insidecntr = 1
   
    
    
    
    for (i = 1; i < aPPLContext.data.length; i++) {
        //console.log(aPPLContext.data[i].Catorgory)
        if(aPPLContext.data[i].Catorgory===cat && aPPLContext.data[i].YesNo==='1'){
            
            //console.log(aPPLContext.data[i].FoodItem)
            itemname[insidecntr] = aPPLContext.data[i].FoodItem ;
            console.log(itemname[insidecntr])
            itemqty[insidecntr] = aPPLContext.data[i].qty ;
            console.log(itemqty[insidecntr])
            insidecntr = insidecntr + 1
        }
        
      } 
    let items = insidecntr
    
    //builds new json object for food items and qtys
    const itemsobj = [];

    for (let i = 1; i < items; i++) {
        itemsobj.push({
            namee: itemname[i],
            itmeqtyy: itemqty[i]
        });
    }

    
   
   console.log(itemsobj)

    console.log(items)
 
    
    return(
        
        
            <ListGroup>
            {itemsobj.map((e, index) => (
                    
                  <ListGroup.Item variant="success"><h3>{e.namee} qty: <Badge variant="success">{e.itmeqtyy}</Badge></h3></ListGroup.Item>
                  
                  ))}
            </ListGroup>
     
      
        
    )
}
export default List;