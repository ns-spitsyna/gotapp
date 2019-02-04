import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import {HousesPage, CharacterPage, BooksPage} from '../pages';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
export default class App extends Component{
    gotService = new gotService();
   
    state = {
        visible: true,
        error: false
    };

    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
    }
    toggle = () => {
        this.setState((state) =>{
            return {
                visible: !state.visible
            }
        });
    };

    

   render() {
    const charVisible = this.state.visible ? <RandomChar/>: null;

    if (this.state.error){
        return <ErrorMessage/>
    }

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
                <CharacterPage/>
                <BooksPage/>
                <HousesPage/>
                
            </Container>
        </>
    )
    
   }
  
};

