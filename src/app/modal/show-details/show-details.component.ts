import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonService } from 'src/app/core/services/pokemones.service';

@Component({
    selector: 'app-show-details',
    templateUrl: 'show-details.component.html'
})

export class ShowDetailsComponent implements OnInit {

    pokemon: any;

    constructor(
        public dialogRef: MatDialogRef<ShowDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private pokemonService: PokemonService
    ) {
        this.getDetailsPokemon();

    }

    ngOnInit() { }

    getDetailsPokemon() {
        let pokemonInfoArray: any;
        this.pokemonService.getInfoPokemon(this.data.indexPokemon).subscribe({
            next: (data: any) => {
                pokemonInfoArray = data;
                console.log('info pokemon => ', data);
            },
            error: (err) => { },
            complete: () => {
                this.pokemon = pokemonInfoArray;
               

            }
        });
    }

}