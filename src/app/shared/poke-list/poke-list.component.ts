import { PokeApiService } from './../../service/poke-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  constructor(
    private pokeApiService: PokeApiService
  ) {  }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => console.log(res)
    );
  }
}
