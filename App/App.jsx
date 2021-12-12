import React from 'react';

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
        <h3 className="p-3 text-center">Assignment9</h3>
        <ul>
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
