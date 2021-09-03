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

    public obterProdutoId(id: any): Observable<any>{
        return this.httpClient.get(`${this.UrlService}/produtos/` + id);
    }

    public adicionarProduto(produto: Produto): Observable<any> {
        return this.httpClient.post<Produto>(`${this.UrlService}/produtos/`, JSON.parse(JSON.stringify(produto)));
    }

    public atualizarProduto(id: any, produto: Produto): Observable<any> {
        return this.httpClient.put<Produto>(`${this.UrlService}/produtos/` + id, JSON.parse(JSON.stringify(produto)));
    }

}