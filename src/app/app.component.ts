import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PgPrincipalComponent } from "./pg-principal/pg-principal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PgPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'matricula-escolar';
}
