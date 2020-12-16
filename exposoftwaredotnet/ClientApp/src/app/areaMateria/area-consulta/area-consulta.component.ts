import { Component, OnInit } from '@angular/core';
import { Area } from '../models/area';
import { AreaService } from 'src/app/services/area.service';
import { SignalRService } from 'src/app/services/signal-r.service';

@Component({
  selector: 'app-area-consulta',
  templateUrl: './area-consulta.component.html',
  styleUrls: ['./area-consulta.component.css']
})
export class AreaConsultaComponent implements OnInit {

  searchText: string;
  areas: Area[];
  constructor(private areaService: AreaService, private signalRService: SignalRService) { }

  ngOnInit(): void {
    this.areaService.get().subscribe(result => {
      this.areas = result;
    });
    this.signalRService.signalReceived.subscribe((area: Area) => {
      this.areas.push(area);
    });
  }

}
