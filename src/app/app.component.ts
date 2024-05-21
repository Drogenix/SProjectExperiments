import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataComponent} from "../solution-1/data/data.component";
import {DataComponent2} from "../solution-2/data/data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataComponent, DataComponent2],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SProjectExperiments';
}
