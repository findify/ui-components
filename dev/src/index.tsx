import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>Hello world</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
