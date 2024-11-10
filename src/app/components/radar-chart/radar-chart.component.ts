import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.scss',
  providers: [provideEcharts()],
})
export class RadarChartComponent {
option!:EChartsOption
ngOnInit(){
  this.option = {
    title: {
        text: 'Hourly Sales',
        left: 'center'
    },
   
    radar: {
        shape: 'polygon',
        indicator: [
            { name: '00:00', max: 100 },
            { name: '02:00', max: 100 },
            { name: '04:00', max: 100 },
            { name: '06:00', max: 100 },
            { name: '08:00', max: 100 },
            { name: '10:00', max: 100 },
            { name: '12:00', max: 100 },
            { name: '14:00', max: 100 },
            { name: '16:00', max: 100 },
            { name: '18:00', max: 100 },
            { name: '20:00', max: 100 },
            { name: '22:00', max: 100 },
        ],
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(255, 255, 255, 0)', 'rgba(200, 200, 200, 0.1)']
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(100, 100, 100, 0.3)'
            }
        }
    },
    series: [
        {
            name: 'Dataset Comparison',
            type: 'radar',
            areaStyle: {
                opacity: 0.2
            },
            data: [
                {
                    value: [60, 70, 80, 90, 70, 50, 40, 60, 70, 80, 90, 60],
                    name: 'Dataset 1',
                    lineStyle: {
                        color: 'rgba(0, 128, 255, 0.6)'
                    },
                    areaStyle: {
                        color: 'rgba(0, 128, 255, 0.3)'
                    }
                },
                {
                    value: [50, 60, 70, 60, 50, 70, 90, 80, 70, 60, 50, 70],
                    name: 'Dataset 2',
                    lineStyle: {
                        color: 'rgba(0, 255, 128, 0.6)'
                    },
                    areaStyle: {
                        color: 'rgba(0, 255, 128, 0.3)'
                    }
                }
            ]
        }
    ]
};


}
}
