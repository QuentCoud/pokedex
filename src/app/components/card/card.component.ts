import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'px-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pokemon: any;
  isCardHovered: boolean = false;

  constructor(private router: Router) {}

  getPokemonFrenchName(names: any[]): string {
    const frenchNameObj = names.find((name) => name.language.name === 'fr');
    return frenchNameObj ? frenchNameObj.name : '';
  }

  getPokemonFrenchDescription(flavor_text_entries: any []): string {
    let frenchDescriptionObj = flavor_text_entries.find((description) => description.language.url == "https://pokeapi.co/api/v2/language/5/")
    if(!frenchDescriptionObj) {
      frenchDescriptionObj = flavor_text_entries.find((description) => description.language.url = "https://pokeapi.co/api/v2/language/9/")
    } 
    if(!frenchDescriptionObj) {
      frenchDescriptionObj = flavor_text_entries[0]
    } 
    return frenchDescriptionObj ? frenchDescriptionObj.flavor_text : '';
  }

  goToPokemonDetailsComponent() {
    this.router.navigate(['/details']);
  }
}
