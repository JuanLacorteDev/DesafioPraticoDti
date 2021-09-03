import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
})
export class EditarProdutoComponent implements OnInit {
 
  public formulario!: FormGroup;
  public produto: Produto = new Produto();
  public produtoId: string = '';


  constructor(private fb: FormBuilder,
     private route: Router, 
     private activeRoute: ActivatedRoute,
     private _location: Location,
     private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoId = this.activeRoute.snapshot.params.id;
    this.carregarProduto();
    this.createForm()
  }

  private createForm(){
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      valorUnitario: ['', Validators.required],
      quantidade: ['', Validators.required],
    })
  }

  private carregarProduto(){
    this.produtoService.obterProdutoId(this.produtoId).subscribe(
      result => {
        this.produto = result.data;
        this.formulario.patchValue(this.produto);
      }
    )
  }

  public editarProduto(){
    this.produto = Object.assign({}, this.produto, this.formulario.value)
    this.produtoService.atualizarProduto(this.produtoId, this.produto).subscribe(
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

}
