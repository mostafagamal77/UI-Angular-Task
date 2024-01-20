import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceText',
})
export class SliceTextPipe implements PipeTransform {
  transform(arr: any[], start: number, end?: number): any[] {
    return arr.slice(start, end);
  }
}
