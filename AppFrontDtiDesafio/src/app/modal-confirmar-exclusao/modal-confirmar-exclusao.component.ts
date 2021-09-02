import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmar-exclusao',
  templateUrl: './modal-confirmar-exclusao.component.html',
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: dark;
    }
    .modal-header{
      background-color: palevioletred;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }`
  ]
})
export class ModalConfirmarExclusaoComponent {

  constructor(private modalService: NgbModal) { }
  @Input() public produtoNome: string = '';
  @Output() public confimaExclusao: EventEmitter<boolean> = new EventEmitter<boolean>();


  public open(content: any) {
    this.modalService.open(content);
  }

  public AbrirModalExclusao(){
    const element : HTMLElement = document.getElementById('openModal') as HTMLElement;
    element.click();
  }

  public ConfimarExclusao(){
    this.confimaExclusao.emit(true);
    this.modalService.dismissAll();
  }
}
