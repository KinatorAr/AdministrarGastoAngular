import { Injectable } from '@angular/core';

interface Gasto {
  nombre: string;
  cantidad: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProsupuestoService {
  private presupuesto: number = 0;
  private restante: number = 0;
  private gastos: Gasto[] = [];
  constructor() { }

  establecerPresupuesto(monto: number){
    this.presupuesto = monto;
    this.restante = monto;
  }

  obtenerPresupuesto (){
    return {presupuesto: this.presupuesto, restante: this.restante}
  }

  agregarGasto (nombre: string, cantidad: number){
    const gasto: Gasto = {nombre, cantidad, id: Date.now()};
    this.gastos.push(gasto);
    this.calcularRestante();
  }

  eliminarGastos(id: number){
    this.gastos = this.gastos.filter(gasto => gasto.id !== id);
    this.calcularRestante();
  }

  obtenerGastos(){
    return this.gastos;
  }

  private calcularRestante(){
    const gastado = this.gastos.reduce((total,gasto) => total + gasto.cantidad, 0);
    this.restante = this.presupuesto -  gastado;
  }
}
