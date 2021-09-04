import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { ErrorMessage } from 'ng-bootstrap-form-validation/lib/Models/error-message';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html'
})
export class NovoProdutoComponent implements OnInit {

  public formulario!: FormGroup;
  public produto: Produto = new Produto();

  public customErrorMessages: ErrorMessage[] = [
    {
      error: 'required',
      format: (label, error) => `${label?.toUpperCase()} é obrigatório!`
    }, 
    // {
    //   error: 'pattern',
    //   format: (label, error) => `${label?.toUpperCase()} DOESN'T LOOK RIGHT...`
    // }
  ];
  constructor(private fb: FormBuilder, 
    private produtoService: ProdutoService,
     private route: Router,
     private _location: Location) { }

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
    
    if(!this.formulario.valid){
      return;
    }

    this.produto = Object.assign({}, this.produto, this.formulario.value)
    this.produtoService.adicionarProduto(this.produto).subscribe(
      result => {
        if(result.success){
          this.route.navigate(['produtos/listar']);
        }
      }
    );
  }

  public marcarCamposObrigatorios(){
    const controls = this.formulario.controls;
    for(let c in controls){
      this.formulario.controls[c].markAsDirty();
    }
  }

  public voltar(){
    this._location.back();
  }

}
