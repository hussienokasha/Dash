import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
  providers: [provideEcharts()],
})
export class GraphComponent {
  chartOption!: EChartsOption;
  ngOnInit() {
    this.chartOption = {
      title: [
        {
          text: 'STATIONS ACTIVATES OVERVIEW',
          left: '5%',
          top: '5%',

          textStyle: { fontSize: '12px' },
        },
      ],

      xAxis: {
        type: 'category',
        data: [
          'Station Name 1',
          'Station Name 1',
          'Station Name 1',
          'Station Name 1',
          'Station Name 1',
        ],
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 300,
        interval: 50,
      },
      series: [
        {
          data: [250, 150, 200, 230, 120],
          type: 'bar',
          barWidth: '10px',
          itemStyle: {
            color: '#ff7f5c',
          },
        },
      ],
    };
  }
}
