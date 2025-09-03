import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedAuthGuard } from './auth/med-auth.guard';
import { LayoutComponent } from './containers/layout/layout.component';
import { MedDashComponent } from './containers/med-dash/med-dash.component';
import { MedFormComponent } from './containers/med-form/med-form.component';


const routes: Routes = [
  {path:'med',component:LayoutComponent,children:[
    {path:'dash',component:MedDashComponent},
    {path:'add',component:MedFormComponent},
    {path:'view/:id',component:MedFormComponent},
    {path:'',redirectTo:'/med/dash',pathMatch:'full'}
  ],canActivate:[MedAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
