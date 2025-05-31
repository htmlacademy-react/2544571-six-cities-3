import { createReducer } from '@reduxjs/toolkit';
import { initOffers, changeActiveCity } from './action';
import { Offer } from '../types/offer';
import { CITIES } from '../mocks/cities';

type StateType = {
  city: string;
  offers: Offer[];
}

const initialState: StateType = {
  city: CITIES[0].name,
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(initOffers, (state, action) => {
      const { offers } = action.payload;
      state.offers = offers;
    });
});

export { reducer };
