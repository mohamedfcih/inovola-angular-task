import {createAction, props} from '@ngrx/store';
import { Subordinate } from '../profile/models/subordinate';

export const loadSubs = createAction('[Sub List] Load Subs');
export const loadSubsSuccess = createAction('[Sub List] Load Subs Success', props<{subs: any}>());
export const loadSubsError = createAction('[Sub List] Load Subs Error');
