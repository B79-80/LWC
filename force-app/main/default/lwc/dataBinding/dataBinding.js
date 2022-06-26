import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
// 1. create a property to hold the data
    inputValue='';
    country='';

// 4. handleInput function runs whenever there is a change in the input
// event.target.value returns the user input value
// we assign that value to inputValue property
// then the new inputValue will display in the UI
    handleInput(event){
        this.inputValue=event.target.value 
    }
    handleChange(event){
        this.country=event.target.value
    }
}