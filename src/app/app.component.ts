import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  // selector sert à invoquer le composant sur une autre page
  selector: 'px-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {

  };

  title = 'Pokedex';
  pokemons: Array<any> = []

  ngOnInit() {
    this.fetchPokemonList();
  }

  getPokemonList(): Observable<any> {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1250';
    return this.http.get<any>(apiUrl);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  async fetchPokemonList() {
    try {
      const data = await this.getPokemonList().toPromise();
      const pokemonList = data.results;
  
      for (const pokemon of pokemonList) {
        const pokemonData = await this.getPokemonDetails(pokemon.url).toPromise();
        const speciesData = await this.getPokemonDetails(pokemonData.species.url).toPromise();
  
        pokemonData.speciesDetails = speciesData;
        this.pokemons.push(pokemonData);
        console.log(pokemonData);
      }
  
      this.pokemons.sort((a, b) => a.speciesDetails.id - b.speciesDetails.id);
      console.log(this.pokemons);
    } catch (error) {
      console.error(error);
    }
  }
}
