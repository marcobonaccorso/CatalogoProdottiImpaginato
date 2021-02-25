import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-pagina-principale',
  templateUrl: './pagina-principale.component.html',
  styleUrls: ['./pagina-principale.component.css']
})
export class PaginaPrincipaleComponent implements OnInit {

  prodotto = new Prodotto();

  constructor(private router: Router, public med: MediatorService) { }

  ngOnInit(): void {
  }

  aggiungi() {
    this.med.prodotti.push(this.prodotto);
  }

  conta() {
    this.router.navigateByUrl("/CountPage");
  }

  cancellaProdotto(i: number) {
    this.med.prodotti.splice(i, 1);
  }
  
}
