import { compose, branch, mapProps, withState, withHandlers, createEagerFactory } from 'recompose';

export const genericStateMapper = (BaseComponent: any) => branch(
  ({ raw }) => !!raw,
  mapProps(({ mapper, values, ...rest }: any) => ({
    ...rest,
    list: values
  })),
  compose(
    withState('list', 'updateList', props => 
      props.stateToProps ? props.stateToProps(props) : props.values
    ),
    withHandlers({
      onChange: ({ list, updateList, onChange, mapper }: any) => (key, selected) => 
      updateList(
        mapper(list, key, selected),
        () => onChange && onChange(key, selected)
      )
    })
  )
)(BaseComponent);
