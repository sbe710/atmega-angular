import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';
import { Chart } from 'chart.js';
import { MainPageService } from "../../main-page.service";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {

  private chart = [];
  private avgPower: number;
  private period: string;
  constructor(private _service: MainPageService) {
  }

  @ViewChild("info")
  private infoRef: ElementRef;

  @ViewChild("chart")
  private chartRef: ElementRef;

  ngOnInit() {
  }

  public getPeriodData(event): void {
    this.viewInfo();
    let component: string = 'chart';
    this.period = event.target.innerHTML.toLowerCase();
    this._service.getData(component, this.period)
      .subscribe(res => {
        let power = res.map(res => res.power);
        let allDates = res.map(res => res.dt);
        let temperature = res.map(res => res.temperature);
        let dates = [];
        allDates.forEach((res) => {
          let jsDate = new Date(res);
          dates.push(jsDate.toLocaleTimeString('ru'))
        });
        this.createChart(dates.reverse(), power.reverse());
        this.calcAvgPower(power);
      })
  }

  private calcAvgPower(power): void {
    let result = 0;
    let avg: any;
    for (let i in power) {
      if (power.hasOwnProperty(i)) {
        result += power[i];
      }
    }
    avg = result / power.length;
    console.log(power.length);
    avg = avg.toFixed(2);
    this.avgPower = avg;
    console.log(this.avgPower);
  }

  private viewInfo(): void {
    this.infoRef.nativeElement.style.opacity = 1;
  }

  private createChart(dates, power): void {
    this.chartRef.nativeElement.style.opacity = 1;
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            data: power,
            borderColor: "#3cba9f",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
