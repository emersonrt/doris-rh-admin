import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'maskDataMesAno'
})
export class MaskDataMesAnoPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value || value === 'atual') {
            return 'Atual';
        }

        value = value.substring(5, 7) + '/' + value.substring(0, 4);
        return value;
    }

}
