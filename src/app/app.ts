import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactPage } from './contact-page/contact-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContactPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-app');
}
