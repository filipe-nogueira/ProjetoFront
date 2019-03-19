import { Component, OnInit } from '@angular/core';
import { CadernoService } from 'src/servicos/caderno.service';
import { Caderno } from '../model/Caderno';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-cadernos',
  templateUrl: './lista-cadernos.component.html',
  styleUrls: ['./lista-cadernos.component.css']
})
export class ListaCadernosComponent implements OnInit {

  cadernos: Caderno[]

  cadernos$: Observable<Caderno[]>
  

  constructor(private service: CadernoService) { }

  ngOnInit() {
    this.cadernos$ = this.service.list();
  }

  remover(caderno){
    console.log(caderno)
    this.service.removeCaderno(caderno).subscribe()
    this.cadernos$ = this.service.list();
  }

  atualizar(caderno){
    
  }

}
