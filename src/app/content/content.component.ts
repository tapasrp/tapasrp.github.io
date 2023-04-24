import { Component } from '@angular/core';
import { Resume } from '../models/resume';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  // resume = new Resume("", "Sonali", "", "", "", []);
  panelOpenState = false;
}
