import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private router: Router, public med: MediatorService) { }

  criterioRicerca: string;
  listaFiltrata: Prodotto[] = [];
  listaCompletaVis: boolean = true;
  listaFiltrataVis: boolean = false;

  ngOnInit(): void {
  }

  cerca() {

    this.listaFiltrata = this.med.prodotti;
    this.listaFiltrata = this.listaFiltrata.filter(p => p.codice==this.criterioRicerca 
    || p.prezzo== this.criterioRicerca 
    || p.descrizione==this.criterioRicerca


  }
}
