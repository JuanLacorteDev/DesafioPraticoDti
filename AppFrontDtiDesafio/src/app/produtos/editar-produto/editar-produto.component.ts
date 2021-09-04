import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';
import { Location } from '@angular/common';
import { FormProdutoComponent } from '../form-produto/form-produto.component';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
})
export class EditarProdutoComponent extends FormProdutoComponent implements OnInit {

  public produto: Produto = new Produto();
  public produtoId: string = '';


  constructor(
    fb: FormBuilder,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private _location: Location,
    private produtoService: ProdutoService) {
    super(fb);
  }

  ngOnInit(): void {
    this.createForm();
    this.produtoId = this.activeRoute.snapshot.params.id;
    this.carregarProduto();
  }


  private carregarProduto() {
    this.produtoService.obterProdutoId(this.produtoId).subscribe(
      result => {
        this.produto = result.data;
        debugger;
        this.formulario.patchValue(this.produto);
      }
    )
  }

  public editarProduto() {
    if(this.formulario.invalid) return;
    this.produto = Object.assign({}, this.produto, this.formulario.value)
    this.produtoService.atualizarProduto(this.produtoId, this.produto).subscribe(
      result => {
        if (result.success) {
          this.route.navigate(['produtos/listar']);
        }
      }
    );
  }

  public voltar() {
    this._location.back();
  }

}
