import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PagenavComponent } from './components/pagenav/pagenav.component';
import { MtAlertDirective } from './directives/mt-alert.directive';
import { ConfirmAlertComponent } from './components/confirm-alert/confirm-alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavbarComponent, PagenavComponent, MtAlertDirective, ConfirmAlertComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports:[NavbarComponent,PagenavComponent,ConfirmAlertComponent]
})
export class AppCommonModule { }
