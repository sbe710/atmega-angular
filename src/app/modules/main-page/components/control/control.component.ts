import { Component, OnInit } from "@angular/core";
import "rxjs/add/operator/map";
import { MainPageService } from "../../main-page.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  constructor(private _service: MainPageService) {
  }

  public temperature: number;
  public humidity: number;
  public relayState: boolean;
  private component: string = 'relay';

  ngOnInit() {
    this.setInitRelay();
  }

  private setInitRelay(): void {
    let last: string = 'state';
    this._service.getData(this.component, last)
      .subscribe(res => {
        let state: any = res;
        this.relayState = state;
      });
  }

  public relayChange(): void {
    let url: string = 'change';
    this.relayState = !this.relayState;
    this._service.setRelay(this.relayState, this.component, url);
  }

  public getTemp(): void {
    let component = 'chart';
    let period = 'hour';
    this._service.getData(component, period)
      .subscribe(res => {
        let _temperature: any = res.map(res => res.temperature);
        let _humidity: any = res.map(res => res.humidity);

        this.showWeather(_temperature, _humidity);
      })
  }

  public showWeather(_temperature: any, _humidity: any) {
    for (let i in _temperature) {
      if (_temperature.hasOwnProperty(i)) {
        this.temperature = _temperature[i];
        console.log(_temperature[i]);
      }
    }
    for (let i in _humidity) {
      if (_humidity.hasOwnProperty(i)) {
        this.temperature = _humidity[length - 1];
      }
    }
  }
}
