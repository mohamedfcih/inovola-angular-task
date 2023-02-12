import { createFeatureSelector, createSelector } from '@ngrx/store';
import { subFeatureKey, SubsRootState, SubsState } from './subs.reducer';

const selectSubsFeature = createFeatureSelector<SubsRootState, SubsState>(
  subFeatureKey
);

export const selectSubs = createSelector(selectSubsFeature, (state) => {
  return state.subs;
});
