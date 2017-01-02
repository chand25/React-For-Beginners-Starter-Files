import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';


import './css/style.css';
import App from './components/App';

import StorePicker from './components/StorePicker';

const Root  = () => {
  return (
    <BrowserRouter>
        <div>
  {/* you have to wrap a div around Match since it can not be a direct child of BrowserRouter*/}
            <Match exactly pattern="/" component={StorePicker} />
            <Match pattern="/store/:storeId" component={App} />
        </div>
    </BrowserRouter>
    )
}

render(<Root/>, document.querySelector('#main'));










