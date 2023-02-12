import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CircleMenuComponent } from './components/circle-menu/circle-menu.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, CircleMenuComponent, StatsComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SidebarComponent,CircleMenuComponent,StatsComponent],
})
export class SharedModule {}
