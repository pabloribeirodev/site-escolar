import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PgPrincipalComponent } from "../pg-principal/pg-principal.component";

@Component({
  selector: 'app-minha-escola',
  imports: [HeaderComponent, PgPrincipalComponent],
  templateUrl: './minha-escola.component.html',
  styleUrl: './minha-escola.component.scss'
})
export class MinhaEscolaComponent {

  
}
