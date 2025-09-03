import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './containers/layout/layout.component';
import { LoginComponent } from './containers/login/login.component';
import { RegistrationComponent } from './containers/registration/registration.component';
import { UserSettingsComponent } from './containers/user-settings/user-settings.component';


const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
      {path:'login',component:LoginComponent},
      {path:'register',component:RegistrationComponent},
      {path:'user-settings',component:UserSettingsComponent,canActivate:[AuthGuard]},
      {path:'',redirectTo:'login',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
