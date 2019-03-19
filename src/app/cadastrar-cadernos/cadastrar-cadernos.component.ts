import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Caderno } from '../model/Caderno';
import { CadernoService } from 'src/servicos/caderno.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cadernos',
  templateUrl: './cadastrar-cadernos.component.html',
  styleUrls: ['./cadastrar-cadernos.component.css']
})
export class CadastrarCadernosComponent implements OnInit {

  constructor(private service: CadernoService) { }

  ngOnInit() {
  }

  caderno: any = {
    fabricante: "",
    qtdFolhas: ""
  }

  linha: any = {
    id: "",
    conteudo: "",
    idCaderno: ""
  }



  onSubmit(form : FormGroup){

     this.service.addCaderno(this.caderno).subscribe(resposta => {
       
     })

     this.service.addLinha(this.linha).subscribe()

     form.reset()

  }

  consultaCadastro(fabricante){
    if(fabricante != ""){
      
    }
  }
}
