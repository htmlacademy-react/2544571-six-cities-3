import ReviewItem from '../review-item/review-item';

function ReviewsList(): JSX.Element {
  return (
    <ul className="reviews__list">
      <ReviewItem />
    </ul>);
}

export default ReviewsList;
