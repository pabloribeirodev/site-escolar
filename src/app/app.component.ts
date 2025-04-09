import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PgPrincipalComponent } from "./pg-principal/pg-principal.component";
import { MinhaEscolaComponent } from "./minha-escola/minha-escola.component";
import { DocentesComponent } from "./docentes/docentes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PgPrincipalComponent, MinhaEscolaComponent, DocentesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'matricula-escolar';
}
