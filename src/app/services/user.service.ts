import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient) { }

  añadirUsuario(user: any): Observable<any> {
    const url = `${baserUrl}/users/registrar`;
    // Realiza tu solicitud HTTP usando la URL completa
    return this.httpClient.post(url, user);
  }
}
