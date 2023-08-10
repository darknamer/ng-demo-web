import { Component } from '@angular/core';
import { HeroItem } from '../../view-models/hero-item';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {
  heroes: HeroItem[] = [
    {image: 'assets/cap-america.jpg', title: 'Cap America', description: ''},
    {image: 'assets/huck.jpg', title: 'Huck', description: ''},
    {image: 'assets/iron-man.jpg', title: 'Iron Man', description: ''},   

  ];
}
