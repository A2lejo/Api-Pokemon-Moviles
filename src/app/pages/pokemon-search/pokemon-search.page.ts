import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.page.html',
  styleUrls: ['./pokemon-search.page.scss'],
})
export class PokemonSearchPage {
  search: string = '';
  pokemon: any = null;

  async handleSearch() {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.search.toLowerCase()}`);
      this.pokemon = response.data;
    } catch (error) {
      console.error('Error fetching the Pokémon data', error);
      this.pokemon = null;
    }
  }
}