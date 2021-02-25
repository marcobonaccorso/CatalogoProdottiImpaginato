import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';
import { Prodotto } from '../prodotto';
//commento prova
@Component({
  selector: 'app-pagina-principale',
  templateUrl: './pagina-principale.component.html',
  styleUrls: ['./pagina-principale.component.css']
})
export class PaginaPrincipaleComponent implements OnInit {
  @Output() cercaEvent = new EventEmitter<string>();

  prodotto = new Prodotto();

  constructor(private router: Router, public med: MediatorService) { }

  ngOnInit(): void {
  }

  aggiungi() {
    this.med.prodotti.push(this.prodotto);
  }

  torna() {
    this.router.navigateByUrl("/PaginaPrincipale");
  }

  cancellaProdotto(i: number) {
    this.med.prodotti.splice(i, 1);
  }
  conta() {
this.router.navigateByUrl("/CountPage");
  }
}
