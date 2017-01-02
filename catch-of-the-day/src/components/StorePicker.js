import React from 'react';

class StorePicker extends React.Component{
  render() {
    // before return you can put double slashes
    return (
       <form className="store-selector">
     {/* this is the way to make a comment  (curly brackets -back slash then star and
     can't put comment phrase above whatever you return it will give an error*/}
       <h2>Please Enter A Store</h2>
       <input type="text" required placeholder="Store Name" />
      <button type="submit">Visit Store →</button>
       </form>
      )
  }
}

export default StorePicker;
