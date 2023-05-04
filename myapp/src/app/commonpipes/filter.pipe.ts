import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterstring: string, propName: string): any {
    if(value.length === 0 || filterstring === '') {
      return value;
    }
    const result = [];
    for(const item of value) {
      if (item[propName] === filterstring) {
        result.push(item);
      }
    }
    return result;
  }

}
