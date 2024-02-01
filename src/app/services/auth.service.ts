import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storage: Storage
  ) { }

  loginUser(credential: any) {
    return new Promise((accept, reject) => {
      if(credential.email == 'mayra@gmail.com' && credential.password == '12356' ) {
        this.storage.set('mostreLaIntro', true);
        accept('login correcto')
      } else {
        reject('Usuario o contraseña incorrectos')
      }
    })
  }

  RegisterUser(credential: any){}
}
