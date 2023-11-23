import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ApiferiService } from 'src/app/servicios/apiferi.service';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-apiferiado',
  templateUrl: './apiferiado.page.html',
  styleUrls: ['./apiferiado.page.scss'],
})
export class ApiferiadoPage implements OnInit {

  feriado: Data[]=[];

  constructor(private apiferiservice: ApiferiService) { }

  ngOnInit() {
    this.apiferiservice.getTopHeadLines().subscribe(resp => {
      console.log('feriados',resp);
      this.feriado.push(...resp.data);
    });
  }

}





