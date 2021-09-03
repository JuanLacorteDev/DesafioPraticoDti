import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html'
})
export class NovoProdutoComponent implements OnInit {

  public formulario!: FormGroup;
  public valorTransformado: any;
  public produto: Produto = new Produto();


  constructor(private fb: FormBuilder, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(){
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      valorUnitario: ['', Validators.required],
      quantidade: ['', Validators.required],
    })
  }

  public salvarProduto(){
    this.produto = Object.assign({}, this.produto, this.formulario.value)
    this.produtoService.adicionarProduto(this.produto).subscribe(
      result => {
        console.log(result);
      }
    );
  }

}
