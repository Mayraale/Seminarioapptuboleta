import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ToastController, ModalController } from '@ionic/angular'
import { AuthService } from '../services/auth.service'
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  slides = [
    {
      image: "../../assets/Images/fondo.svg",
      titles: "¡Hola, viajero!",
      subtitles: "¡Bienvenido a nuestra aplicación! Estamos aquí para hacer que tu experiencia de viaje sea más fácil y emocionante. Explora, descubre y reserva tus próximas aventuras con nosotros."
    },
    {
      image: "../../assets/Images/fondo 1.svg",
      titles: "¡Explora el mundo con nosotros!",
      subtitles: "Descubre destinos desconocidos, reserva tus vuelos y alojamiento con facilidad, y personaliza tu viaje a tu gusto. ¡Únete a nosotros y transforma tus sueños de viaje en realidad!"
    },
    {
      image: "../../assets/Images/fondo 2.svg",
      titles: "¡No esperes más!",
      subtitles: "../../assets/Images/16-56-52-749_512.gif"
    },
    {
      image: "",
      titles: "Inciar Sesión",
      subtitles: "¿ No tienes una cuenta ? "
    },
    
  ]

  loginForm: FormGroup;
  registerForm: FormGroup;
  isAlertLogin = false;
  isAlertRegister = false;
  prueba: any;

  validation_message = {
    email: [
      {type: "required", message: "El correo es obligatorio!"},
      {type: "pattern", message: "El correo no es valido"}
    ],
    password: [
      {type: "required", message: "introduzca su contraseña"},
    ]
  }
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private modalController: ModalController,
    private authservices: AuthService,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])),
      password: new FormControl("", Validators.compose([Validators.required]))
    })

    this.registerForm = this.formBuilder.group({
      name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])),
      password: new FormControl('', Validators.compose([Validators.required])),
      confirmpassword: new FormControl('', Validators.compose([Validators.required])),
    })
  }

  async openToast(){
    const toast = await
    this.toastController.create({
      message:'Error de video',
      duration: 2000
    })
  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  Enviarform( loginData: any ){
    this.authservices.loginUser(loginData).then(res => {
      this.router.navigateByUrl('menu/home')
      this.loginForm.reset()
    }).catch(err => {
      console.log(err);
      this.isAlertLogin = true
    })

  }

  async closeModal() {
    await this.modalController.dismiss();
  }
  

  async Register(RegisterData: any){

    this.authservices.RegisterUser(RegisterData).then(res => {
      this.closeModal()
      this.registerForm.reset()
    }).catch(err => {
      console.log(err);
      this.isAlertRegister = true
    })
  }
  


}
