import { NgModule } from '@angular/core';
import  { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatGridListModule ,MatPaginatorModule
  } from '@angular/material';

  @NgModule({
    imports: [
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatPaginatorModule
    ],
    exports: [
    CommonModule,
     MatToolbarModule, 
     MatButtonModule, 
     MatCardModule, 
     MatInputModule, 
     MatDialogModule, 
     MatTableModule, 
     MatMenuModule,
     MatIconModule,
     MatProgressSpinnerModule,
     MatGridListModule,
     MatPaginatorModule
     ],
  })
  export class CustomMaterialModule { }

