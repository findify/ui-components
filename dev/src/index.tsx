import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AutocompleteWidgetWrapper } from './containers/AutocompleteWidgetWrapper';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <AutocompleteWidgetWrapper />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
