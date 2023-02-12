import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/_helpers/auth.guard';
import { ProfileContainerComponent } from './components/profile-container/profile-container.component';

;

const routes: Routes = [
  {
    path: '', component: ProfileContainerComponent, canActivate: [AuthGuard] ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class profileRoutingModule { }