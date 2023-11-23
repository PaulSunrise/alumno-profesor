import { Component, OnInit } from '@angular/core';
import { IPalabra,IPalabras } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Capacitor } from '@capacitor/core';
import { BarcodeScannerPlugin } from '@capacitor-community/barcode-scanner/dist/esm/definitions';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public mensaje: string; 

  //npm install -D @types/qrcode --save

  data={
    texto:''
   
  


    
  }

  nombre: any;
  fechas: any;
  
  newPalabra:IPalabra={
    palabra: '',
    username: '',
    fecha: '',
   

  }






  
    getCurrentDate(): string {
      const currentDate = new Date();
      const formattedDate = this.formatDate(currentDate);
      return formattedDate;
    }
  
    formatDate(date: Date): string {
      const day = date.getDate();
      const month = date.getMonth() + 1; 
      const year = date.getFullYear();
  
      return `${this.padNumber(day)}/${this.padNumber(month)}/${year}`;
    }
  
    padNumber(num: number): string {
      return num < 10 ? `0${num}` : `${num}`;
    }

    scanning = false;
  constructor(private apicrud: ApiCrudService,
              private alertcontroller: AlertController,
              private router: Router) { 
    this.mensaje='Duoc';
    this.nombre = sessionStorage.getItem('username');
    this.fechas= this.getCurrentDate();

   }

  ngOnInit() {
  }

  generarQr() {
    const fechaActual = this.getCurrentDate();
  
    this.newPalabra.palabra = this.data.texto;
    this.newPalabra.username = this.nombre;
    this.newPalabra.fecha= this.fechas;
    this.mensaje = `Asignatura: ${this.data.texto}\nUsuario: ${this.nombre}\nFecha: ${fechaActual}`;
    this.apicrud.CrearPalabra(this.newPalabra).subscribe();
    this.mostrarMensaje();
    this.data.texto='';
  }


  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Creación de Asistencia..',
      message:'Su código asistencia ha sido ingresada',
      buttons:['Ok']
    });
    alerta.present();
  }

  async scan() {
    
    this.scanning = true;
    const result = await BarcodeScanner.startScan();

    if (!result.hasContent) {
      console.error('Escaneo erroneo.');
      this.scanning = false;
      return;
    }

    this.mensaje = result.content;
    this.newPalabra.palabra = this.mensaje;
    this.apicrud.CrearPalabra(this.newPalabra).subscribe(() => {
      this.mostrarMensaje();
      this.scanning = false;
      this.data.texto = '';
      this.router.navigateByUrl('/inicio'); 
    });
  }

}
