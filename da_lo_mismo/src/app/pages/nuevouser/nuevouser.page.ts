import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/interfaces';
import { FormBuilder,Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { ToastController } from '@ionic/angular'; 


@Component({
  selector: 'app-nuevouser',
  templateUrl: './nuevouser.page.html',
  styleUrls: ['./nuevouser.page.scss'],
})


export class NuevouserPage implements OnInit {


  loginForm: FormGroup;
  
  newUsuario: Usuario={
      username:'',
      password:'',
      nombre:'',
      rut:'',
      email:'',
      isactive:true

    }

    constructor(private authservice: AuthService,
      private menuController: MenuController,
      private router: Router,
      private alertcontroller: AlertController,
      private toascontroller: ToastController,
      private apiCrud: ApiCrudService,
      private builder: FormBuilder) { 
        this.loginForm=this.builder.group({
          'username': new FormControl("",[Validators.required,Validators.minLength(6)]),
          'password': new FormControl("",[Validators.required,Validators.minLength(8)])
        })
      }
            


  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  Enviar(){
    this.apiCrud.CrearUsuarios(this.newUsuario).subscribe();
    this.router.navigateByUrl("/login");
  }

}


