import React, {useContext,useEffect,useRef,useState} from 'react'
import {APPLContext} from '../App'


import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const NumberofItems = (props) => {
    const {cat} = props
    const aPPLContext = useContext(APPLContext)
    const Refitems = useRef(0);
    
    const RefCat = useRef(cat)
   
    
   
    //let itemqty = []
   
    let i = 1
    let insidecntr = 1
   
    for (i = 1; i < aPPLContext.data.length; i++) {
        if(aPPLContext.data[i].Catorgory===RefCat.current && aPPLContext.data[i].YesNo==='1'){
          insidecntr = insidecntr + 1
        }
    } 

    let items = insidecntr
    items = items-1
    Refitems.current  = items
    
   
    const loadcntrs = () =>{
    if(RefCat.current === 'Bread'){
        let Breadcntr = ''
        aPPLContext.CHBreadcntr(Breadcntr)
        }
    if(RefCat.current === 'Meat'){
        let Meatcntr = ''
        aPPLContext.CHMeatcntr(Meatcntr)
        }
    if(RefCat.current === 'Cheese'){
         let Cheesecntr = ''
         aPPLContext.CHCheesecntr(Cheesecntr)
         }
    if(RefCat.current === 'Fresh Vegetable'){
         let FresVegcntr = ''
         aPPLContext.CHFresVegcntr(FresVegcntr)
         }
    if(RefCat.current === 'Fresh Vegetable'){
         let FresFruitcntr = ''
         aPPLContext.CHFresFruitcntr(FresFruitcntr)
        }    
    if(RefCat.current === 'Medicines'){
        let Medicinescntr = ''
        aPPLContext.CHMedicinescntr(Medicinescntr)
        }
    if(RefCat.current === 'Dairy'){
        let Dairycntr = ''
        aPPLContext.CHDairycntr(Dairycntr)
        }
    if(RefCat.current === 'Cleaning'){
        let Cleaningcntr = ''
        aPPLContext.CHCleaningcntr(Cleaningcntr)
        } 
    if(RefCat.current === 'Pasta'){
        let Pastacntr = ''
        aPPLContext.CHPastacntr(Pastacntr)
        }
        if(RefCat.current === 'Sauces'){
            let Saucescntr = ''
            aPPLContext.CHSaucescntr(Saucescntr)
            }   
        if(RefCat.current === 'Rice'){
            let Ricecntr = ''
            aPPLContext.CHRicecntr(Ricecntr)
            } 
        if(RefCat.current === 'Soup'){
            let Soupcntr = ''
            aPPLContext.CHSoupcntr(Soupcntr)
            } 
        if(RefCat.current === 'Baking'){
            let Bakingcntr = ''
            aPPLContext.CHBakingcntr(Bakingcntr)
            }  
        if(RefCat.current === 'Spice'){
            let Spicecntr = ''
            aPPLContext.CHSpicecntr(Spicecntr)
            } 
        if(RefCat.current === 'Breakfast'){
            let Breakfastcntr = ''
            aPPLContext.CHBreakfastcntr(Breakfastcntr)
            }  
        if(RefCat.current === 'Condiments'){
            let Condimentscntr = ''
            aPPLContext.CHCondimentscntr(Condimentscntr)
            }     
        if(RefCat.current === 'Sandwich'){
            let Sandwichcntr = ''
            aPPLContext.CHSandwichcntr(Sandwichcntr)
            }  
        if(RefCat.current === 'Snacks'){
            let Snackscntr = ''
            aPPLContext.CHSnackscntr(Snackscntr)
            }
        if(RefCat.current === 'Beverage'){
            let Beveragecntr = ''
            aPPLContext.CHBeveragecntr(Beveragecntr)
            } 
        if(RefCat.current === 'Freezer Section'){
            let FreezerSectioncntr = ''
            aPPLContext.CHFreezerSectioncntr(FreezerSectioncntr)
            }      
}

useEffect(() => {
    loadcntrs();
  }, []);
        
  if(RefCat.current === 'Bread'){
        return(
            <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
             <Badge variant="info">{aPPLContext.Breadcntr}</Badge>
            </h2>
     )
        }
        if(RefCat.current === 'Meat'){
            return(
                <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                 <Badge variant="info">{aPPLContext.Meatcntr}</Badge>
                </h2>
         )
            } 
        if(RefCat.current === 'Cheese'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Cheesecntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Fresh Vegetable'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.FresVegcntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Fresh Fruit'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.FresFruitcntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Medicines'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Medicinescntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Dairy'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Dairycntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Cleaning'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Cleaningcntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Pasta'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Pastacntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Sauces'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Saucescntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Rice'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Ricecntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Soup'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Soupcntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Baking'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Bakingcntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Spice'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Spicecntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Breakfast'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Breakfastcntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Condiments'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Condimentscntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Sandwich'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Sandwichcntr}</Badge>
                    </h2>
             )}
             if(RefCat.current === 'Beverage'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.Beveragecntr}</Badge>
                    </h2>
             )}if(RefCat.current === 'Freezer Section'){
                return(
                    <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
                     <Badge variant="info">{aPPLContext.FreezerSectioncntr}</Badge>
                    </h2>
             )}

             else {
         return(
            <h2>{cat} items: <Badge variant="warning">{Refitems.current}</Badge>
             
            </h2>
           )}
                
             
           
        

}
export default NumberofItems;