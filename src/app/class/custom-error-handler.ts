import { ErrorHandler, Injectable, OnDestroy } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';

@Injectable()
export class CustomErrorHandler implements ErrorHandler, OnDestroy {
  snackBarRef: MatSnackBarRef<SimpleSnackBar> | undefined;
  constructor(private _matSnackBar: MatSnackBar) {}
  handleError(error: any): void {
    this.snackBarRef = this._matSnackBar.open(error?.message, 'close', {
      duration: 3000,
      //   panelClass: ['mat-snackbar'],
    });
    console.error(error);
  }

  ngOnDestroy(): void {
    console.log('Des');

    this.snackBarRef?.dismiss();
  }
}
