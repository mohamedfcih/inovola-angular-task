import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSubs } from 'src/app/state/subs.actions';
import { selectSubs } from 'src/app/state/subs.selectors';
import { AppState } from 'src/app/state/subs.state';
import { SubordinatesService } from '../../services/subordinates.service';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.css']
})
export class SubordinatesComponent implements OnInit {

subordinates$: any;

constructor(
  private store: Store<AppState>
) {}

ngOnInit(): void {
  this.store.dispatch(loadSubs());

  this.subordinates$ = this.store.select(selectSubs);
  this.subordinates$.subscribe((data: any) => {
    console.log(data);
  });
}

}
