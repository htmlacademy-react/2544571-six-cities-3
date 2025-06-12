import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import { ReviewState } from '../../types/review';
import { fetchReviews, postReview } from '../api-actions';

const initialState: ReviewState = {
  items: [],
  status: RequestStatus.Idle
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    clearReviews: (state) => {
      state.items = [];
      state.status = RequestStatus.Idle;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(postReview.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(postReview.pending, (state) => {
        state.status = RequestStatus.Loading;
      });
  },
});

const reviewsActions = {...reviewsSlice.actions, fetchReviews, postReview};

export { reviewsActions, reviewsSlice };
