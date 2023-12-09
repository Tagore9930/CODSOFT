import { AbstractControl, Validators } from '@angular/forms';

export class PasswordValidation {
  static passwordValidation(): any {
    return (AC: AbstractControl): any => {
      const password = AC?.get('Password')?.value;
      const confirmpassword = AC?.get('ConfirmPassword')?.value;

      try {
        if (password != null || confirmpassword != null) {
          if (password !== confirmpassword) {
            return AC?.get('ConfirmPassword')?.setErrors({ validatePassword: true });
          } else {
            AC?.get('ConfirmPassword')?.setValidators(Validators.compose([Validators.required, Validators.minLength(8)]));
            AC?.get('ConfirmPassword')?.updateValueAndValidity();
          }
        }
      } catch (error) { };
    };
  }
}
