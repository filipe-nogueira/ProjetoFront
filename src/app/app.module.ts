import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ListaCadernosComponent } from './lista-cadernos/lista-cadernos.component';
import { CadastrarCadernosComponent } from './cadastrar-cadernos/cadastrar-cadernos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaCadernosComponent,
    CadastrarCadernosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
