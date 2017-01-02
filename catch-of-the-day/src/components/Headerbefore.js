import React from 'react';


class Header extends React.Component {
  render(){
    console.log(this);
    // $r to check react components and $0 to check javascript
    return (
        <header className="top">
          <h1>
                Catch
                <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">the</span>
                </span>
                 Day
          </h1>
          <h3 className="tagline"><span>{this.props.tagline}</span></h3>
        </header>
      )
  }
}


export default Header;

