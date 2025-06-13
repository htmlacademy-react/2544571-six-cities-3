import {NameSpace, RequestStatus} from '../../const';
import {State} from '../../types/state';
import { Review } from '../../types/review';

export const getReviews = (state: State): Review[] => state[NameSpace.Review].items;
export const getReviewStatus = (state: State): RequestStatus => state[NameSpace.Review].status;

