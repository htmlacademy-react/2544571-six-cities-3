import { createReducer } from '@reduxjs/toolkit';
import { addOffers} from './action';
import { Offer } from '../types/offer';

type StateType = {
  city: string;
  offers: Offer[];
}

const initialState: StateType = {
  city: 'Paris',
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOffers, (state, action) => {
      const { offers } = action.payload;
      state.offers = offers;
    });
});

export { reducer };
