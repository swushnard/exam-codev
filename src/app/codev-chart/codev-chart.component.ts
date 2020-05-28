import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Data } from '../model/data';
import { Observable } from 'rxjs';
import { ChartService } from '../services/chart.service';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
  selector: 'app-codev-chart',
  templateUrl: './codev-chart.component.html',
  styleUrls: ['./codev-chart.component.scss'],
})
export class CodevChartComponent implements OnInit, OnChanges {
  @Input() model: Observable<Data>;
  @Input() label: Observable<string>;

  private series;

  public options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: ' ',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        data: []
      },
    ],
    lang: {
      noData: 'No Data to Display',
    },
  };


  constructor() {
  }

  ngOnInit() {
    Highcharts.chart('container', this.options );

  }
  ngOnChanges(changes: SimpleChanges) {
      if (changes?.model?.currentValue) {

          this.series = changes.model.currentValue;
          this.options.series[0] =  { data: this.series.raw };
          this.options.title = { text: this.label };

          // Should be better if this be handled in a separate Chart Service, ill just put
          // it temporarily here

          if ( this.series.type === 'donut') {
            this.options.plotOptions.pie = { innerSize: '65%'};
          } else {
            this.options.plotOptions.pie = { innerSize: null};
          }
          Highcharts.chart('container', this.options );
      }
  }
}
