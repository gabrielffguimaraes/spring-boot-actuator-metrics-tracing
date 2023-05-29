import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byteToGb'
})
export class ByteToGbPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return (Number(value) / (1024 * 1024 * 1024))?.toFixed(2);
  }

}
