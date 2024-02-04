import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  datalogin: any

  constructor(
    private storage: Storage
  ) { }

  async loginUser(credential: any) {

    this.datalogin = await this.storage.get('user')
  
    return new Promise((accept, reject) => {

      if(credential.email == this.datalogin.email && credential.password == this.datalogin.password ) {
        this.storage.set('mostreLaIntro', true);
        accept('login correcto')
      } else {
        reject('Usuario o contraseña incorrectos')
      }
    })
  }

  RegisterUser(credentialreg: any){
    
    return new Promise((accept, reject) => {

      if(credentialreg.password == credentialreg.confirmpassword ) {
        this.storage.set('user', credentialreg);
        accept('register correcto')
      } else {
        reject('contraseña incorrecta')
      }
    })

  }
}
