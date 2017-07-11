import * as React from 'react';
import { compose, withPropsOnChange, withProps, withHandlers, branch, renderComponent, renderNothing, lifecycle, withState } from 'recompose';
import { Button } from 'internals/Button';
import { throttle } from 'lodash';

const styles = require('./styles.css');

const withButton = compose(
  withHandlers({
    onClick: ({ onChange, meta }) => () => onChange(meta.offset + meta.limit)
  })
)(({
  onClick
}: any) => (
  <div className={styles.root}>
    <Button className={styles.button} onClick={onClick}>
      Load more
    </Button>
  </div>
));

const withoutButton = compose(
  // withState('isLoading', 'setLoading', void 0),
  withState('target', 'setTarget', void 0),
  
  withHandlers({
    onScroll: ({ onChange, target }) => throttle(() => {
      if (!target) return;
      const offset = 300;
      const offsetTop = target.getBoundingClientRect().top;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      console.log(offsetTop + windowHeight);
      
      const inView = offsetTop - windowHeight <= offset;
      console.log('In view:', inView);
    }, 500)
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
  <div ref={r => !target && !!r && setTarget(r)} />
);

export default compose(
  withPropsOnChange(['meta'], ({ meta }) => ({
    disabled: meta.total < (meta.offset + meta.limit)
  })),
  branch(
    ({ isMobile }) => isMobile,
    renderComponent(withButton),
    renderComponent(withoutButton),
  )
)(renderNothing);
