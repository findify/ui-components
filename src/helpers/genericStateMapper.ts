import { compose, branch, mapProps, withState, withHandlers, createEagerFactory } from 'recompose';

export const genericStateMapper = (BaseComponent: any) => branch(
  ({ isMobile }) => !!isMobile,
  props => props,
  compose(
    withState('values', 'updateList', props => 
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
