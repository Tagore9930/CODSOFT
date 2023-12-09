import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide: boolean = true;
  registerForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.registerForm = this.fb.group({
      Email: [null, Validators.compose([Validators.required, Validators.email])],
      Password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  onRegister() {
    if(this.registerForm.valid){
      this.openSnackBar("Successfully logged", "success");
    } else {
      this.openSnackBar("Something is wrong", "error");
    }
  }

  openSnackBar(message: string, messageType: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      data: { message, messageType },
    });
  }
}
