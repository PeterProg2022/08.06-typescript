import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import IssueList from './IssueList.jsx';

const element = <IssueList />;

ReactDOM.render(element, document.getElementById('contents'));

// to accept HMR
if (module.hot) {
  module.hot.accept();
}
