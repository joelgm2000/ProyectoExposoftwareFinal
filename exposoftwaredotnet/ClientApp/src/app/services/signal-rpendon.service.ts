import { Injectable, Inject, EventEmitter } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { Pendon } from '../inscripcion/models/pendon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignalRPendonService {

  baseUrl: string;
  private hubConnection: signalR.HubConnection;
  signalReceived = new EventEmitter<Pendon>();

  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.buildConnection();
    this.startConnection();
  }

  private buildConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.baseUrl + "signalHub") // use your api adress here and make sure you use right hub name.
      .build();
  };

  private startConnection = () => {
    this.hubConnection
      .start()
      .then(() => {
        console.log("Connection Started...");
        this.registerSignalEvents();
      })
      .catch(err => {
        console.log("Error while starting connection: " + err);

        //if you get error try to start connection again after 3 seconds.
        setTimeout(function () {
          this.startConnection();
        }, 3000);
      });
  };

  private registerSignalEvents() {
    this.hubConnection.on("PendonRegistrada", (data: Pendon) => {
      this.signalReceived.emit(data);
    });
  }

}
