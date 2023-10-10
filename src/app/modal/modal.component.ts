import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  
})
export class ModalComponent {

  constructor(private dialog: MatDialog){}
  
  fecharModal(){
    this.dialog.closeAll();
  }
}
