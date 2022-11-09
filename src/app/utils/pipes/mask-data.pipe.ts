import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'maskData'
})
export class MaskDataPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value) {
            return '';
        } else if (value === 'atual') {
            return value;
        }

        value = value.substring(8, 10) + '/' + value.substring(5, 7) + '/' + value.substring(0, 4);
        return value;
    }

}
