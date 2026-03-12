import { Component } from '@angular/core';
import { Card } from '@mtg/shared';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-card-test',
  imports: [CommonModule],
  templateUrl: './card-test.html',
  styleUrl: './card-test.scss',
})
export class CardTest {
  card: Card = { id: '1', name: 'Lightning Bolt' };
}
