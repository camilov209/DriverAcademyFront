import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class AlertActionHelper {
    constructor(private snackBar: MatSnackBar) {}

    showAlertHelper(message: any, isError: boolean) {
        this.snackBar.open(message, '', {
          duration: 3000,
          panelClass: [this.generatePanelClass(isError)]
        });
    }

    generatePanelClass(isError: boolean): string {
        return isError ? 'error-snackbar' : 'success-snackbar';
    }
}