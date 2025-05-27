import { Offers } from '../../types/offer';
import Card from '../card/card';

type NearOffersListProps = {
  offers: Offers;
}

function NearOffersList({ offers}: NearOffersListProps): JSX.Element {
  const slicedOffers = offers.slice(0,3);
  return (
    <>
      {slicedOffers.map((offer, id) => {
        const keyValue = `${id}-${offer.id}`;
        return (
          <Card
            offer={offer}
            key={keyValue}
            isNearOffer
          />
        );
      })}
    </>);
}

export default NearOffersList;
