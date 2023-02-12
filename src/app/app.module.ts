import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileModule } from './profile/profile.module';
import { ErrorInterceptor, JwtInterceptor } from './shared/_helpers';
import { EffectsModule } from '@ngrx/effects';
import { SubsEffects } from './state/subs.effects';
import { SubsReducer } from './state/subs.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    ProfileModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      sub: SubsReducer
    },
    {}
  ),
    EffectsModule.forRoot([SubsEffects]),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
