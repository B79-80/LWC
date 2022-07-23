import { LightningElement } from 'lwc';

export default class Car extends LightningElement {
    engineModelValue;
    handleChange(event){
        this.engineModelValue=event.target.value;
    }
}