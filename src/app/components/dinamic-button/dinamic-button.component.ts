import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dinamic-button',
  templateUrl: './dinamic-button.component.html',
  styleUrls: ['./dinamic-button.component.scss'],
})
export class DinamicButtonComponent {
  @Input() color?: string;
  @Input() border?: string;
}
