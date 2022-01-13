import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/dialog-delete/dialog-delete.component'; 

@Injectable({
  providedIn: 'root'
})
export class DialogDeleteService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog() {
    return this.dialog.open(DialogDeleteComponent, {
      width: '390px',
      disableClose: true,
      position: {top: '10px'}
    });
  }
}
