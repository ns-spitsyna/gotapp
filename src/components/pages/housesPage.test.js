import React from 'react';
import HousesPage from './housesPage';
import {shallow} from 'enzyme';

describe('Testing <HousesPage/>', () =>{
    const house = shallow(<HousesPage/>);
    describe('Testing snap & correctly', () =>{
           
        it('RandomChar have rendered correctly', () =>{
            expect(house).toMatchSnapshot();
        });
        
          
         it('HousesPage state passes when value is null', () =>{
          expect(house.state().selectedItem).toBeNil();
        });  
        it('HousesPage state "error" is false', () =>{
            expect(house.state().error).toBeFalsy();
        });

    });
        describe('Handlers tests', () =>{
            it('testing onItemSelected', () =>{
                house.instance().onItemSelected(4);
                expect(house.state().selectedItem).toBe(4);
            });

        });
        
   
  
});