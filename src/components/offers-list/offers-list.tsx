import { Offers } from '../../types/offer';
import Card from '../card/card';

type OffersListProps = {
  offers: Offers;
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer, id) => {
        const keyValue = `${id}-${offer.id}`;
        return (
          <Card offer={offer} key={keyValue}/>
        );
      })}
    </>);
}

export default OffersList;
