import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {

  constructor(private dialog: MatDialog){}

  abrirModal(){
    this.dialog.open(ModalComponent, {
      width: '50%', // 80% da largura do container pai
      height: '60%', // 70% da altura da janela de visualização
});
}}
