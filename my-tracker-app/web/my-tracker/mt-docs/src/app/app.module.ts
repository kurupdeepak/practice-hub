import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LayoutComponent } from './containers/layout/layout.component';
import { AppCommonModule } from './modules/common/app-common.module';
import { DocDashComponent } from './containers/doc-dash/doc-dash.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DocDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
