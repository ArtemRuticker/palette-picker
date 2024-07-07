import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'palette-picker',
  templateUrl: './palette-picker.component.html',
  styleUrls: ['./palette-picker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: PalettePickerComponent,
    multi: true
  }]
})
export class PalettePickerComponent implements OnInit, ControlValueAccessor {
  @Input() colors: string[] = [];
  @Input() squareSize: number = 20;
  @Input() maxColors: number = 100;
  @Input() numColumns: number = 10;  
  @Output() colorChange = new EventEmitter<string>();

  selectedColor: string = '';

  private onChange: (color: string) => void = () => {};
  private onTouched: () => void = () => {};


  constructor() { }

  ngOnInit(): void {}

  selectColor(color: string): void {
    if (!this.colors.includes(color)) {
      this.colors.push(color);
    }
    this.selectedColor = color;
    
    if (this.onChange) {
      this.onChange(color);
    }
    this.colorChange.emit(color);
  }

  writeValue(color: string): void {
    if (color == null)
      return;
    if (!this.colors.includes(color)) {
      if (this.colors.length < this.maxColors) {        
        this.colors.push(color);
      } else {
        const selectedIndex = this.colors.indexOf(this.selectedColor);
        if (selectedIndex !== -1) {
          this.colors[selectedIndex] = color;
        }
      }
    }
    this.selectedColor = color;
  }

  registerOnChange(fn: (color: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
