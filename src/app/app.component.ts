import { Component } from '@angular/core';
import { Movies } from './movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies: Movies[] = [
    { title: 'Breaking Bad', rating: 0 },
    { title: 'Sons Of Anarchy', rating: 0 },
    { title: 'Black Mirror', rating: 0 },
    { title: 'Peaky Blinders', rating: 0 },
    { title: 'The Haunting of Hill House', rating: 0 },
    { title: 'Better Call Saul', rating: 0 },
    { title: 'Everybody Hates Chris', rating: 0 },
    { title: 'Me, my Wife and Kids', rating: 0 },
    { title: 'Fresh Prince of Bel Air', rating: 0 },
    { title: 'Mr. Robot', rating: 0 },
  ];
}
