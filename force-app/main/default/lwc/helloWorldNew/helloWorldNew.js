import { LightningElement,track } from 'lwc';

export default class HelloWorldNew extends LightningElement {
   @track greeting='world';
   changeHandler(event)
   {
       this.greeting=event.target.value;
   }
}