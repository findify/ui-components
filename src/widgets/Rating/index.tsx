import { hasModifier } from 'tslint/lib';
import * as React from 'react';
import * as cx from 'classnames';
import { mapProps } from 'recompose';

const styles = require('./styles.css');

const Start = mapProps(({ diff }: any) => ({
  iconClass: `fa-star${diff === 0.5 ? '-half-o' : diff <= 0 ? '' : '-o'}`
}))
(({ iconClass }: any) =>
  <span className={cx(styles.star, iconClass, 'fa')} />
);

export const Rating = (({
  value,
  count,
}: Props) =>
  <div className={styles.wrap}>
    <div className={styles.stars}>
      {
        [...Array(5).keys()].map((item: number) =>  <Start key={item} diff={item - value} />)
      }
    </div>
    {
      count && (
        <span className={styles.count}>({ count })</span>
      )
    }
  </div>
);

type Props = {
  value: number,
  // value: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
  count?: number,
};
