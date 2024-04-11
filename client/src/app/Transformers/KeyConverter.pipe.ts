import {Pipe} from "@angular/core";


@Pipe({
  name: 'keyConverter'
})

export class KeyConverter {
  transform(key: string): string {
    switch (key) {
      case 'favorite-language':
        return 'fav language';
      case 'public-repos':
        return 'public repos';
      case 'total-stars':
        return 'total stars';
      case 'highest-starred':
        return 'highest star count';
      case 'perfect-repos':
        return 'perfect repos';
      default: return key;
    }
  }
}
