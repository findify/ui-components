import * as React from 'react';
import * as times from 'lodash/times';

function Rating({
  value,
  reviewsCount,
}: Props) {
  return (
    <div className="findify-rating">
      {times(5, (i: number) => i + 1).map((item: number) => {
        const diff = item - value;
        const modifier = diff === 0.5 ? 'half' : diff <= 0 ? 'full' : 'empty';
        return (
          <span className={`findify-rating__star findify-rating__star_${modifier}`} />
        );
      })}
      {reviewsCount && (
        <span className="findify-rating__reviews-count">{reviewsCount}</span>
      )}
    </div>
  );
}

type Props = {
  value: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
  reviewsCount?: string,
};

export { Rating };
