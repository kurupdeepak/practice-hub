import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PagenavComponent } from './components/pagenav/pagenav.component';
import { MtAlertDirective } from './directives/mt-alert.directive';
import { ConfirmAlertComponent } from './components/confirm-alert/confirm-alert.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavbarComponent, PagenavComponent, MtAlertDirective, ConfirmAlertComponent, LineChartComponent],
  imports: [
    CommonModule,
    NgbModule,
    ChartsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports:[NavbarComponent,PagenavComponent,LineChartComponent,ConfirmAlertComponent]
})
export class AppCommonModule { }
