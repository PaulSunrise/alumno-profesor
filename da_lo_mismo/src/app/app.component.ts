import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

interface Componente {
  name: string;
  redirecTo: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Componente[] = [
    {
      name: 'Leer QR',
      redirecTo: '/qr',
      icon: 'qr-code-outline'
    },
    {
      name: 'Feriados/Festivos',
      redirecTo: '/apiferiado',
      icon: 'calendar-outline'
    },

   

 
  ];

  constructor(private router: Router, private authService: AuthService,private alertcontroller: AlertController, private menucontroller: MenuController) {}

  logoutClicked() {
    this.authService.logout(); // Llama a la función de cierre de sesión en tu servicio
    this.router.navigate(['/']); // Redirige al usuario a la página de inicio de sesión o a donde desees después del cierre de sesión
  }

  perfil() {
    const IDU= sessionStorage.getItem('id');
    console.log('ID:', IDU); 

    this.router.navigateByUrl("/perfil/"+IDU);
    this.menucontroller.close();
}
 
}

