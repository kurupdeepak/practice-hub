import { Component, OnInit } from '@angular/core';
import { AlertOptions, AlertState } from '../../directives/confirm-state';

@Component({
  selector: 'mt-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.css']
})
/**
 * The component displayed in the confirmation modal opened by the ConfirmService.
 */

export class ConfirmAlertComponent {

  options: AlertOptions;

  constructor(private state: AlertState) {
    this.options = state.options;
  }

  yes() {
    this.state.modal.close('confirmed');
  }

  no() {
    this.state.modal.dismiss('not confirmed');
  }
}
