import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutComponent } from './containers/layout/layout.component';
import { AppCommonModule } from './modules/common/app-common.module';
import {HttpClientModule} from '@angular/common/http';
import { MedDashComponent } from './containers/med-dash/med-dash.component';
import { MedFormComponent } from './containers/med-form/med-form.component';
import { MedListComponent } from './components/med-list/med-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MedDashComponent,
    MedFormComponent,
    MedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
