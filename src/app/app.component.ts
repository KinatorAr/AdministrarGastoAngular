import { Component } from '@angular/core';
import { ProsupuestoService } from './services/prosupuesto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto2';

  presupuesto: number = 0;
  restante: number = 0;
  gastos: any[] = [];

  constructor(private presupuestoService: ProsupuestoService){}

  ngOnInit() {
    const presupuestoInicial = Number (window.prompt('¿Cuál es tu presupuesto inicial?'));
    if (!presupuestoInicial || presupuestoInicial<=0){
      window.location.reload();
    }
    else{
      this.presupuestoService.establecerPresupuesto(presupuestoInicial);
      this.actualizarPresupuesto();
    }
  }

  private actualizarPresupuesto(){
    const {presupuesto, restante} = this.presupuestoService.obtenerPresupuesto();
    this.presupuesto = presupuesto;
    this.restante = restante;
    this.gastos = this.presupuestoService.obtenerGastos();
  }

  agregarGasto(nombre: string, cantidad: number, nombreInput: HTMLInputElement, cantidadInput: HTMLInputElement){
    const {restante} = this.presupuestoService.obtenerPresupuesto();
    if (!nombre || isNaN(cantidad) || cantidad <=0){
      alert("Por favor ingresa un nombre, un gasto válido y una cantidad numérica positiva.");
      return;
    }
    if (cantidad > restante){
      alert("Vas a Exceder tu Presupuesto Inicial");
      return;
    }
    else{
      this.presupuestoService.agregarGasto(nombre,cantidad);
      this.actualizarPresupuesto();
    }

    nombreInput.value = "";
    cantidadInput.value = "";
  }
  eliminarGasto(id: number){
    this.presupuestoService.eliminarGastos(id);
    this.actualizarPresupuesto();
  }
}
