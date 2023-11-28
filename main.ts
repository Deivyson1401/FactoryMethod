import { fabric_Computador } from "./fabric";

// instanciando tipo pc
const Computador_type_pc = fabric_Computador.create_computador(4, 120,2.4,'pc')
console.log(Computador_type_pc?.toString());

// instanciando tipo server
const Computador_type_server = fabric_Computador.create_computador(8, 240,3.4,'server')
console.log(Computador_type_server?.toString());

// tipo informado invalido
const computador_invalid = fabric_Computador.create_computador(8,120,2.4,'algo')
console.log(computador_invalid.toString());


