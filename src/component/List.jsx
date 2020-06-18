
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
    //setup counters for each catorgory
    const RefLiBreadcntr = useRef(aPPLContext.Breadcntr)
    const RefLiMeatcntr = useRef(aPPLContext.Meatcntr)
    const RefLiCheesecntr = useRef(aPPLContext.Cheesecntr)
    const RefLiFresVegcntr = useRef(aPPLContext.FresVegcntr)
    const RefLiFresFruitcntr = useRef(aPPLContext.FresFruitcntr)
    const RefLiMedicinescntr = useRef(aPPLContext.Medicinescntr)
    const RefLiDairycntr = useRef(aPPLContext.Dairycntr)
    const RefLiCleaningcntr = useRef(aPPLContext.Cleaningcntr)
    const RefLiPastacntr = useRef(aPPLContext.Pastacntr)
    const RefLiSaucescntr = useRef(aPPLContext.Saucescntr)
    const RefLiRicecntr = useRef(aPPLContext.Ricecntr)
    const RefLiSoupcntr = useRef(aPPLContext.Soupcntr)
    const RefLiBakingcntr = useRef(aPPLContext.Bakingcntr)
    const RefLiSpicecntr = useRef(aPPLContext.Spicecntr)
    const RefLiBreakfastcntr = useRef(aPPLContext.Breakfastcntr)
    const RefLiCondimentscntr = useRef(aPPLContext.Condimentscntr)
    const RefLiSandwichcntr = useRef(aPPLContext.Sandwichcntr)
    const RefLiSnackscntr = useRef(aPPLContext.Snackscntr)
    const RefLiBeveragecntr = useRef(aPPLContext.Beveragecntr)
    const RefLiFreezerSectioncntr = useRef(aPPLContext.FreezerSectioncntr)
    

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
    
    //builds new json object for food items and qtys for each catorgory
   

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
   
   //console.log(itemsobj)

    //console.log(items)
    function Todo({ todo, index, completeTodo}) {
        return (
            <ListGroup.Item
            
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

      // Logic to scratch off item off the list in each catorogy
    const completeTodo = index => {
        const newTodos = [...todos]
       // console.log(index)
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        newTodos[index].stylee = newTodos[index].isCompleted ? "done" : "not-done" 
       // console.log(newTodos[index].isCompleted)
        //console.log(newTodos)
        //deletes 0 index which is first row in object which has 'undefined
        delete newTodos[0]
        setTodos(newTodos);
        
        //increments a counter when item is scratched off the list with in each catorgory
        if (cat === 'Bread'){
              if (newTodos[index].isCompleted === true){
                RefLiBreadcntr.current = RefLiBreadcntr.current - 1
                let Breadcntr = RefLiBreadcntr.current.toString()
                aPPLContext.CHBreadcntr(Breadcntr)
              }
              if (newTodos[index].isCompleted === false ){
                RefLiBreadcntr.current = RefLiBreadcntr.current + 1
                let Breadcntr = RefLiBreadcntr.current.toString()
                aPPLContext.CHBreadcntr(Breadcntr)
              }
        }
        if (cat === 'Meat'){
          if (newTodos[index].isCompleted === true){
            RefLiMeatcntr.current = RefLiMeatcntr.current - 1
            let Meatcntr = RefLiMeatcntr.current.toString()
            aPPLContext.CHMeatcntr(Meatcntr)
          }
          if (newTodos[index].isCompleted === false ){
            RefLiMeatcntr.current = RefLiMeatcntr.current + 1
            let Meatcntr = RefLiMeatcntr.current.toString()
            aPPLContext.CHMeatcntr(Meatcntr)
          }
    }
          if (cat === 'Cheese'){
            if (newTodos[index].isCompleted === true){
              RefLiCheesecntr.current = RefLiCheesecntr.current - 1
              let Cheesecntr = RefLiCheesecntr.current.toString()
              aPPLContext.CHCheesecntr(Cheesecntr)
            }
            if (newTodos[index].isCompleted === false ){
              RefLiCheesecntr.current = RefLiCheesecntr.current + 1
              let Cheesecntr = RefLiCheesecntr.current.toString()
              aPPLContext.CHCheesecntr(Cheesecntr)
            }
      }
     
  if (cat === 'Fresh Vegetable'){
    if (newTodos[index].isCompleted === true){
      RefLiFresVegcntr.current = RefLiFresVegcntr.current - 1
      let FresVegcntr = RefLiFresVegcntr.current.toString()
      aPPLContext.CHFresVegcntr(FresVegcntr)
    }
    if (newTodos[index].isCompleted === false ){
      RefLiFresVegcntr.current = RefLiFresVegcntr.current + 1
      let FresVegcntr = RefLiFresVegcntr.current.toString()
      aPPLContext.CHFresVegcntr(FresVegcntr)
    }
}
if (cat === 'Fresh Fruit'){
  if (newTodos[index].isCompleted === true){
    RefLiFresFruitcntr.current = RefLiFresFruitcntr.current - 1
    let FresFruitcntr = RefLiFresFruitcntr.current.toString()
    aPPLContext.CHFresFruitcntr(FresFruitcntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiFresFruitcntr.current = RefLiFresFruitcntr.current + 1
    let FresFruitcntr = RefLiFresFruitcntr.current.toString()
    aPPLContext.CHFresFruitcntr(FresFruitcntr)
  }
}
if (cat === 'Medicines'){
  if (newTodos[index].isCompleted === true){
    RefLiMedicinescntr.current = RefLiMedicinescntr.current - 1
    let Medicinescntr = RefLiMedicinescntr.current.toString()
    aPPLContext.CHMedicinescntr(Medicinescntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiMedicinescntr.current = RefLiMedicinescntr.current + 1
    let Medicinescntr = RefLiMedicinescntr.current.toString()
    aPPLContext.CHMedicinescntr(Medicinescntr)
  }
}
if (cat === 'Dairy'){
  if (newTodos[index].isCompleted === true){
    RefLiDairycntr.current = RefLiDairycntr.current - 1
    let Dairycntr = RefLiDairycntr.current.toString()
    aPPLContext.CHDairycntr(Dairycntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiDairycntr.current = RefLiDairycntr.current + 1
    let Dairycntr = RefLiDairycntr.current.toString()
    aPPLContext.CHDairycntr(Dairycntr)
  }
}
if (cat === 'Cleaning'){
  if (newTodos[index].isCompleted === true){
    RefLiCleaningcntr.current = RefLiCleaningcntr.current - 1
    let Cleaningcntr = RefLiCleaningcntr.current.toString()
    aPPLContext.CHCleaningcntr(Cleaningcntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiCleaningcntr.current = RefLiCleaningcntr.current + 1
    let Cleaningcntr = RefLiCleaningcntr.current.toString()
    aPPLContext.CHCleaningcntr(Cleaningcntr)
  }
}
if (cat === 'Pasta'){
  if (newTodos[index].isCompleted === true){
    RefLiPastacntr.current = RefLiPastacntr.current - 1
    let Pastacntr = RefLiPastacntr.current.toString()
    aPPLContext.CHPastacntr(Pastacntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiPastacntr.current = RefLiPastacntr.current + 1
    let Pastacntr = RefLiPastacntr.current.toString()
    aPPLContext.CHPastacntr(Pastacntr)
  }
}
if (cat === 'Sauces'){
  if (newTodos[index].isCompleted === true){
    RefLiSaucescntr.current = RefLiSaucescntr.current - 1
    let Saucescntr = RefLiSaucescntr.current.toString()
    aPPLContext.CHSaucescntr(Saucescntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiSaucescntr.current = RefLiSaucescntr.current + 1
    let Saucescntr = RefLiSaucescntr.current.toString()
    aPPLContext.CHSaucescntr(Saucescntr)
  }
}
if (cat === 'Rice'){
  if (newTodos[index].isCompleted === true){
    RefLiRicecntr.current = RefLiRicecntr.current - 1
    let Ricecntr = RefLiRicecntr.current.toString()
    aPPLContext.CHRicecntr(Ricecntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiRicecntr.current = RefLiRicecntr.current + 1
    let Ricecntr = RefLiRicecntr.current.toString()
    aPPLContext.CHRicecntr(Ricecntr)
  }
}
if (cat === 'Soup'){
  if (newTodos[index].isCompleted === true){
    RefLiSoupcntr.current = RefLiSoupcntr.current - 1
    let Soupcntr = RefLiSoupcntr.current.toString()
    aPPLContext.CHSoupcntr(Soupcntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiSoupcntr.current = RefLiSoupcntr.current + 1
    let Soupcntr = RefLiSoupcntr.current.toString()
    aPPLContext.CHSoupcntr(Soupcntr)
  }
}
if (cat === 'Baking'){
  if (newTodos[index].isCompleted === true){
    RefLiBakingcntr.current = RefLiBakingcntr.current - 1
    let Bakingcntr = RefLiBakingcntr.current.toString()
    aPPLContext.CHBakingcntr(Bakingcntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiBakingcntr.current = RefLiBakingcntr.current + 1
    let Bakingcntr = RefLiBakingcntr.current.toString()
    aPPLContext.CHBakingcntr(Bakingcntr)
  }
}
if (cat === 'Spice'){
  if (newTodos[index].isCompleted === true){
    RefLiSpicecntr.current = RefLiSpicecntr.current - 1
    let Spicecntr = RefLiSpicecntr.current.toString()
    aPPLContext.CHSpicecntr(Spicecntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiSpicecntr.current = RefLiSpicecntr.current + 1
    let Spicecntr = RefLiSpicecntr.current.toString()
    aPPLContext.CHSpicecntr(Spicecntr)
  }
}
if (cat === 'Breakfast'){
  if (newTodos[index].isCompleted === true){
    RefLiBreakfastcntr.current = RefLiBreakfastcntr.current - 1
    let Breakfastcntr = RefLiBreakfastcntr.current.toString()
    aPPLContext.CHBreakfastcntr(Breakfastcntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiBreakfastcntr.current = RefLiBreakfastcntr.current + 1
    let Breakfastcntr = RefLiBreakfastcntr.current.toString()
    aPPLContext.CHBreakfastcntr(Breakfastcntr)
  }
}
if (cat === 'Condiments'){
  if (newTodos[index].isCompleted === true){
    RefLiCondimentscntr.current = RefLiCondimentscntr.current - 1
    let Condimentscntr = RefLiCondimentscntr.current.toString()
    aPPLContext.CHCondimentscntr(Condimentscntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiCondimentscntr.current = RefLiCondimentscntr.current + 1
    let Condimentscntr = RefLiCondimentscntr.current.toString()
    aPPLContext.CHCondimentscntr(Condimentscntr)
  }
}
if (cat === 'Sandwich'){
  if (newTodos[index].isCompleted === true){
    RefLiSandwichcntr.current = RefLiSandwichcntr.current - 1
    let Sandwichcntr = RefLiSandwichcntr.current.toString()
    aPPLContext.CHSandwichcntr(Sandwichcntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiSandwichcntr.current = RefLiSandwichcntr.current + 1
    let Sandwichcntr = RefLiSandwichcntr.current.toString()
    aPPLContext.CHSandwichcntr(Sandwichcntr)
  }
}
if (cat === 'Snacks'){
  if (newTodos[index].isCompleted === true){
    RefLiSnackscntr.current = RefLiSnackscntr.current - 1
    let Snackscntr = RefLiSnackscntr.current.toString()
    aPPLContext.CHSnackscntr(Snackscntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiSnackscntr.current = RefLiSnackscntr.current + 1
    let Snackscntr = RefLiSnackscntr.current.toString()
    aPPLContext.CHSnackscntr(Snackscntr)
  }
}
if (cat === 'Beverage'){
  if (newTodos[index].isCompleted === true){
    RefLiBeveragecntr.current = RefLiBeveragecntr.current - 1
    let Beveragecntr = RefLiBeveragecntr.current.toString()
    aPPLContext.CHBeveragecntr(Beveragecntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiBeveragecntr.current = RefLiBeveragecntr.current + 1
    let Beveragecntr = RefLiBeveragecntr.current.toString()
    aPPLContext.CHBeveragecntr(Beveragecntr)
  }
}
if (cat === 'Freezer Section'){
  if (newTodos[index].isCompleted === true){
    RefLiFreezerSectioncntr.current = RefLiFreezerSectioncntr.current - 1
    let FreezerSectioncntr = RefLiFreezerSectioncntr.current.toString()
    aPPLContext.CHFreezerSectioncntr(FreezerSectioncntr)
  }
  if (newTodos[index].isCompleted === false ){
    RefLiFreezerSectioncntr.current = RefLiFreezerSectioncntr.current + 1
    let FreezerSectioncntr = RefLiFreezerSectioncntr.current.toString()
    aPPLContext.CHFreezerSectioncntr(FreezerSectioncntr)
  }
}

       console.log(aPPLContext.Breadcntr)
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