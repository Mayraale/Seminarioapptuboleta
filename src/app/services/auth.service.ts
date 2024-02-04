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

    const dtastorage = await this.storage.get('register')
    this.datalogin = JSON.parse(dtastorage)
    console.log(this.datalogin);
    
    return new Promise((accept, reject) => {

      if(credential.email == this.datalogin.email && credential.password == this.datalogin.password ) {
        this.storage.set('mostreLaIntro', true);
        accept('login correcto')
      } else {
        reject('Usuario o contraseña incorrectos')
      }
    })
  }

  RegisterUser(credential: any){
    
    return new Promise((accept, reject) => {

      if(credential.password == credential.confirmpassword ) {
        this.storage.set('user', credential);
        accept('register correcto')
      } else {
        reject('contraseña incorrecta')
      }
    })

  }
}
