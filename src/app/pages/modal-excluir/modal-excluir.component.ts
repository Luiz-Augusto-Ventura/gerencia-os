/*
  Código fonte escrito por Luiz Augusto Ventura
  Contato: luizaugustoventu1998@hotmail.com
  https://luizaugustoventura.com.br

  "No que diz respeito ao empenho, ao compromisso, ao esforço, à dedicação, não existe meio termo.
  Ou você faz uma coisa bem feita ou não faz." Ayrton Senna
*/

import { Component, OnInit, Input } from '@angular/core';
import { PessoasService } from 'src/app/services/Pessoas/pessoas.service';
import { OrdensService } from 'src/app/services/Ordens/ordens.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/services/ToastController/toast.service';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrls: ['./modal-excluir.component.css']
})
export class ModalExcluirComponent implements OnInit {

  @Input() segmento: string;
  @Input() id: string;

  constructor(
    private pessoasService: PessoasService,
    private ordensService: OrdensService,
    private toastService: ToastService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  excluir(seg: string, id: string) {
    switch(seg) {
      case 'u':
        this.pessoasService.delete(id)
        .then(() => {
          console.log('Usuário excluído');
          this.toastService.show(true, 'Usuário excluído com sucesso');
        })
        .catch(error => {
          console.log(error);
          this.toastService.show(false, 'Erro ao excluir usuário');
        });
        break;

      case 'o':
        this.ordensService.delete(id)
        .then(() => {
          console.log('Ordem de serviço excluída');
          this.toastService.show(true, 'Ordem de serviço excluída com sucesso');
        })
        .catch(error => {
          console.log(error);
          this.toastService.show(false, 'Erro ao excluir ordem de serviço');
        });
        break;

      default:
        console.log("Informe uma opção válida! 'u' para Usuário ou 'o' para Ordem de Serviço!");
    }
  }

}