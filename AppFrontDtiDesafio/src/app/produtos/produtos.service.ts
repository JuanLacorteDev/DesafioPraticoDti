import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService {

    constructor(private httpClient: HttpClient) { }

    protected UrlService: string = "https://localhost:44329/api";

    public obterProdutos(): Observable<Produto[]> {
        return this.httpClient.get<Produto[]>(`${this.UrlService}/produtos`);
    }

    public ExcluirProduto(id: any): Observable<any> {
        return this.httpClient.delete(`${this.UrlService}/produtos/` + id);
    }

    public adicionarProduto(produto: Produto): Observable<Produto> {
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        return this.httpClient.post<Produto>(`${this.UrlService}/produtos/`, 
        {
        "nome": produto.nome,
        "quantidade": produto.quantidade,
        "valorUnitario": 7.8},
        {headers: headers}
        );
    }

}