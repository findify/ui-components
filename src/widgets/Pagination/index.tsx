import * as React from 'react';
import { range } from 'lodash';
import { 
  branch, compose, defaultProps, pure, setDisplayName,
  renderNothing, withHandlers, withProps
} from 'recompose';

const { Button } = require('./Button');
const styles = require('./styles.css');

const getRange = ({ current, total, step }) => {
  const min = current - step;
  const max = current + step + 1;
  return range(min < 1 ? 1 : min, max > total ? total + 1 : max);
};

// RESOLVED: TODO: Should be stateless component
export const Pagination: any = compose(
  setDisplayName('Pagination'),
  defaultProps({
    step: 2,
    i18n: {
      previous: 'previews',
      next: 'next'
    }
  }),
  withProps(({ current, total, step, visible }: any) => ({
    showFirst: current > step + 1,
    showLast: current < total - step,
    showPrev: current > step,
    showNext: total - step > current,
    visiblePages: getRange({ current, total, step })
  })),

  withHandlers({
    changePage: ({ action }: any) => page => action({ page })
  })
)(({
  showFirst,
  showLast,
  showPrev,
  showNext,
  visiblePages,
  current,
  total,
  config,
  style,
  ...rest
}: any) => (
  <div className={styles.root} style={style}>
    {
      showPrev &&
      <Button label={config.i18n.previous} prependIcon='fa fa-chevron-left' page={current - 1} {...rest} />
    }
    {showFirst && <Button page={1} label={1} {...rest} />}
    {showFirst && <Button label='...' className={styles.disabled} />}
    {
      visiblePages.map(page =>
        <Button key={page} page={page} label={String(page)} active={current === page} {...rest} />
      )
    }
    {showLast && <Button label='...' className={styles.disabled} />}
    {showLast && <Button page={total} label={total} {...rest} />}
    {
      showNext &&
      <Button label={config.i18n.next} page={current + 1} appendIcon='fa fa-chevron-right' {...rest} />
    }
  </div>
));
