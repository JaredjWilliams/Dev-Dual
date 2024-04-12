import {Pipe} from "@angular/core";

@Pipe({
  name: 'valueConverter'
})

export class ValueConverter {
  transform(value: any): any {
    switch (typeof value) {
      case 'object':
        return value.join(', ');
      default: return value;
    }
  }
}
