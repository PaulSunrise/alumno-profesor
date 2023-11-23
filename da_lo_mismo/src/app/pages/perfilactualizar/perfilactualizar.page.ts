import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfilactualizar',
  templateUrl: './perfilactualizar.page.html',
  styleUrls: ['./perfilactualizar.page.scss'],
})
export class PerfilactualizarPage implements OnInit {

  usuario = {
    username:'',
      password:'',
      role:'',
      nombre:'',
      rut:'',
      email: '',
      asignatura1: '',
      semestre1:'',
      anio_asig1: '',
      horas_asig1:'',
      asignatura2:'',
      semestre2: '',
      anio_asig2: '',
      horas_asig2: '',
      isactive: false,
      id:0 
  }

  constructor(private authservice: AuthService,
              private router: Router, 
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(usuarioID:number){
    this.authservice.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{                 
        console.log(resp);
        this.usuario={
          username: resp[0].username,
          password: resp[0].password,
          role: resp[0].role,
          nombre: resp[0].nombre,
          rut: resp[0].rut,
          email: resp[0].email,
          asignatura1: resp[0].asignatura1,
          semestre1: resp[0].semestre1,
          anio_asig1: resp[0].anio_asig1,
          horas_asig1: resp[0].horas_asig1,
          asignatura2: resp[0].asignatura2,
          semestre2: resp[0].semestre2,
          anio_asig2: resp[0].anio_asig2,
          horas_asig2: resp[0].horas_asig2,
          isactive: resp[0].isactive,    
          id: resp[0].id
          
       
        }
      }
      
    )
  }

  ActualizarUsuario(){
    this.authservice.ActualizarUsuario(this.usuario).subscribe();
    this.mostrarMensaje();
    this.router.navigateByUrl("/inicio");
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario Actualizado ',
      message: 'Su información se ha modificado ' + this.usuario.username,
      buttons: ['OK']
    });
    alerta.present();
  }


}
