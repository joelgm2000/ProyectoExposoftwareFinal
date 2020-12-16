import { Component, OnInit } from '@angular/core';
import { Pendon } from 'src/app/inscripcion/models/pendon';
import { PendonService } from 'src/app/services/pendon.service';
import { SignalRPendonService } from 'src/app/services/signal-rpendon.service';

@Component({
  selector: 'app-pendon-consulta',
  templateUrl: './pendon-consulta.component.html',
  styleUrls: ['./pendon-consulta.component.css']
})
export class PendonConsultaComponent implements OnInit {

  searchText: string;
  pendons: Pendon[];
  constructor(private pendonService: PendonService, private signalRPendon: SignalRPendonService) { }

  ngOnInit(): void {
    this.pendonService.get().subscribe(result => {
      this.pendons = result;
    });
    this.signalRPendon.signalReceived.subscribe((pendon: Pendon) => {
      this.pendons.push(pendon);
    });
  }

}
