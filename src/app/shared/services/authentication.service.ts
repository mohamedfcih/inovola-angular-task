import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;
    public messageSubject: BehaviorSubject<string | null>;


    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
        this.messageSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('')!))
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(data:FormData) {
        return this.http.post<any>(`${environment.apiUrl}/login.php`, data)
            .pipe(map(user => {
                if(user.code =='1'){
                    user = user.data
                    localStorage.setItem('user', JSON.stringify(user));
                    this.userSubject.next(user);
                    return user;
                }
                else{
                    this.messageSubject.next(user.message)
                }

            }));
    }

    logout() {
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
        window.location.reload();

    }
}