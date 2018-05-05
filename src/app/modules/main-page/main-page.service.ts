import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { EspModel } from "./models/esp.model";

@Injectable()
export class MainPageService {
  private url = 'http://192.168.0.103:3000/';
  constructor(private _http: HttpClient) { }

  public getData(component: string, period: string): Observable<EspModel[]> {
    return this._http.get<EspModel[]>(`${this.url}${component}/${period}`);
  }

  public setRelay(_state: any, component: string, act: string ): void {
    let relay: string = "";
    relay = _state;
    let state = relay;
    this._http.post(`${this.url}${component}/${act}`, {state})
      .subscribe(res => console.log(res));
  }
}
