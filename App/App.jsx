import React from 'react';
import { FirstArticle } from '../App/FirstArticle';

import {
  GetRequest,
  GetRequestHooks,
  GetRequestAsyncAwait,
  GetRequestErrorHandling,
  GetRequestSetHeaders,
} from './';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3 className="p-3 text-center">Assignment9 Justin Weagly</h3>
        <ul>
        <FirstArticle />
        <GetRequest />
        <GetRequestHooks />
        <GetRequestAsyncAwait />
        <GetRequestErrorHandling />
        <GetRequestSetHeaders />
        </ul>
      </div>
    );
  }
}

export { App };
