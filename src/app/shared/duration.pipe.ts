import { Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {

  transform(value: any): any {
    switch (value) {
      case 1:
        return '1/2 Hour';
      case 2:
        return '1 Hour';
      case 3:
        return 'Half Day';
      case 4:
        return 'Full Day';
      default:
        return value.toString();
    }

  }

}
