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
        <GetRequest />
        <GetRequestHooks />
        <GetRequestAsyncAwait />
        <GetRequestErrorHandling />
        <GetRequestSetHeaders />
      </div>
    );
  }
}

export { App };
