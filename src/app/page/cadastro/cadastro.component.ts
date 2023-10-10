import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/model/cadastro.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  // nome:string='';
  email: string = '';
  senha: string = '';
  mensagem: string = '';
  // bio: string='';

  constructor(private service: CadastroService, private router: Router, 
    private firedata: AngularFireDatabase) { }

  ngOnInit() {
  }


  async registrar() {
    if (this.email && this.senha) {
      try {
        const result = await this.service.cadastrar(this.email, this.senha);

        console.log('Usuário Cadastrado');
        this.router.navigate(['/login'])

      } catch (error) {
        console.error('Erro ao cadastrar usuário', error);
      }
    } else {

      console.log('error');
    }
    this.router.navigate(['/login']);
  }

}
