import { Component, OnInit } from "@angular/core";
import "rxjs/add/operator/map";
import { MainPageService } from "../../main-page.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  constructor(private _service: MainPageService) { }
  public temp;
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
    this.relayState =! this.relayState;
    this._service.setRelay(this.relayState, this.component, url);
  }
}
