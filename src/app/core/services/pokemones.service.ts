import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PokemonService {
    constructor(
        private http: HttpClient
    ) { }

    getPokemones() {
        return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    }

    getInfoPokemon(id: number) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

}