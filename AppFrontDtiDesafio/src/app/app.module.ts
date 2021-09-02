import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { EditarProdutoComponent } from './produtos/editar-produto/editar-produto.component';
import { ProdutoService } from './produtos/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalConfirmarExclusaoComponent } from './modal-confirmar-exclusao/modal-confirmar-exclusao.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ListarProdutosComponent,
    EditarProdutoComponent,
    ModalConfirmarExclusaoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    ProdutoService,
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
