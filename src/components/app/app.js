import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage';

export default class App extends Component{
   
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
            </Container>
        </>
    )
    
   }
  
};

