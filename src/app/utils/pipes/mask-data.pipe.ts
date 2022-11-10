import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'maskData'
})
export class MaskDataPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value || value === 'atual') {
            return 'Atual';
        }

        value = value.substring(8, 10) + '/' + value.substring(5, 7) + '/' + value.substring(0, 4);
        return value;
    }

}
