import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-float-label',
  templateUrl: './float-label.component.html',
  styleUrls: ['./float-label.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule
    ]
})
export class FloatLabelComponent {

}
