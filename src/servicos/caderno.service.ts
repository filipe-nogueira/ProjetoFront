import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caderno } from 'src/app/model/Caderno';
import { delay, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CadernoService {

  private readonly apiListar = 'http://localhost:8080/listaCadernos'
  private readonly apiAddLinha = 'http://localhost:8080/cadastrarLinha'
  private readonly apiAdd = 'http://localhost:8080/cadastrarCadernos'
  private readonly apiRemove = 'http://localhost:8080/listaCadernos/'

  constructor(private http: HttpClient) {}

  list(){
    return this.http.get<Caderno[]>(this.apiListar).pipe(tap(console.log));
  }

  addCaderno(caderno : any ){
    return this.http.post(this.apiAdd,caderno)
  }

  removeCaderno(caderno2 : Caderno){
    return this.http.delete(this.apiRemove + caderno2.id)
  }

  addLinha(linha : any ){
    return this.http.post(this.apiAddLinha,linha)
  }
}
