import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide: boolean = true;
  loginForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      Email: [null, Validators.compose([Validators.required, Validators.email])],
      Password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  tagSubmit() {
    if(this.loginForm.valid){
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
