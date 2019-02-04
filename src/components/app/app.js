import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import {HousesPage, CharacterPage, BooksPage, BooksItem} from '../pages';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
      <Router>
            <div className = "app"> 
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
                    <Route path='/' exact component = {()=> <div className ="title">Welcome!</div>}/>
                    <Route path='/characters' component = {CharacterPage}/>
                    <Route path='/books' exact component = {BooksPage}/>
                    <Route path='/houses' component = {HousesPage}/>
                    <Route path='/books/:id' render ={
                        ({match}) => {
                        const {id} = match.params;
                        return <BooksItem bookId={id} />
                        }
                    } />
                    
                    
                </Container>
        </div>
      </Router>
    )
    
   }
  
};

