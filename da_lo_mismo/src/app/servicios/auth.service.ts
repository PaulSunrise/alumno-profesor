import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users, Usuario, Usuarios } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient: HttpClient) { }

  GetAllUsers():Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  GetUserById(codigo:any): Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }

  IsLoggedIn() {
    return sessionStorage.getItem('username')!=null;
  }

  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }

  IsExiste(){
    if (this.IsLoggedIn()){
      return true
    }
    else{
      return false
    }
  }

  logout() {
    
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userrole');
  }

 //creamos un usuario en json
 CrearUsuario(newUsuario:Usuario): Observable<Usuarios>{
  return this.httpClient.post<Usuarios>(`${environment.apiUrl}/usuarios`, newUsuario);
}


BuscarUsuarioId(id:number):Observable<Usuarios>{
  return this.httpClient.get<Usuarios>(`${environment.apiUrl}/usuarios/?id=${id}`);
}

ActualizarUsuario(usuario:any):Observable<Usuarios>{
  return this.httpClient.put<Usuarios>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
}








}



 
