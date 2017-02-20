import * as React from 'react';
import { withServerEmulator } from '../helpers/withServerEmulator';

export default withServerEmulator(({ Component, ...props }: any) => (
  <div style={{ margin: 50, width: '100%', position: 'relative' }}>
    <Component { ...props }/>
  </div>
));
