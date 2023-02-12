import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Subordinate, Subordinates } from '../models/subordinate';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubordinatesService {
  constructor(private http: HttpClient) {}

  getSubordinates(): Observable<Subordinate[]> {
    return this.http
      .get<Subordinates>(`${environment.apiUrl}/subordinates.php`)
      .pipe(map((subs) => subs.data));
  }
}
