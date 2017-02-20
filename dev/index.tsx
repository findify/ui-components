import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { withMockup } from './helpers/withMockup';
import '../src/styles.global.css';

const root = document.createElement('div');
document.body.appendChild(root);

const render = (widgets) => {
  ReactDOM.render(
    <AppContainer>
      <div>
        { Object.keys(widgets).map(key => withMockup(key)(widgets[key])) }
      </div>
    </AppContainer>,
    root
  );
};

render(require('../src/index'));

if (module.hot) {
  module.hot.accept('../src/index', () => {
    render(require('../src/index'));
  });
}
