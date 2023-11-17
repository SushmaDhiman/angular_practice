import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports:[CommonModule,MatDialogModule,MatDividerModule,
    MatButtonModule]
})
export class MaterialsModule { }
