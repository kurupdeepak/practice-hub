import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocGuard } from './auth/doc.guard';
import { DocDashComponent } from './containers/doc-dash/doc-dash.component';
import { LayoutComponent } from './containers/layout/layout.component';


const routes: Routes = [
  {path:'docs',component:LayoutComponent,children:[
    {path:'dash',component:DocDashComponent},
    {path:'',redirectTo:'/docs/dash',pathMatch:'full'}
  ], canActivate: [DocGuard]},
  {path:'',redirectTo:'/docs/dash',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
