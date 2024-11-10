import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [OverlayPanelModule ,CheckboxModule ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

}
