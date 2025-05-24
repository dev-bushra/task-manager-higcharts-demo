import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsNavigator from 'highcharts/modules/navigator';

HighchartsMore(Highcharts);
HighchartsNavigator(Highcharts);

@Component({
  selector: 'app-stock-charts',
  templateUrl: './stock-charts.component.html',
  styleUrls: ['./stock-charts.component.css']
})
export class StockChartsComponent implements OnInit {
  
  async ngOnInit() {
    const data = await fetch(
      'https://demo-live-data.highcharts.com/aapl-ohlcv.json'
    ).then(response => response.json());

    // Split the data set into price and volume
    const price = [];
    const volume = [];
    const dataLength = data.length;

    for (let i = 0; i < dataLength; i += 1) {
      price.push([data[i][0], data[i][1]]);
      volume.push([data[i][0], data[i][5]]);
    }

    const baseConfig: Highcharts.Options = {
      plotOptions: {
        series: {
          dataGrouping: {
            units: [['week', [1]], ['month', [1, 2, 3, 4, 6]]]
          }
        }
      },
      navigator: {
        enabled: true
      },
      rangeSelector: {
        enabled: false
      },
      scrollbar: {
        enabled: false
      }
    };

    // Create charts
    const priceChart = Highcharts.stockChart('price-chart', {
      ...baseConfig,
      series: [{
        name: 'AAPL Price',
        type: 'line', // Specify the type of series
        data: price
      }] as Highcharts.SeriesOptionsType[] // Use SeriesOptionsType instead
    });

    const volumeChart = Highcharts.stockChart('volume-chart', {
      ...baseConfig,
      series: [{
        type: 'column', // Specify the type of series
        name: 'Volume',
        data: volume
      }] as Highcharts.SeriesOptionsType[] // Use SeriesOptionsType instead
    });
  }


}
