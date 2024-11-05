import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChoiceComponent } from './components/choice/choice.component'
import { SvgComponent } from './components/svg/svg.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChoiceComponent,
    SvgComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'choice';
}
