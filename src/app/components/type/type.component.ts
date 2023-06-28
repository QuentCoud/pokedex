import { Component, Input } from '@angular/core';

@Component({
  selector: 'px-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent {
  @Input() type: any;

  getTypeName(type: string): string {
    switch (type) {
      case 'normal':
        return 'Normal';
      case 'fire':
        return 'Feu';
      case 'water':
        return 'Eau';
      case 'electric':
        return 'Électrique';
      case 'grass':
        return 'Plante';
      case 'ice':
        return 'Glace';
      case 'fighting':
        return 'Combat';
      case 'poison':
        return 'Poison';
      case 'ground':
        return 'Sol';
      case 'flying':
        return 'Vol';
      case 'psychic':
        return 'Psy';
      case 'bug':
        return 'Insecte';
      case 'rock':
        return 'Roche';
      case 'ghost':
        return 'Spectre';
      case 'dragon':
        return 'Dragon';
      case 'dark':
        return 'Ténèbre';
      case 'steel':
        return 'Acier';
      case 'fairy':
        return 'Fée';
      default:
        return '';
    }
  }
}
