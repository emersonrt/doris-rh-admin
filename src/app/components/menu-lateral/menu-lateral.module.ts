import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
    declarations: [
        MenuLateralComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        MenuLateralComponent
    ]
})
export class MenuLateralModule { }
