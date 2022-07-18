import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isTrue=true;
    flag=false;
    data='apple';
    /* 
    FALSE VALUES IN JS:
    0, null, false, Na, undefined
    EVERYTHING ELSE IS TRUE:
    apple, 100, -8,' '...*/

    display=false;
    handleChange(event){
        this.display=event.target.checked
    }

}