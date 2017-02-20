import { compose, withState, withHandlers } from 'recompose';

export const withMeta = compose(
  withState('meta', 'setMeta', props => props.meta),
  withHandlers({
    onPageChange: ({ meta, setMeta }) => page => setMeta({ ...meta, offset: meta.limit * page }),
    onSortChange: ({ meta, setMeta }) => field => setMeta({ ...meta, sort: { field } })
  })
)
