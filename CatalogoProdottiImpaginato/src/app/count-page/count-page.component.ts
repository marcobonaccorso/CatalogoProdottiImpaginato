import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-count-page',
  templateUrl: './count-page.component.html',
  styleUrls: ['./count-page.component.css']
})
export class CountPageComponent implements OnInit {

  constructor(private router: Router, public med: MediatorService) { }

  ngOnInit(): void {
  }
  torna() {
    this.router.navigateByUrl("/PaginaPrincipale");
  }

}
