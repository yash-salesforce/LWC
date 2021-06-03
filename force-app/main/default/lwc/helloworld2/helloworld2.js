import { LightningElement ,track} from 'lwc';

export default class Helloworld2 extends LightningElement {
    @track greeting="world";
    changeHandler(event)
    {
        this.greeting=event.target.value;
    }
}