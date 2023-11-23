import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Usuario } from '../pages/interfaces/interfaces';
import { IAnimalitos, IPalabra, IPalabras } from '../pages/interfaces/interfaces';
 

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  CrearUsuarios(newUsuario: Usuario): Observable<Usuario>{
    return this.httpclient.post<Usuarios>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  CrearPalabra(newPalabra: IPalabra): Observable<IPalabra>{
    return this.httpclient.post<IPalabras>(`${environment.apiUrl}/palabras`, newPalabra);
  }


}
