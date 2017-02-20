import * as React from 'react';
import { withState } from 'recompose';

const props = {
  total: 20,
  current: 4
};

export default withState(
  'current', 'setCurrentPage', 4
)(({ Component, current, setCurrentPage }: any) => (
  <div style={{ margin: 50, width: 400, position: 'relative' }}>
    <Component { ...props } current={current} onChange={page => setCurrentPage(page)}/>
  </div>
));
