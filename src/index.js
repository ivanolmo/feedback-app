import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import App from './App';

function Index() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDom.render(<Index />, document.getElementById('root'));
