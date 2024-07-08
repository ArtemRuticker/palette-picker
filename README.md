# Palette Picker Component

The `PalettePickerComponent` is an Angular component that allows users to select a color from a predefined palette. This component is highly configurable and supports two-way data binding, making it easy to integrate with Angular forms. This component was created for porting to Angular and replacing the functionality of Kendo ColorPicker. The component code and documentation were generated using ChatGPT 4.o.

## Installation

To install the component, run:

```bash
npm install palette-picker
```

## Usage

Import the component into your Angular module:

```typescript
import { PalettePickerComponent } from 'palette-picker-component';

@NgModule({
  declarations: [
    // other components
    PalettePickerComponent
  ],
  // other module properties
})
export class AppModule { }
```

Add the component to your template:

```html
<palette-picker [colors]="colorPalette"
                [squareSize]="20"
                [maxColors]="100"
                [numColumns]="10"
                (colorChange)="onColorChange($event)">
</palette-picker>
```

In your component class, define the `colorPalette` and handle the `colorChange` event:

```typescript
export class AppComponent {
  colorPalette: string[] = ['#FF0000', '#00FF00', '#0000FF'];

  onColorChange(color: string): void {
    console.log('Selected color:', color);
  }
}
```

## Example

Here's a complete example of using the `PalettePickerComponent`:

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PalettePickerModule } from 'palette-picker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PalettePickerModule, CommonModule, FormsModule],
  template: `
    <div>
      <h1>Select a color:</h1>
      <palette-picker [(ngModel)]="selectedColor"
                      [colors]="colorPalette"
                      [squareSize]="30"
                      [maxColors]="50"
                      [numColumns]="5"
                      (colorChange)="onColorChange($event)">
      </palette-picker>
      <p>Selected Color: {{ selectedColor }}</p>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  colorPalette: string[] = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
  selectedColor: string = '#00FF00';

  onColorChange(color: string): void {
    console.log('Selected color:', color);
  }
}
```

## Inputs

- **`colors`**: An array of strings representing the colors available in the palette. Default is an empty array.
- **`squareSize`**: The size of each color square in pixels. Default is 20.
- **`maxColors`**: The maximum number of colors that can be displayed in the palette. Default is 100.
- **`numColumns`**: The number of columns in which the colors are displayed. Default is 10.

## Outputs

- **`colorChange`**: An event emitted when the selected color changes. The event payload is the selected color as a string.

## Two-Way Data Binding

This component implements the `ControlValueAccessor` interface, making it compatible with Angular forms. You can use it with `ngModel` for two-way data binding:

```html
<palette-picker [(ngModel)]="selectedColor"></palette-picker>
```

In your component class:

```typescript
export class AppComponent {
  selectedColor: string = '#FF0000';
}
```

## Additional Information

- **Non-Existent Colors**: If you assign a color that does not exist in the palette, it will be added to the palette if there is space (`maxColors` is not reached). If the palette is full, the currently selected color will be replaced with the new color.
- **Multiple Rows**: The colors are displayed in multiple rows if the number of colors exceeds the number of columns (`numColumns`). The component uses CSS flexbox to wrap the color squares into new rows automatically.
