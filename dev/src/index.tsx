import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AutocompleteContainer } from './containers/AutocompleteContainer';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <AutocompleteContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
