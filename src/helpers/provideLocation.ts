import { PropTypes } from 'react';
import { withContext } from 'recompose';

export default withContext(
  { location: PropTypes.object },
  ({ location }) =>  ({ location })
);
