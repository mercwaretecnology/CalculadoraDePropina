import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-propinas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './propinas.component.html',
  styleUrl: './propinas.component.scss'
})
export class PropinasComponent {
  dineroGastado: number = 0;
  calculo: number = 0;
  porcientoPropina: number = 0;
  calcular()
  {
   
    this.calculo = this.dineroGastado * 0.10;
    this.porcientoPropina = this.calculo;
    console.log('PORCIENTO A PAGAR\n', this.porcientoPropina);
   }

}
