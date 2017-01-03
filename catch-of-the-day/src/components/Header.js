import React from 'react';



const Header = (props) => {
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
          <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header>
      )
}

/* best practice above with "const header () => {} " but it can be written as

function header() {
}

or

var Header = function
*/

Header.propTypes = {
  tagline: React.PropTypes.string.isRequired
}


export default Header;

