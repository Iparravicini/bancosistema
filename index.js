/** Importacion de clases */
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";

const cliente = new Cliente('Tito','38232394','2394');
const cliente2 = new Cliente('Lio','38333333','2190');

const cuentaDeTito = new CuentaCorriente(cliente, '1', '001');
const cuentaDeLio = new CuentaCorriente(cliente2, '2', '002');


let saldo = cuentaDeTito.verSaldo();

saldo = cuentaDeTito.depositoEnCuenta(180);

console.log(CuentaCorriente.cantidadCuentas);

