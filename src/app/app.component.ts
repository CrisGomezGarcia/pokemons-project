import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from './core/services/pokemones.service';
import { ShowDetailsComponent } from './modal/show-details/show-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon';

  pokemonesArray: any[] = [];

  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog

  ) {
    this.getPokemones();
  }

  getPokemones() {
    let pokemones: any;
    this.pokemonService.getPokemones().subscribe({
      next: (data: any) => {
        pokemones = data['results'];
      },
      error: (err) => { },
      complete: () => {
        this.pokemonesArray = pokemones;
        console.log('Pokemones array: ', this.pokemonesArray);

      }
    });
  }

  openDetails(index: number) {
    this.dialog.open(ShowDetailsComponent, {
      width: '500px',
      height: '500px',
      data: {
        indexPokemon: index + 1
      }
    });
  }

}
