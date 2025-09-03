import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/login.component';
import { RegistrationComponent } from './containers/registration/registration.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppCommonModule } from './modules/common/app-common.module';
import {HttpClientModule} from '@angular/common/http';
import { UserSettingsComponent } from './containers/user-settings/user-settings.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LayoutComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppCommonModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
