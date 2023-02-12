import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profileRoutingModule } from './profile-routing.module';
import { ProfileContainerComponent } from './components/profile-container/profile-container.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { Tab3Component } from './components/tab3/tab3.component';
import { Tab4Component } from './components/tab4/tab4.component';
import { Tab5Component } from './components/tab5/tab5.component';
import { SubordinatesComponent } from './components/subordinates/subordinates.component';

@NgModule({
  declarations: [ProfileContainerComponent, DashboardComponent, Tab1Component, Tab2Component, Tab3Component, Tab4Component, Tab5Component, SubordinatesComponent],
  imports: [CommonModule, profileRoutingModule, SharedModule],
})
export class ProfileModule {}
