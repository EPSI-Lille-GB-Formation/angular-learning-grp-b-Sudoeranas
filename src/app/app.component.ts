import { Component } from '@angular/core';
import { CommonModule, getLocaleEraNames } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective],
  template: `
  <h1> Découverte des directives d'attributs </h1>
    <p highlight bg-color="green">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quod aut itaque facilis neque cupiditate sunt sapiente, 
    quae nostrum iure! Enim dignissimos repellat temporibus, repellendus atque maxime quos labore. Dignissimos!</p>

    <p highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quod aut itaque facilis neque cupiditate sunt sapiente, 
    quae nostrum iure! Enim dignissimos repellat temporibus, repellendus atque maxime quos labore. Dignissimos!</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quod aut itaque facilis neque cupiditate sunt sapiente, 
    quae nostrum iure! Enim dignissimos repellat temporibus, repellendus atque maxime quos labore. Dignissimos!</p>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sandbox';
}

