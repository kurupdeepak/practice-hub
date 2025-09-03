import { ValidatorFn, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export const validatePasswordMatch: ValidatorFn = (control: FormGroup): ValidationErrors |null  => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password && confirmPassword && password.value === confirmPassword.value ?   null : {match:true};
};
