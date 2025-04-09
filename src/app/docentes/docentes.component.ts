import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PgPrincipalComponent } from "../pg-principal/pg-principal.component";

@Component({
  selector: 'app-docentes',
  imports: [HeaderComponent, PgPrincipalComponent],
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.scss'
})
export class DocentesComponent {

}
