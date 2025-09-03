import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DBMHomeComponent } from './containers/dbm-home/home.component';
import { AppCommonModule } from './modules/common/app-common.module';
import { BgListComponent } from './components/bg-list/bg-list.component';
import { DbmDashboardComponent } from './containers/dbm-dashboard/dbm-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DbmPipeUtility } from './utils/dbm-pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { DbmBGManagerComponent } from './containers/dbm-bg/dbm-bg.component';
import { DbmBPManagerComponent } from './containers/dbm-bp/dbm-bp.component';
import { BgChartComponent } from './components/bg-chart/bg-chart.component';
import { BpListComponent } from './components/bp-list/bp-list.component';
import { BpChartComponent } from './components/bp-chart/bp-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    DBMHomeComponent,
    BgListComponent,
    DbmDashboardComponent,
    DbmBGManagerComponent,
    DbmBPManagerComponent,
    DbmPipeUtility,
    BgChartComponent,
    BpListComponent,
    BpChartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppCommonModule,
    ChartsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
