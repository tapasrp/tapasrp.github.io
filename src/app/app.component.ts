import { Component } from '@angular/core';
import { Resume } from './models/resume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-app';
  resume = new Resume("", "Tapas Pati", "", "", "", []);
  showFiller = false;


}