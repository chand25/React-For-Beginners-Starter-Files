import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
  //constructor() {
   // super();
   // this.goToStore =this.goToStore.bind(this);
   //}
    //the constructor method looks for goTo Store method and it sets itself to its own self and binds it to this keyword
    // the constructor works better if mutiple onSubmit events
  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    //first grab text from box
    console.log(this.storeInput.value);
    //second - transition from /to/ store/:storeId
  }
  render() {
    // before return you can put double slashes
    //irender method are bound to class that you are in but other methods are not
    return (
       <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
      {/*   constructor method or  add this syntax to onSubmit =   {this.goToStore.bind(this)}  or   = {(e) => this.goToStore(e)}*/}
     {/* this is the way to make a comment  (curly brackets -back slash then star and
     can't put comment phrase above whatever you return it will give an error*/}
         <h2>Please Enter A Store</h2>
         <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input)=> {this.storeInput = input }} />
       {/* to get info about ref part see video 11*/}
 {/* inside cury brackets allows you to put formulas and javascript within JSX.....getFunName is a formula on helpers.js*/}
         <button type="submit">Visit Store →</button>
       </form>
    )
  }
}

export default StorePicker;
