import { Component, OnInit, ViewChild } from '@angular/core';
import { faPencilAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalConfirmarExclusaoComponent } from 'src/app/modal-confirmar-exclusao/modal-confirmar-exclusao.component';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html'
})
export class ListarProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  @ViewChild('modalConfirmarExcluir') modalConfirmarExclusao: ModalConfirmarExclusaoComponent | undefined;


  public produtos: Produto[] = [];
  public columns: any[] = [];
  public produtoId: string = '';
  public produtoNome: string = '';
  public faTrash = faTrash;
  public faPencil = faPencilAlt;
  public faNew = faPlus

  ngOnInit(): void {
    this.carregarLista();
  }

  public async abrirModalExclusao(id: any) {
    this.produtoId = id;
    this.produtoNome = this.produtos.find(p => p.id == id)?.nome ?? '';
    this.modalConfirmarExclusao?.AbrirModalExclusao();

  }


  public excluir(event: any) {
    this.produtoService.ExcluirProduto(this.produtoId).subscribe(
      result => {
        console.log(result);
        if (result.success) {
          this.carregarLista();
        }
      }
    )
  }

  public carregarLista() {
    this.produtoService.obterProdutos()
      .subscribe(
        result => {
          this.produtos = result;
          console.table(this.produtos);
        }
      )
  }

  public editar(id: any) {

  }

}
