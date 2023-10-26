import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pager/nav/nav.component';
import { PagerComponent } from './pager/pager.component';
import { ConteudosComponent } from './pager/conteudos/conteudos.component';

import { ConteudosEsqComponent } from './pager/conteudos/conteudos-esq/conteudos-esq.component';
import { ConteudosDirComponent } from './pager/conteudos/conteudos-dir/conteudos-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PagerComponent,
    ConteudosComponent,
 
    ConteudosEsqComponent,
      ConteudosDirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
