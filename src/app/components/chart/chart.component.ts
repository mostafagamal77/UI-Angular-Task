import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EChartsOption } from 'echarts';
import { ChangeLangService } from 'src/app/services/change-lang.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  constructor(public _ChangeLangService: ChangeLangService) {}

  // arabic & english data
  months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Des',
  ];
  months_ar: string[] = [
    'ديسمبر',
    'نوفمبر',
    'اكتوبر',
    'سبتمبر',
    'اغسطس',
    'يوليو',
    'يونيو',
    'مايو',
    'ابريل',
    'مارس',
    'فبراير',
    'يناير',
  ];
  values: any[] = [180, 80, 110, 180, 130, 230, 180, 250, 140, 50, 150, 80];
  values_ar: any[] = [
    180, 80, 110, 180, 130, 230, 180, 250, 140, 50, 150, 80,
  ].reverse();

  // en echarts options
  option: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false,
      },
      data: this.months,
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    tooltip: {
      trigger: 'axis',
      formatter: `<div style="border-radius:6.45px;">
      {c} use <br> <span style="color:#8A74F9;display: block; margin-top: 5px;
      ">1.3% <i class="fa-solid fa-circle-arrow-right"
      style="color:#8A74F9;background-color:#fff;border-radius:50%;rotate:-45deg;" >
      </i></span></div>`,
      backgroundColor: '#1E1B39',
      axisPointer: {
        type: 'line',
        axis: 'x',
        animation: true,
        lineStyle: {
          color: '#8A74F9',
          width: 2,
          type: 'solid',
        },
      },
      textStyle: {
        color: 'white',
        fontSize: 12,
      },
    },
    series: [
      {
        data: this.values,
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbolSize: 16,
        symbol: 'circle',
        itemStyle: {
          color: '#8A74F9',
          borderColor: 'white',
          borderWidth: 1.61,
          opacity: 1,
          shadowBlur: 6.452122211456299,
          shadowColor: '#0D0A2C14',
          shadowOffsetX: 0,
          shadowOffsetY: 6.452122211456299,
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#8A74F9' },
              { offset: 0.5, color: '#8A74F943' },
              { offset: 1, color: '#8A74F900' },
            ],
          },
        },
      },
    ],
  };

  // ar echarts options
  option_ar: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false,
      },
      data: this.months_ar,
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    tooltip: {
      trigger: 'axis',
      formatter: `<div style="border-radius:6.45px;">
      {c} إستخدام <br> <span style="color:#8A74F9;display: block; margin-top: 5px;
      ">1.3% <i class="fa-solid fa-circle-arrow-right"
      style="color:#8A74F9;background-color:#fff;border-radius:50%;rotate:-45deg;" >
      </i></span></div>`,
      backgroundColor: '#1E1B39',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#8A74F9',
          width: 2,
          type: 'solid',
        },
      },
      textStyle: {
        color: 'white',
        fontSize: 12,
      },
    },
    series: [
      {
        data: this.values_ar,
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbolSize: 16,
        symbol: 'circle',
        itemStyle: {
          color: '#8A74F9',
          borderColor: 'white',
          borderWidth: 1.61,
          opacity: 1,
          shadowBlur: 6.452122211456299,
          shadowColor: '#0D0A2C14',
          shadowOffsetX: 0,
          shadowOffsetY: 6.452122211456299,
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#8A74F9' },
              { offset: 0.5, color: '#8A74F943' },
              { offset: 1, color: '#8A74F900' },
            ],
          },
        },
      },
    ],
  };
}
