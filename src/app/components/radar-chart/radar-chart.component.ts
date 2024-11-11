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
   
    radar: {
        shape: 'polygon',
        radius: '65%',
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
                color: ['rgba(255, 255, 255, 0)', 'rgba(200, 200, 200, 0.05)']
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0, 0, 0, 0.2)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(0, 0, 0, 0.15)'
            }
        }
    },
    series: [
        {
            name: 'Dataset Comparison',
            type: 'radar',
            symbol: 'none', // Remove point symbols for smooth line effect
            areaStyle: {
                opacity: 0.3
            },
            lineStyle: {
                width: 2, // Thicker lines can help achieve a smoother look
                color: 'rgba(0, 128, 255, 0.7)'
            },
            data: [
                {
                    value: [60, 70, 80, 90, 70, 50, 40, 60, 70, 80, 90, 60],
                    name: 'Dataset 1',
                    areaStyle: {
                        color: 'rgba(0, 128, 255, 0.2)'
                    }
                },
                {
                    value: [50, 60, 70, 60, 50, 70, 90, 80, 70, 60, 50, 70],
                    name: 'Dataset 2',
                    lineStyle: {
                        color: 'rgba(0, 255, 128, 0.7)'
                    },
                    areaStyle: {
                        color: 'rgba(0, 255, 128, 0.2)'
                    }
                }
            ]
        }
    ]
};





}
}
