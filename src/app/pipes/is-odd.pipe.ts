import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isOdd'
})
export class IsOddPipe implements PipeTransform {

  transform(value: number): string {
    return value % 2 == 0 ? 'YES' : 'NO';
  }

}
