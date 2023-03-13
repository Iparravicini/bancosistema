export class Cuenta {
  #cliente;
  #saldo;

  constructor(cliente, numero, agencia, saldo) {
    this.numero = numero;
    this.agencia = agencia;
    this.#cliente = cliente;
    this.#saldo = saldo;
  }

  set cliente(valor) {
    if (valor instanceof Cliente) 
      this.#cliente = valor;
  }

  get cliente() {
    return this.#cliente;
  }

  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldo += valor;
    return this.#saldo;
  }

  retiroDeCuenta(valor) {
    _retiroDeCuenta(valor,0)
  }

  _retiroDeCuenta(valor, comision) {
    valor = valor * (1+comision/100);
    if (valor <= this.#saldo) 
        this.#saldo -= valor;
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }

  transferirParacuenta(valor, cuentaDestino) {
    this.retiroDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }

  prueba(){
    console.log('Metodo Padre');
  }
}
