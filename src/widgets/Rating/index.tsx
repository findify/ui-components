import * as React from 'react';
import * as times from 'lodash/times';

function RatingWidget({
  value,
  reviewsCount,
}: Props) {
  return (
    <div className="findify-rating-widget">
      {times(5, (i: number) => i + 1).map((item: number, i: number) => {
        const diff = item - value;
        const modifier = diff === 0.5 ? 'half' : diff <= 0 ? 'full' : 'empty';
        return (
          <span
            key={i}
            className={`findify-rating-widget__star findify-rating-widget__star_${modifier}`}
          />
        );
      })}
      {reviewsCount && (
        <span className="findify-rating-widget__reviews-count">{reviewsCount}</span>
      )}
    </div>
  );
}

type Props = {
  value: number,
  // value: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
  reviewsCount?: number,
};

export { RatingWidget };
