import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { EditarProdutosComponent } from './produtos/editar-produtos/editar-produtos.component';
import { ProdutoService } from './produtos/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalConfirmarExclusaoComponent } from './modal-confirmar-exclusao/modal-confirmar-exclusao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ListarProdutosComponent,
    EditarProdutosComponent,
    ModalConfirmarExclusaoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
