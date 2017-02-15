import * as React from 'react';

export default ({ Component }) => (
  <div style={{ margin: 50, width: 400, position: 'relative' }}>
    <Component value={1.5} count={5} />
  </div>
);
