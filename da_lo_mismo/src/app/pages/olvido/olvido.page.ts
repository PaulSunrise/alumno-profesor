import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.page.html',
  styleUrls: ['./olvido.page.scss'],
})

export class OlvidoPage implements OnInit {

  usuario={
    email:'',
  }

  constructor(private menuController: MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  async Enviar(){
    const alert = await this.alertController.create({
      header: 'Gracias',
      message: 'Te hemos enviado un correo, favor revise y siga las instrucciones',
      buttons: ['OK']
      
    });

    
    await alert.present();
     this.usuario.email="";
    
}
}