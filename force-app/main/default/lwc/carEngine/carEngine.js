import { api, LightningElement } from 'lwc';

export default class CarEngine extends LightningElement {
    // @api decorator is used to make properties public
    // so that the properties can be visible in other components
    // We must used @api decorator cause we are trying assign
    //a new value in the parent component
   @api engineModel='V6';
}