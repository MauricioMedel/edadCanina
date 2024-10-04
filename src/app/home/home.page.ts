import { Component } from '@angular/core';
import { IonText, IonInput, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonInput, IonButton, FormsModule],
})
export class HomePage {

edad:number=0;
resultado:string='';

  constructor() {}

  calcular(){
  let edadCanina:number =this.edad * 7;
this.resultado ='La edad canina de su mascota'
+ edadCanina + 'años'
  }

}
