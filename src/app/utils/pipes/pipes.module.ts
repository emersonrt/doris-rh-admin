import { MaskDataPipe } from './mask-data/mask-data.pipe';
import { MaskDataMesAnoPipe } from './mask-data-mes-ano/mask-data-mes-ano.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
        MaskDataPipe,
        MaskDataMesAnoPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MaskDataPipe,
        MaskDataMesAnoPipe
    ]
})
export class PipesModule { }
