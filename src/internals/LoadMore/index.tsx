import * as React from 'react';
import { compose, withPropsOnChange, withProps, withHandlers, branch, renderComponent, renderNothing, lifecycle, withState } from 'recompose';
import Spinner from 'internals/Spinner';
import { throttle } from 'lodash';

const styles = require('./styles.css');

const withButton = compose(
  withHandlers({
    onClick: ({ onChange, meta }) => () => onChange(meta.offset + meta.limit)
  })
)(({
  onClick,
  isLoading
}: any) => (
  <div className={styles.root}>
    <button className={styles.button} onClick={onClick}>
      Load more
    </button>
  </div>
));

const withoutButton = compose(
  withState('target', 'setTarget', void 0),
  
  withHandlers({
    onScroll: ({ onChange, target, isLoading }) => throttle(() => {
      if (!target || isLoading) return;
      const offset = 300;
      const offsetTop = target.getBoundingClientRect().top;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const inView = offsetTop - windowHeight <= offset;
      if (inView) return onChange();
    }, 300)
  }),

  lifecycle({
    componentDidMount() {
      window.addEventListener('scroll', this.props.onScroll, false);
    },
    componentWillUnmount() {
      window.removeEventListener('scroll', this.props.onScroll, false);
    }
  })
)(({ target, setTarget }: any) => 
  <div className={styles.root} ref={r => !target && !!r && setTarget(r)} />
);

export default compose(
  withPropsOnChange(['meta'], ({ type, meta }) => ({
    disabled: meta.total <= (meta.offset + meta.limit)
  })),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(Spinner)
  ),
  branch(
    ({ disabled }) => disabled,
    renderNothing
  ),
  branch(
    ({ isMobile, meta }) => isMobile || meta.offset >= (meta.limit * 2),
    renderComponent(withButton),
    renderComponent(withoutButton),
  )
)(renderNothing);
