import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
    
  ]

  constructor() {}

}
