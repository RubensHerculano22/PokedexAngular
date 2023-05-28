import { PokeApiService } from './../../service/poke-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {

  public getAllPokemons: any;

  constructor(
    private pokeApiService: PokeApiService
  ) {  }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons);
      }
    );
  }
}
