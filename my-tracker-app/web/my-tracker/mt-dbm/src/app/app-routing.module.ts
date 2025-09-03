import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DBMHomeComponent } from './containers/dbm-home/home.component';
import { DbmDashboardComponent } from './containers/dbm-dashboard/dbm-dashboard.component';
import { DbmBGManagerComponent } from './containers/dbm-bg/dbm-bg.component';
import { DbmBPManagerComponent } from './containers/dbm-bp/dbm-bp.component';
import { DbmAuthGuard } from './auth/dbm-auth.guard';



const routes: Routes = [
    {path:'',redirectTo:'dbm',pathMatch:'full'},
    {path:'dbm',component:DBMHomeComponent,children:[
      {path:'dash',component:DbmDashboardComponent},
      {path:'add/bg',component:DbmBGManagerComponent},
      {path:'view/bg/:id',component:DbmBGManagerComponent},
      {path:'add/bpm',component:DbmBPManagerComponent},
      {path:'',redirectTo:'dash',pathMatch:'full'}
    ], canActivate: [DbmAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
