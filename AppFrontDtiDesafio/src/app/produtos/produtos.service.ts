import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService{

    constructor(private httpClient: HttpClient) {}

    protected UrlService:  string = "https://localhost:44329/api";

    public obterProdutos(): Observable<Produto[]> {
        return this.httpClient.get<Produto[]>(`${this.UrlService}/produtos`);
    }

    public ExcluirProduto(id: any): Observable<any> {
        return this.httpClient.delete(`${this.UrlService}/produtos/`+ id)
    }

}