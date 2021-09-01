import { Routes } from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListarProdutosComponent } from "./produtos/listar-produtos/listar-produtos.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'listar', component: ListarProdutosComponent}
];