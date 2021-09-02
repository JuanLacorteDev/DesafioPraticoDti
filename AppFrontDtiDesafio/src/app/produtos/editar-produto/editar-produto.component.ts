import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
})
export class EditarProdutoComponent implements OnInit {
 
  public formulario :FormGroup;

  constructor() { 

    this.formulario = new FormGroup({
      nome : new FormControl(),
      valor:  new FormControl(),
      quantidade: new FormControl()
    })
    
  }

  ngOnInit(): void {
  }

}
