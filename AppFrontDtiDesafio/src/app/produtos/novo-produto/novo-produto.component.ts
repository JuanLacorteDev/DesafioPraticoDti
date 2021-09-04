import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { ErrorMessage } from 'ng-bootstrap-form-validation/lib/Models/error-message';
import { FormProdutoComponent } from '../form-produto/form-produto.component';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html'
})
export class NovoProdutoComponent extends FormProdutoComponent implements OnInit {

  constructor(
    fb: FormBuilder,
    private produtoService: ProdutoService,
    private route: Router,
    private _location: Location) {
    super(fb);
  }

  ngOnInit(): void {
    this.createForm();
  }

  public salvarProduto(){
    if(this.formulario.invalid) return

    this.produto = Object.assign({}, this.produto, this.formulario.value)
    this.produtoService.adicionarProduto(this.produto).subscribe(
      result => {
        if(result.success){
          this.route.navigate(['produtos/listar']);
        }
      }
    );
  }

  public voltar(){
    this._location.back();
  }

  public limpar(){
    this.formulario.reset();
  }

}
