import {createReducer, on} from '@ngrx/store';
import { Subordinate } from '../profile/models/subordinate';
import { loadSubsSuccess } from './subs.actions';

export interface SubsState {
  [ID: string]: Subordinate;
}

export const subFeatureKey = 'sub';

export interface SubsRootState {
  [subFeatureKey]: SubsState;
}

const initialState: SubsState = {};

export const SubsReducer = createReducer(
  initialState,
  on(loadSubsSuccess, (state, { subs }) => {   
    return { 
        ...state,
        subs: subs
       }
  }),
);