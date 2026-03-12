import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardTest} from './components/card-test/card-test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardTest],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web');
}
