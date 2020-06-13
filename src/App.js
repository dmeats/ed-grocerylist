import React, {useState} from 'react';
import List from './component/List';
import NumberofItems from './component/NumberofItems'
import grocerylist from './DataFile/data.json'

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';


import './App.css';
export const APPLContext = React.createContext()

function App() {

  const [data, setdata] = useState(grocerylist)
 
  return (

    <APPLContext.Provider value = {{data}}>
      <div className="App">
        
        <h1> &nbsp; E & D Grocery list</h1>
        
        <Accordion >
        
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className='CardHeader'>

              <NumberofItems cat='Bread'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ListGroup>
                      <List cat='Bread'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
         
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" className='CardHeader'>

              <NumberofItems cat='Meat'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ListGroup>
                      <List cat='Meat'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2" className='CardHeader'>
              <NumberofItems cat='Cheese'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ListGroup>
                      <List cat='Cheese'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3" className='CardHeader'>
              <NumberofItems cat='Fresh Vegetable'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <ListGroup>
                      <List cat='Fresh Vegetable'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4" className='CardHeader'>
              <NumberofItems cat='Fresh Fruit'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <ListGroup>
                      <List cat='Fresh Fruit'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5" className='CardHeader'>
              <NumberofItems cat='Medicines'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <ListGroup>
                      <List cat='Medicines'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6" className='CardHeader'>
              <NumberofItems cat='Dairy'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  <ListGroup>
                      <List cat='Dairy'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7" className='CardHeader'>
              <NumberofItems cat='Cleaning'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  <ListGroup>
                      <List cat='Cleaning'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="8" className='CardHeader'>
              <NumberofItems cat='Pasta'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body>
                  <ListGroup>
                      <List cat='Pasta'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="9" className='CardHeader'>
              <NumberofItems cat='Sauces'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="9">
                <Card.Body>
                  <ListGroup>
                      <List cat='Sauces'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="10" className='CardHeader'>
              <NumberofItems cat='Rice'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="10">
                <Card.Body>
                  <ListGroup>
                      <List cat='Rice'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="11" className='CardHeader'>
              <NumberofItems cat='Soup'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="11">
                <Card.Body>
                  <ListGroup>
                      <List cat='Soup'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="12" className='CardHeader'>
              <NumberofItems cat='Baking'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="12">
                <Card.Body>
                  <ListGroup>
                      <List cat='Baking'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="13" className='CardHeader'>
              <NumberofItems cat='Spice'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="13">
                <Card.Body>
                  <ListGroup>
                      <List cat='Spice'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="14" className='CardHeader'>
              <NumberofItems cat='Breakfast'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="14">
                <Card.Body>
                  <ListGroup>
                      <List cat='Breakfast'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="15" className='CardHeader'>
              <NumberofItems cat='Condiments'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="15">
                <Card.Body>
                  <ListGroup>
                      <List cat='Condiments'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="16" className='CardHeader'>
              <NumberofItems cat='Sandwich'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="16">
                <Card.Body>
                  <ListGroup>
                      <List cat='Sandwich'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="17" className='CardHeader'>
              <NumberofItems cat='Snacks'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="17">
                <Card.Body>
                  <ListGroup>
                      <List cat='Snacks'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="18" className='CardHeader'>
              <NumberofItems cat='Beverage'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="18">
                <Card.Body>
                  <ListGroup>
                      <List cat='Beverage'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="19" className='CardHeader'>
              <NumberofItems cat='Freezer Section'/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="19">
                <Card.Body>
                  <ListGroup>
                      <List cat='Freezer Section'/>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

        </Accordion>
        <h1> &nbsp; Thankyou !!!</h1>

      </div>
    </APPLContext.Provider>
  );
}

export default App;
