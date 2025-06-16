import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const';
import { Offer, City } from './offer.js';
import { RequestStatus } from '../const';

export type AppData = {
  offers: Offer[];
  status: RequestStatus;
};

export type AppProcess = {
  city: City;
  userEmail: string;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
