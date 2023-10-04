import { Component } from '@angular/core';
import { PerfilService } from 'src/app/model/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  nomeSelecionado: any = {}
  nomes : any = []

  validarCampo: boolean = false;

  constructor(private service : PerfilService) { }

  ngOnInit(): void {
    this.getNomes();
  }
  getNomes(): void{

   this.service.getNome().subscribe((nomes)=>{
      this.nomes = nomes;
    });
  }

  selecionarNome(nome: any): void {
    console.log('Nome Selecionado', nome);

    this.nomeSelecionado = nome;
    this.validarCampo=false;
  }


  atualizarNome(nome: any): void {
  /*   console.log(nome)
    console.log(nome.id) */

    this.service.updateNome(nome.id, nome.nome, nome.bio, nome.email);
    this.validarCampo=false;
  }

  verificarId():void{
    if (this.nomeSelecionado.id){
      this.atualizarNome(this.nomeSelecionado);
    }else{
      console.log('Não foi possivel atualizar os dados');
    }
    this.nomeSelecionado = {};
  }
}