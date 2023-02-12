
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import { SubordinatesService } from '../profile/services/subordinates.service';
import { loadSubs, loadSubsError, loadSubsSuccess } from './subs.actions';

@Injectable()
export class SubsEffects {
    
  loadsubs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSubs),
      switchMap(() => this.subService.getSubordinates().pipe(
        map(subs => loadSubsSuccess({subs})),
        tap(data=>{
            console.log(data)
        }),
        catchError(() => of(loadSubsError())),
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private subService: SubordinatesService
  ) {}
}
