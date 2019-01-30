import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component{
    constructor() {
        super();
        this.state = { visible: true };
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
          visible: !this.state.visible
        });
      }
     

   render() {
    const {visible} = this.state;
    const charVisible = visible ? <RandomChar/>: null;
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <Button className ="mb-2" onClick={() => this.toggle()} > Нажми меня нежно</Button>
                        {charVisible}
                        
                        
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    )
    
   }
  
};

