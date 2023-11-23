import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiferiService {

  constructor(private httpclient : HttpClient) {}
    
    getTopHeadLines(){
      return this.httpclient.get<RespuestaToHeadLines>('https://api.victorsanmartin.com/feriados/en.json');
    }
}

  


