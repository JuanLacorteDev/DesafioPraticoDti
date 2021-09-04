import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation/lib/Models/error-message';
import { Produto } from '../produto';

@Component({
  selector: 'app-form-produto',
  template: ''
})
export class FormProdutoComponent implements OnInit {

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public createForm(){
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      valorUnitario: ['', Validators.required],
      quantidade: ['', Validators.required],
    })
  }

}
