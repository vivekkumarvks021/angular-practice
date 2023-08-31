import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingComponent } from './sorting.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SortingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SortingComponent }]),
    FormsModule,
  ],
})
export class SortingModule {}
