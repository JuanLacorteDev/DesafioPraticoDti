import { Routes } from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { EditarProdutoComponent } from "./produtos/editar-produto/editar-produto.component";
import { ListarProdutosComponent } from "./produtos/listar-produtos/listar-produtos.component";
import { NovoProdutoComponent } from "./produtos/novo-produto/novo-produto.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'produtos/listar', component: ListarProdutosComponent},
    { path: 'produtos/novo', component: NovoProdutoComponent},
    { path: 'produtos/editar/:id', component: EditarProdutoComponent}
];