/** Importacion de clases */
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { CuentaAhorro } from "./CuentaAhorro.js";


const cliente = new Cliente('Tito','38232394','2394');
const cliente2 = new Cliente('Lio','38333333','2190');

const cuentaDeTito = new CuentaCorriente (cliente, '1', '001');
const cuentaDeLio = new CuentaCorriente (cliente2, '2', '002');

const cuentaAhorroTito = new CuentaAhorro (cliente, '23', '001', 0);


console.log(cuentaDeTito)
cuentaDeTito.depositoEnCuenta(352);
console.log(cuentaDeTito.verSaldo());
cuentaDeTito.retiroDeCuenta(15);
console.log(cuentaDeTito.verSaldo());
console.log(cuentaAhorroTito);
cuentaAhorroTito.depositoEnCuenta(215);
console.log(cuentaAhorroTito.verSaldo());
cuentaAhorroTito.retiroDeCuenta(121);
console.log(cuentaAhorroTito.verSaldo());


