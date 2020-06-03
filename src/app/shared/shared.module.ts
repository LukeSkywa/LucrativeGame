import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MenuComponent
  ]
})
export class SharedModule { }
