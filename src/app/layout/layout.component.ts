import { Component } from '@angular/core';
import { SideBarComponent } from "../components/side-bar/side-bar.component";
import { HeaderComponent } from "../components/header/header.component";
import { StatsComponent } from "../components/stats/stats.component";
import { TabViewComponent } from "../components/tab-view/tab-view.component";
import { RadarChartComponent } from "../components/radar-chart/radar-chart.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SideBarComponent, HeaderComponent, StatsComponent, TabViewComponent, RadarChartComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
