import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
  #cliente;
  numero;
  agencia;
  #saldo;
  static cantidadCuentas = 0;

  set cliente(valor) {
    if (valor instanceof Cliente) 
      this.#cliente = valor;
  }

  get cliente() {
    return this.#cliente;
  }

  constructor(cliente, numero, agencia) {
    this.cliente = cliente;
    this.numero = numero;
    this.agencia = agencia;
    this.#saldo = 0;
    CuentaCorriente.cantidadCuentas++; 
  }

  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldo += valor;
    return this.#saldo;
  }

  retiroDeCuenta(valor) {
    if (valor <= this.#saldo) this.#saldo -= valor;
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }

  transferirParacuenta(valor, cuentaDestino) {
    this.retiroDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }
}
