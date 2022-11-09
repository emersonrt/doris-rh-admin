import { MaskDataPipe } from './mask-data.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
        MaskDataPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MaskDataPipe
    ]
})
export class PipesModule { }
