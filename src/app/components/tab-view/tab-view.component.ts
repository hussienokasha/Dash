import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListComponent } from "../list/list.component";
import { GraphComponent } from "../graph/graph.component";

@Component({
  selector: 'app-tab-view',
  standalone: true,
  imports: [CommonModule, ListComponent, GraphComponent],
  templateUrl: './tab-view.component.html',
  styleUrl: './tab-view.component.scss',
})
export class TabViewComponent {
  isGraph: boolean = true;
}
