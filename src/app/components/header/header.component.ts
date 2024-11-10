import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CalendarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
