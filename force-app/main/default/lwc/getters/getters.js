import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
    fName='sam';
    lName='walton';

    num1 =3;
    num2 =5;

    get fullNameUpperCase(){
        return `${this.fName.toUpperCase()} ${this.lName.toUpperCase()}`
    }
    get firstNameUpper(){
        // make only first name upper
        // concat the last name initial
        return `${this.fName.toUpperCase()} ${this.lName.charAt(0)}`
    }
    get total(){
        return parseInt(this.num1) + parseInt(this.num2);
    }
// getting the input 1 and assigning to num1
    handleChange1(event){
        this.num1=event.target.value
    }
// getting the input 2 and assigning to num2
    handleChange2(event){
        this.num2=event.target.value
    }
    // create a getter that returns the different of num1 and num2
    // and diplay it on the UI
    get difference(){
        return parseInt(this.num1) - parseInt(this.num2);
    }
    get product(){
        return parseInt(this.num1) * parseInt(this.num2); 
    }
    get quotient(){
        return parseInt(this.num1) / parseInt(this.num2); 
    }
}
