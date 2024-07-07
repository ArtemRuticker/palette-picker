// projects/palette-picker/src/lib/palette-picker.module.ts
import { NgModule } from '@angular/core';
import { PalettePickerComponent } from './palette-picker.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PalettePickerComponent],
  imports: [CommonModule],
  exports: [PalettePickerComponent]
})
export class PalettePickerModule { }
