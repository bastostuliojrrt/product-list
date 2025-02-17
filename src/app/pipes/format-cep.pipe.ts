import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCep',
  standalone: true
})
export class FormatCepPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    
    let firstNumbers = value.toString().slice(0, 5);
    let lastNumbers = value.toString().slice(5); 
    
    return firstNumbers + args[0] + lastNumbers;
  }

}
