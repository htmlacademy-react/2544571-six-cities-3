import ReviewItem from '../review-item/review-item';
import { Review } from '../../types/review';

const MAX_REVIEWS = 10;

type ReviewListProps = {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewListProps): JSX.Element {
  const slicedReviews = reviews.slice(0, MAX_REVIEWS);

  return (
    <ul className="reviews__list">
      {slicedReviews.map((review, id) => {
        const keyValue = `${id}-${review.id}`;
        return (
          <ReviewItem key={keyValue} review={review} />
        );
      })}
    </ul>);
}

export default ReviewsList;
