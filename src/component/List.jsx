
import React, {useContext,useRef,useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import {APPLContext} from './../App'
import './List2.css'


import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const List = (props) => {
    const {cat} = props
    const aPPLContext = useContext(APPLContext)
    const isdone = useRef('not-done')
    const itemsobj = [];
    //let  [,setState]=useState(); //used to force a rerender to happen which will allow a style to be set
 


    let itemname = []
    let itemqty = []
   
    let i = 1
    let insidecntr = 1
      
    for (i = 1; i < aPPLContext.data.length; i++) {
        //console.log(aPPLContext.data[i].Catorgory)
        if(aPPLContext.data[i].Catorgory===cat && aPPLContext.data[i].YesNo==='1'){
            
            //console.log(aPPLContext.data[i].FoodItem)
            itemname[insidecntr] = aPPLContext.data[i].FoodItem ;
            //console.log(itemname[insidecntr])
            itemqty[insidecntr] = aPPLContext.data[i].qty ;
           // console.log(itemqty[insidecntr])
            insidecntr = insidecntr + 1
        }
        
      } 
    let items = insidecntr
    
    //builds new json object for food items and qtys
   

    for (let i = 0; i < items; i++) {
        itemsobj.push({
            id:i,
            namee: itemname[i],
            itmeqtyy: itemqty[i],
            isCompleted: false,
            stylee: 'not-done'
        });
        
    }
    //deletes 0 index which is first row in object which has 'undefined'
    delete itemsobj[0];
    const [todos, setTodos] = useState(itemsobj)
   
   console.log(itemsobj)

    //console.log(items)
    function Todo({ todo, index, completeTodo}) {
        return (
            <ListGroup.Item
            action
            key={index} 
            variant="success"
            onClick = {() => completeTodo(index)} 
           
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
              <h3 className={todo.stylee}>
                      {todo.namee} qty: <Badge variant="success">{todo.itmeqtyy}</Badge>
                  </h3>
           
            
            </ListGroup.Item>
        );
      }

    const completeTodo = index => {
        const newTodos = [...todos]
        console.log(index)
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        newTodos[index].stylee = newTodos[index].isCompleted ? "done" : "not-done" 
        console.log(newTodos[index].isCompleted)
        console.log(newTodos)
        //deletes 0 index which is first row in object which has 'undefined
        delete newTodos[0]
        setTodos(newTodos);
      };

   

    return(
        
        
            <ListGroup>
            {todos.map((e, index) => (

                                        <Todo
                                        key={index}
                                        index={index}
                                        todo={e}
                                        completeTodo={completeTodo}
                                        />
                  ))}
            </ListGroup>
     
      
        
    )
}
export default List;